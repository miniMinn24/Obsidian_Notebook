# Network Overview
Network communication - **topologies** (<mark style="background: #BBFABBA6;">mesh/tree/star</mark>), **mediums** (<mark style="background: #BBFABBA6;">ethernet/fiber/coax/wireless</mark>), and **protocols** (<mark style="background: #BBFABBA6;">TCP/UDP/IPX</mark>).

> **Example. 1**
> Smaller network and puting **ACL** around them is like **fences**. Attackers can jump over it but it looks suspicious and not common. *Why is the printer network talking to servers over HTTP?*

The `/24` network allows computers to talk to each other as long as the <mark style="background: #BBFABBA6;">first three octets</mark> of an IP Address are the same `(ex: 192.168.1.xxx).`

**URL** (Uniform Resource Locator) --- `www.hackthebox.eu` specifies *"building"* address
**FQDN** (Fully Qualified Domain Name) --- `https://ww.hackthebox.eu/example?floor=2&office=dev&employee=17` specifies *"floor, office, mailbox, employee"* for whom the package is intended.

## Basic Information
**Router** (post office) ---> **ISP** (main office) *searches location* ---> **DNS** returns geo-coordinates
**Web server** (recieves packet) ---> **Responds** (sends back packets)

![[../attachments/Pasted image 20250715005311.png]]

### Extra Points
1. **DMZ** (Demilitarised Zone) - additional **security layer** to <mark style="background: #ABF7F7A6;">organisation's LAN</mark>. An external network <mark style="background: #ABF7F7A6;">node can access only what is exposed</mark> in DMZ, while rest is protected behind firewall. Without it, it more likely to become **compromised** since clients can initiate communications with that website.
2. Each workstations should have a **Host-based Firewall** -- prevents from <mark style="background: #ABF7F7A6;">talking to other workstations</mark>. Else, `spoofing` or `MITM` attacks may occurs.
3. 

