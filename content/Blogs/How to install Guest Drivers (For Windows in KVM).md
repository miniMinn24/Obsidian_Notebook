---
date: 2026-05-13
tags:
  - virtualization
  - kvm
  - windows
---
![[Pasted image 20260514002201.png]]

# Introduction

KVM ထဲမှာ Windows 10/11 တင်ပြီးသွားတဲ့သူတွေအတွက် Guest Drivers လေးတွေသီးသန့်သွင်းပေးလိုအပ်ပါလိမ့်မယ်၊ ဒါမှ copy & paste၊ drag & drop၊ performance အတွက်လိုအပ်တဲ့ feature တွေချောချောမွေ့မွေ့အသုံးပြုနိုင်မှာဖြစ်ပါတယ်ခင်ဗျာ။

## 1. Downloading virtio-win.iso

![[Pasted image 20260513225445.png]]

ဒီ [Fedora site](https://fedora-virt.repo.nfrance.com/virtio-win/direct-downloads/stable-virtio/) မှာ `virtio-win-*.iso` ဖိုင်လေးဒေါင်းပြီးရင် ဖိုင်ကို virt-manager ရဲ့ Image တွေသိမ်းထားတဲ့နေရာထဲ ရွေ့ထားလိုက်ပါ။

```bash
sudo cp -r ./virtio-win.iso /var/lib/libvirt/images 
```

## 2. Adding Hardware (virtio-win) as CDROM

Virt-manager ကိုဖွင့်ပြီး ကိုယ့် Windows VM settings ထဲသွားပြီး "Add Hardware" ဖွင့်လိုက်ပါ။

![[Pasted image 20260513225942.png]]

ခုနကဒေါင်းလိုက်တဲ့ `virtio-win.iso` ကို Windows VM ထဲ CD-ROM အဖြစ်သွင်းဖို့ အောက်ပါအတိုင်းလုပ်ထားလိုက်ပါ။ 
> *Storage > Select or create custom storage (Choose **virtio-win.iso** path) > Device type: **CDROM** > Finish*.

![[Pasted image 20260513230451.png]]

Finish လုပ်ပြီးရင် Windows VM settings info ထဲမှာ "SATA CDROM X" ပေါ်လာပါလိမ့်မယ်။ Details မှာ virtio-win.iso ပါလားတစ်ချက်ပြန်စစ်ကြည့်ပါ။ ပြီးရင် Windows VM ကို boot ဖွင့်လို့ရပါပြီ။

![[Pasted image 20260513231011.png]]

## 3. Installing Guest Tools into Windows

Windows VM ကိုဖွင့်ပြီးလို့ *This PC* ထဲမှာ CD Drive အသစ်တစ်ခုပေါ်လာပြီဆို သူ့ကိုဖွင့်ကြည့်လိုက်ပါ။

![[Pasted image 20260513231340.png]]

အဲ့ CD Drive ထဲမှာ **virtio-win-guest-tool.exe** ကိုရှာပြီးတော့ Run လိုက်ပါ။ ပြီးရင် Installation Wizard ပြပေးတဲ့အတိုင်း Install လိုက်လုပ်သွားဖို့ပဲကျန်ပါတော့တယ်။

![[Pasted image 20260513231617.png]]

![[2026-05-13_23-20-38_COMPRESSED.mp4]]

# Conclusion

Virtio drivers တွေက Windows VM မှာဘာလို့လိုအပ်တာလဲဆိုတော့ KVM အတွက် Paravirtualized hardware မှာ lack of support ဖြစ်တာကြောင့်ပါ။ အဲ့တာမသွင်းထားရင် Hypervisor (KVM) ကနှေးလာမယ်၊ Performance lag တွေရှိနေမယ် စသဖြင့်ကြုံတွေ့ရပါတယ်။ Virtio Drivers ရှိနေမှ Windows VM နဲ့ KVM Host ကြာထဲမှာတိုက်ရိုက် Communicate လုပ်နိုင်အောင်ကူညီပေးပြီး I/O speeds တွေအားလုံးကို Native ကျကျအလုပ်လုပ်ပေးနိုင်အောင်ကူညီပေးပါတယ်။ 


---

> [!info] Thanks for reading!
> ဒီ Blog နဲ့ပတ်သက်ပြီး Feedbacks၊ Troubleshooting၊ Mistakes ထောက်ပြစရာတွေရှိရင် ဒီ Blog ကို Share ခဲ့တဲ့ Social Platforms မှာ Comment ချပေးနိုင်ပါတယ်။ ကိုယ်တိုင်လည်းအကောင်းဆုံးကြိုးစားရင်း လေ့လာသွားပါမယ်ခင်ဗျာ။
