---
date: 2026-05-05
---

# Introduction

**KVM** ဆိုတဲ့ Kernel-based Virtual Machine ကကျွန်တော်တို့ Arch Linux ပေါ်မှာပိုမြန်ဆန်တဲ့ Type-1 Hypervisor အဖြစ်အသုံးပြုလို့ရအောင် လုပ်ပေးပါတယ်။ သူကလုံးဝ Free & Open-source၊ x86 hardware သီးသန့်ဖြစ်ပါတယ်။ ဒါပေမယ့် Setup နည်းက Arch based distro တွေပေါ်မှာတခြားသာမန်နည်းတွေနဲ့မတူတော့ ဒီ Guide လေးမှာ နားလည်ရလွယ်အောင်ရေးသားလိုက်ပါတယ်။

![[Pasted image 20260505150521.png]]

### My thoughts on KVM as a VBox user

KVM က Type-1 Hypervisor ဖြစ်တာကြောင့် Kernel-level ပေါ်မှာတိုက်ရိုက်လည်ပတ်တာဖြစ်ပါတယ်။ တခြား Host OS ရဲ့ပေါ်ဆုံးမှာ Application အဖြစ် run နေတဲ့ Type-2 Hypervisor (VirtualBox၊ VMware Workstation) တို့နဲ့ယှဥ်လိုက်ရင် KVM ကပိုပြီး Bare-Metal နီးပါး Efficiency ကိုရရှိစေနိုင်ပါတယ်။ ဒါကြောင့်ကိုယ်တိုင် Cybersecurity (Malware analysis | SOC Labs) လုပ်တဲ့အပိုင်းတွေအခါကျ Resource-intensive tools တွေတပြိုင်နက်အသုံးပြုတဲ့အခါ မလေးတော့ပါဘူး။

## Prerequisites

Installation မစတင်ခင်အတွက် လိုအပ်ချက်လေးတွေပါ။

- ကိုယ့် Arch Linux system (VM ပေါ်မှာဆိုရင် nested virtualization လေးဖွင့်ထားရပါမယ်)
- Hardware virtualization support (**Intel VT-x** or **AMD-V**) ပါဝင်တဲ့ CPU
- Sudo/Root access
- အနည်းဆုံး 4GB RAM (VM တစ်ခုထက်ပိုဆောက်မယ်ဆိုရင်တော့ များလေကောင်းလေပါပဲ)

# 1. CPU Virtualization Support

အရင်ဆုံးကိုယ့် CPU က Hardware Virtualization ရှိမရှိကို ဒီ `cpuinfo` မှာကြည့်ကြည့်နိုင်ပါတယ်။ Output မှာ `VT-x` or `AMD-V` တစ်ခုခုပေါ်နေလို့ရှိရင် CPU က Hardware virtualization support ပေးဆိုတဲ့သဘောပါ။

```bash
$ LC_ALL=C.UTF-8 lscpu | grep Virtualization
Virtualization:                          VT-x
```

> [!note] Enable Hardware Virtualization in BIOS/UEFI
> အကယ်၍ `VT-x` or `AMD-V` လို့တစ်ခုမှပေါ်မနေဘူးဆိုရင် ကိုယ့်စက် BIOS/UEFI setting ထဲမှာ Enable လုပ်ပေးထားဖို့လိုအပ်နေပါလိမ့်မယ်။

ဆက်လက်ပြီးတော့ KVM Kernel Modules တွေက loaded ဖြစ်နေလားစစ်ရပါမယ်။ Standard Kernel တွေမှာတော့ ပုံမှန်အားဖြင့် Automatically load ဖြစ်နေပြီးသားပါ။

```bash
$ lsmod | grep kvm
kvm_intel             536576  1
kvm                  1474560  3 kvm_intel
irqbypass              16384  1 kvm
```

Output မှာ `kvm_intel` (Intel) သို့မဟုတ် `kvm_amd` (AMD) လို့မပေါ်ရင် ကိုယ်တိုင် Manually load လုပ်ဖို့လိုအပ်ပါလိမ့်မယ်။

```bash
# Intel
sudo modprobe kvm_intel

# (Or) AMD
sudo modprobe kvm_amd
```

နောက်အချိန်တွေမှာလည်း Automatically load လုပ်ဖို့ Persistent ဖြစ်နေအောင်ပြင်လိုက်ပါ။

```bash
echo "kvm_intel" | sudo tee /etc/modules-load.d/kvm.conf
```

# 2. Installing Packages for KVM

