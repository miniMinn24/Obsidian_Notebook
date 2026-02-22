---
date: 2026-02-22
---
## Network Investigation
**Objectives:** The primary objective is to conduct a thorough investigation into a suspected external network communication Incident with the goal of identifying the source, scope, and impact of the attack.  
**Incident Details:** Investigate the suspicious external communication activity detected by the network monitoring systems. Investigate the PCAP to identify the targeted IP, source, and potential impact.  
**Resources:**
- **PCAP File Name**: `externalpcapng`
- **Target Port**: `4444`
**About RFI**: External network communication refers to the interaction and data exchange between a local network and external networks, when a attacker successfully deploy the payload over the host machine it will establish a stable connection between the attacker and the victim.  
![[Pasted image 20260222131649.png]]

**Investigation Mindmap:**
![[Pasted image 20260222131830.png]]

---
### Step 1
The first step of the investigation begins by analysing the given network PCAP. We have provided you with the suspected PCAP file which has been extracted from one of the compromised host machines.

![[Pasted image 20260222132025.png]]

> **Wireshark** is a popular open-source network protocol analyzer that allows users to capture and inspect the data travelling back and forth on a network in real time.


### Step 2
Investigating external communication involves careful steps to ensure security and determine the nature and potential threats associated with the network logs.
1. Prioritise the detected port activity
2. Identifies source and destination IP addresses
3. Examine the traffic flow
4. Examine the External to Internal traffic

**Prioritise the detected port activity**  
Identifying and extracting particular logs which are associated with the identified activity. Use the following command to obtain the web-access log.
```wireshark
tcp.dstport == 4444
```

![[Pasted image 20260222132231.png]]

> **Decoders** are the key components which are responsible for parsing raw logs into a structured format that can be easily analysed and understood by the system.

**Identifies source and destination IP addresses**  
The next step is to identify and retrieve the IP activity which are associated with the detected port activity, from the above result we identified that the `src 192.168.132.238 → 192.168.132.242` over destination port `4444`.
```wireshark
tcp.dstport == 4444 && ip.src == 192.168.132.238 && ip.dst == 192.168.132.242
```

![[Pasted image 20260222132532.png]]

**Examine the traffic flow**  
To examine the network traffic it is recommended to check the packet flag from the above observation result. We identified **SYN** **ACK** this pattern observed when a src dest established a stable communication, and **PSH** command generally observed when a src trying to transmit data or executing command.  
![[Pasted image 20260222133142.png]]

This particular pattern was observed when a victim got compromised and established a stable shell with the attacker machine. On further checking the packet we identified multiple OS command associated with the network activity.
![[Pasted image 20260222135814.png]]
![[Pasted image 20260222135842.png]]

**Examine the External to Internal traffic**  
After determining the suspicious attack pattern its recommend to check the reverse traffic vice verse, by examin the vice verse traffic its give a better visibility over the detected activities.
```wireshark
ip.src == 192.168.132.242 && ip.dst == 192.168.132.238
```

![[Pasted image 20260222140948.png]]

As per the above result we identified a stable communication with multiple PUSH requests,
examining the PUSH request to identify the command execution.


### Conclusion
- Port `4444` is been associated with suspicious network communication on Remote File Inclusion Activity detected.
- Src port `49816` is associated with dst port `4444` in given `external.pcapng`.

---
## Forensic Investigation
**Objectives**: The primary objective is to conduct a thorough investigation into a suspected memory dump with the goal of identifying the source, scope, and impact of the attack.  
**Incident Details:** Investigate the suspicious endpoint compromise activity by the Endpoint monitoring systems. Investigate the .RAW file to identify the targeted IP, source, and the root cause of the activity.  
- **Memory Dump**: `suspected.raw`
**About Memory Dump Analysis:** Memory dump analysis plays a critical aspect of identifying the root cause and incident response, A memory dump, also known as a core dump or a crash dump, is a file that captures the contents of a computer's volatile memory at a specific point in time. This snapshot of memory can provide valuable information for understanding system behaviour, identifying anomalies, and investigating security incidents.

![[Pasted image 20260222141749.png]]