---
date: 2026-05-02
tags:
  - defensive
  - blueteam
  - wireshark
---
```
[Writeup in progress]
```

**MS-NLB-PhysServer**: Wireshark vendor name translation for a specific range of locally administered MAC addresses (starting with `02:04:`) used by **Microsoft Network Load Balancing (NLB)** in unicast mode.  
It indicates that a server in a cluster is operating in unicast mode, where NLB replaces the physical NIC’s original MAC address with a unique NLB-generated MAC address to facilitate load balancing.