အပေါ်ကဟာတွေစစ်ဆေးပြီးရင် Package တွေ Install လုပ်နိုင်ပါပြီ။ Arch Official Repositories ထဲကနေ ရိုးရိုးရှင်းရှင်းဒေါင်းနိုင်တာမို့လို့ Setup အတွက်အကုန်ပါဝင်ပြီးသားဖြစ်ပါတယ်။

```bash
# Get latest updates
sudo pacman -Syu

# Install required packages
sudo pacman -S qemu-full libvirt virt-manager dnsmasq edk2-ovmf
```

အောက်မှာ Package တစ်ခုချင်းဆီအကြောင်းကိုရှင်းပြပေးထားပါတယ်။

| Package        | Purpose                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------- |
| `qemu-full`    | QEMU (Quick Emulator) သူက VM တွေအတွက် Network cards၊ disks၊ graphics တွေကိုထိန်းညှိလို့ရတဲ့ Frontend တစ်ခုပါ။ |
| `libvirt`      | Virtualization ပါဝင်တဲ့ Daemon၊ API တို့ KVM နဲ့ QEMU နှစ်ယောက်သားအလုပ်လုပ်နိုင်အောင်ပါ။                      |
| `virt-manager` | VM တွေကိုအလွယ်တကူ manage လုပ်နိုင်အောင် GTK-based interface လေးတစ်ခုပါ။                                       |
| `dnsmasq`      | NAT-based VM တွေအတွက် DHCP နဲ့ DNS server ထောက်ကူပေးတဲ့ Networking အတွက်ပါ။                                   |
| `edk2-ovmf`    | UEFI boot သုံးတဲ့ VM တွေအတွက်၊ Secure Boot အတွက်လိုအပ်တဲ့ဟာလေးပါ။                                             |

# 3. Activate libvirt Daemon

Package အားလုံးဆွဲပြီးတာနဲ့ `libvirtd` service ကိုလက်ရှိမှာ run နေအောင်လုပ်ပေးလိုက်ပါ။ ဒီ Daemon (Background process) ကစက်ပေါ်မှာရှိနေမှ VMs၊ Networks၊ Storage တွေကိုသေချာကိုင်တွယ်ပေးမှာဖြစ်ပါတယ်။

```bash
sudo systemctl enable --now libvirtd
```

ပြီးရင် Service ကို active ဖြစ်သွားပြီလားစစ်ကြည့်ပါ။

```bash
$ systemctl status libvirtd
● libvirtd.service - libvirt legacy monolithic daemon
     Loaded: loaded (/usr/lib/systemd/system/libvirtd.service; enabled; preset: di>
    Drop-In: /usr/lib/systemd/system/libvirtd.service.d
             └─10-secret.conf
     Active: active (running) since Tue 2026-05-05 08:29:31 +0630; 9h ago
     ...
```

# 4. Add User to libvirt Group

ပုံမှန်အားဖြင့် VMs တွေကို libvirt မှတဆင့် Manage လုပ်တဲ့အခါကျရင် Root privileges လိုအပ်တာကြောင့် Regular User အဖြစ်နဲ့ချောချောမွေ့မွေ့သုံးနိုင်အောင်လို့ ကိုယ့် User ကို **libvirt group** ထဲထည့်ထားရပါလိမ့်မယ်။ **ဒီအဆင့်ကအရေးကြီးပါတယ်။**

```bash
sudo usermod -aG libvirt $USER
```

ပြီးရင် Logout၊ Login ပြန်ဝင်လိုက်ပါ။ ဒါမှ Group permission မှာ Saved changes ဖြစ်သွားပါလိမ့်မယ်။

```bash
$ groups
miniminn vboxusers vboxsf ollama docker libvirt wheel
                                     #     ^
                                     # Verify this
```

အခုလက်ရှိ User က Output ထဲကအတိုင်း `libvirt` Group membership ထဲမှာပါမပါစစ်ကြည့်လိုက်ပါ။

# 5. libvirt Context Fix

ဒါကတော့လိုရမယ်ရ VM က NAT သုံးအတဲ့အခါ network မမြင်ရတာတို့၊ VM config မတူတာတို့မကြုံရအောင် ကြိုတင် Fix လုပ်ထားလိုက်တာပါ။ ဒီ libvirt မှာ connection type ၂ မျိုးရှိပါတယ်။

- `qemu:///system` for system-wide (**Recommended**)
  သူက libvert daemon ကိုအသုံးပြုပြီး VM တွေကိုစီမံတဲ့အခါ resources တွေကိုအပြည့်အဝထိန်းချုပ်ပေးတာဆိုတော့ Permission error လည်းကင်းပါတယ်။ ဒီ System-wide အဖြစ်နဲ့ VM တွေကိုချောချောမွေ့မွေ့ Manage လုပ်နိုင်မှာမို့လို့ ဒါကိုပဲ Recommend ပေးပါတယ်။
- `qemu:///session` for user-only
  Default ဆိုရင်ဒါပဲဖြစ်မှာပါ။ သူက `~/.config/libvirt` ကိုပဲသုံးပြီး Host ပေါ်မှာ Virtual network interface မပေါ်တာတို့၊ Limited Permission တို့ကြုံရတတ်တော့ Confused ခဏခဏဖြစ်ပါလိမ့်မယ်။

ဒါကြောင့် Libvirt clients (virsh, virt-manager, etc.) အားလုံးကို one session per user ထက် System-wide hypervisor ကိုချိတ်ဆက်ဖို့ပြောထားလိုက်ပါတယ်။

```bash
export LIBVIRT_DEFAULT_URI=qemu:///system
```

# 6. Default NAT Network Setup

VMs တွေကို Host ကနေတစ်ဆင့် Internet Access ပေးဖို့အတွက် libvirt မှာ default NAT ပါလာပြီးသားပါ။ အရင်ဆုံးသူ့ရဲ့ default file ရှိမရှိစစ် Text editor တစ်ခုခုနဲ့စစ်ကြည့်လိုက်ပါ။

```bash
sudo vim /etc/libvirt/qemu/networks/default.xml
```

File exist ဖြစ်နေတယ်ဆိုရင် အောက်ကလိုရှိနေပါလိမ့်မယ်။ အကယ်၍ Empty ဖြစ်နေတယ်ဆိုရင်တော့ ဒီ Default စာလေးတွေကိုယ်တိုင် Manually ပြင်လိုက်ပါ။

```bash
<network>
  <name>default</name>
  <forward mode='nat'/>
  <bridge name='virbr0' stp='on' delay='0'/>
  <ip address='192.168.122.1' netmask='255.255.255.0'>
    <dhcp>
      <range start='192.168.122.2' end='192.168.122.254'/>
    </dhcp>
  </ip>
</network>
```

VM အတွက် Network service ကို Auto-start ဖြစ်နေဖို့ အောက်ကအတိုင်း Register လုပ်လိုက်ပါ။

```bash
sudo virsh net-define /etc/libvirt/qemu/networks/default.xml
sudo virsh net-start default
sudo virsh net-autostart default
```

ပြီးရင် Network service active ဖြစ်သွားပါလိမ့်မယ်။

```bash
$ sudo virsh net-list --all
 Name      State    Autostart   Persistent
--------------------------------------------
 default   active   yes         yes
```

`virbr0` ဆိုတဲ့ Virtual Bridge Network Interface ကို Subnet `192.168.122.0/24` နဲ့ Create လုပ်ထားတာကိုမြင်ရပါလိမ့်မယ်။ ဒီ IP Address ကို အရှေ့ Package ဆွဲတုန်းက DNS (dnsmasq) ကြောင့်ရပြီးတော့ Host ပေါ်က NAT ကနေတစ်ဆင့် Internet ကိုရသွားတာဖြစ်ပါတယ်။ ဒါကြောင့်အကယ်၍ Network fail ဖြစ်သွားခဲ့ရင် dnsmasq မရှိလို့လည်းဖြစ်နိုင်ပါတယ်။

```bash
$ ip addr | grep virbr0
3: virbr0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc htb state DOWN group default qlen 1000
    inet 192.168.122.1/24 brd 192.168.122.255 scope global virbr0
```

# 7. Launching KVM for first time

Terminal or Application Launcher တစ်ခုခုကနေဖြစ်ဖြစ် `virt-manager` ကိုဖွင့်နိုင်ပါတယ်။

```bash
virt-manager
```

![[Pasted image 20260505201439.png]]

ပထမဆုံးစဖွင့်တဲ့အချိန်မှာ virt-manager က local QEMU/KVM hypervisor သွားချိတ်နေတာကို "Connecting..." လို့တွေ့ရပါလိမ့်မယ်။ ချိတ်ပြီးပြီဆိုတာနဲ့ အောက်ကအတိုင်း QEMU/KVM ကို list ထဲမှာပေါ်နေပါလိမ့်မယ်။ ဒါဆိုရင် VM တွေအေးဆေးဆောက်နိုင်ပါပြီ။

![[Pasted image 20260505203746.png]]

ဒါမှမဟုတ် "Not Connected" ပြနေလို့ရှိရင် libvirt daemon ကိုတစ်ချက်စစ်ကြည့်ပါ။ User ကိုယ်တိုင်ကလည်း libvirt group ထဲမှာရှိနေမှ ရမှာဖြစ်ပါတယ်။

# 8. Creating a VM for Parrot OS

QEMU/KVM မှာ VM ဆောက်ရတာရိုးရိုးရှင်းရှင်းပါပဲ။ အောက်မှာ ကျွန်တော် Parrot OS HTB Edition ကို ISO နဲ့ဘယ်လိုတင်ခဲ့လဲဆိုတာကို ပြောပြလိုက်ပါတယ်။

ဒီမှာတစ်ခုထပ်လုပ်ခဲ့တာက virtlib ကို Home Directory Permission issue နဲ့မညှိအောင်လို့ ကျွန်တော့် ISO file တွေအကုန်လုံးကို virtlib ရဲ့ `/var/lib/libvirt/images/` ထဲမှာပဲ သူ့ဟာသူရှိနေအောင်လို့ရွေ့ထားလိုက်ပါတယ်။

```bash
$ mv -r Parrot-spin-htb-7.1_amd64.iso /var/lib/libvirt/images/
```

1. Click **File > New Virtual Machine**:

   ![[Pasted image 20260505205032.png]]

2. Choose your **installation source - Local install media (ISO) > Forward**:

   ![[Pasted image 20260505205221.png]]
   ![[Pasted image 20260505210034.png]]

3. Linux ISO file ကဘာ Distro အမျိုးအစားလည်း Detect မဖြစ်ဘူးဆိုတော့ ကိုယ်တိုင် Manually ရွေးလိုက်ပါတယ်။ Parrot OS က Debian based ဆိုတော့ **Debian 11** ထားလိုက်လည်းရပါတယ်။

   ![[Pasted image 20260505210354.png]]

4. Set memory and CPU allocation. **2048 MB RAM** and **2 vCPUs** ဆိုရင်အဆင်ပြေပါတယ်။

   ![[Pasted image 20260505210813.png]]

> ဒါပေမယ့် ဒီ Parrot OS HTB Edition က **minimum 4GB** ရှိမှ Installation လုပ်တဲ့အခါ Feature စုံမယ်လို့ပြောပါတယ်။ ဒါကြောင့်လောလောဆယ် 4 GB RAM ပေးထားလိုက်ပြီး Installation ပြီးမှ VM setting ထဲမှာ 2 GB သွားပြန်ပြောင်းလည်းအဆင်ပြေပါတယ်။

5. Virtual disk အတွက် 20-40 GB တည်းနဲ့ Linux အတွက်အဆင်ပြေနိုင်ပါတယ်။ Windows ဆိုရင်တော့ 50+ GB ပေါ့။

   ![[Pasted image 20260505211124.png]]

6. အားလုံးပြီးပြီဆိုတော့ VM ပေါ်မှာ Installation စတင်နိုင်ပါပြီ။

   ![[Pasted image 20260505211353.png]]

ဒီကနေဆက်ပြီးတော့ ကိုယ်တိုင် Parrot OS တင်ပြီးသွားရင် Labs တွေလေ့ကျင့်ဖို့ပဲဖြစ်ဖြစ်၊ Malware analysis၊ Blue Team workflows တွေကို VirtualBox၊ VMware workstation တို့ထက်ပိုမြန်ဆန်တဲ့ KVM ရဲ့ Kernel level efficiency ကိုအသုံးချရင်းစိတ်ကြိုက်စမ်းနိုင်ပါပြီခင်ဗျာ။

![[2026-05-02-203505_hyprshot.png]]

---

> [!info] Thanks for reading!
> ဒီ Blog နဲ့ပတ်သက်ပြီး Feedbacks၊ Troubleshooting၊ Mistakes ထောက်ပြစရာတွေရှိရင် ဒီ Blog ကို Share ခဲ့တဲ့ Social Platforms မှာ Comment ချပေးနိုင်ပါတယ်ခင်ဗျာ။ ကိုယ်တိုင်လည်းအကောင်းဆုံးကြိုးစားရင်း လေ့လာသွားပါမယ်ခင်ဗျာ။
