---
date: 2026-05-23
tags:
  - course
  - cybersecurity
  - networking
---
**Table of Contents**

1. [Module 1 - Network Architecture](#module-1---network-architecture)
2. [Module 2 - Network Operations](#module-2---network-operations)
3. [Module 3 - Secure against network intrusions](#module-3---secure-against-network-intrusions)
4. [Module 4 - Security hardening](#module-4---security-hardening)

---
![[Pasted image 20260523135757.png]]

# Module 1 - Network Architecture

> [!quote] Chris: My path to cybersecurity
> "Despite this being a fairly technical field, the most important thing you're going to learn are the connections you're going to make other people."

## Network Tools

- **Hub**: A network device that broadcasts information to every device on the network (**similar to a Radio tower**).
- **Switch**: A device that makes connections between specific devices on a network by sending and receiving data between them (**Passes data to only intended destination**).
- **Router**: A network device that connects multiple networks together (**sending info to other device in a different network**).
- **Modem**: A device that connects your router to the internet and brings interest access to the LAN (**sending info to other device in different geographic location**).
- **Virtualization tools**: Pieces of software that perform network operations (**like cloud services**).


## Cloud Networks

**Cloud computing**: The practice of using remote servers, applications, and network services that are hosted on the internet instead of on local physical devices.

**Cloud network**: A collection of servers or computers that stores resources and data in remote data centers that can be accessed via the internet.  

## Introduction to network communication

**Data packet**: A basic unit of information that travels form one device to another within a network.  

![[Pasted image 20260523162320.png|385]]

**Bandwidth**: The amount of data a device receives every second.  
**Speed**: The rate at which data packets are received or downloaded.  
**Packet sniffing**: The practice of capturing and inspecting data packets across a network.  

## The TCP/IP model

**Transmission Control Protocol (TCP)**: An internet communication protocol that allows two devices to form a connection and stream data.  

**Internet Protocol (IP)**: A set of standards used for routing and addressing data packets as they travel between devices on a network.  

**Port**: A software-based location that organizes the sending and receiving of data between devices on a network.  
- **Port 25** - Email
- **Port 443** - Secure internet communication
- **Port 20** - Large file transfers

**TCP/IP model**: A framework used to visualize how data is organized and transmitted across the network.  

![[Pasted image 20260523163749.png]]

## IP addresses and network communication

**Internet Protocol (IP) address**: A unique string of characters that identifies the location of a device on the internet.  
- IPv4 : `19.117.18.132`
- IPv6: `823D:1111:2222:3333:4444:5555:6:77`

**MAC address**: A unique alphanumeric identifier that is assigned to each physical device on a network.  

![[Pasted image 20260524123321.png]]


# Module 2 - Network Operations

## Network Protocols
A set of rules used by two or more devices on a network to describe the order of delivery and the structure of the data.  
- **TCP**: An internet communications protocol that allows two devices to form a connection and stream data.
- **Address Resolution Protocol (ARP)**: A network protocol used to determine the MAC address of the next router or device on the path.
- **HTTPS (Secure)**: A network protocol that provides a secure method of communication between clients and website servers.
- **Domain Name System (DNS)**: A network protocol that translates internet domain names into IP addresses.
- **Simple Network Management Protocol (SNMP)**: a network protocol used for monitoring and managing devices on a network.

## Additional Network Protocols

| Private IP Addresses                                                                                                                                                                                      | Public IP Addresses                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Assigned by the router<br>- Unique only within private network<br>- No cost to use<br>- Address ranges:<br>-- 10.0.0.0-10.255.255.255<br>-- 172.16.0.0-172.31.255.255<br>-- 192.168.0.0-192.168.255.255 | - Assigned by ISP and IANA<br>- Unique address in global internet<br>- Costs to lease a public IP address<br>- Assignable address ranges:<br>-- 1.0.0.0-9.255.255.255<br>-- 11.0.0.0-126.255.255.255<br>-- 128.0.0.0-172.15.255.255<br>-- 172.32.0.0-192.167.255.255<br>-- 192.169.0.0-233.255.255.255 |

| Protocol | Port                                                                  |
| -------- | --------------------------------------------------------------------- |
| DHCP     | UDP port 67 (servers), UDP port 68 (clients)                          |
| ARP      | none                                                                  |
| Telnet   | TCP port 23                                                           |
| SSH      | TCP port 22                                                           |
| POP3     | TCP/UDP port 110 (unencrypted), TCP/UDP port 995 (encrypted, SSL/TLS) |
| IMAP     | TCP port 143 (unencrypted), TCP port 993 (encrypted, SSL/TLS)         |
| SMTP     | TCP/UDP port 25 (unencrypted)                                         |
| SMTPS    | TCP/UDP port 587 (encrypted, TLS)                                     |

> [!quote] Antara: Working in network security
> "A typical day in the life of an entry-level network security engineer would start with solving a problem."
> "You might get your solution just by talking to people."

## Wireless protocols

**IEEE 802.11 (WiFi)**: A set of standards that define communication for wireless LANs.  
**WiFi Protected Access (WPA)**: A wireless security protocol for devices to connect to the internet (now used WPA2/WPA3).  

## Firewalls and network security measures

**Port filtering**: A firewall function that blocks or allows certain port numbers to limit unwanted communication.  

**Cloud-based firewalls**: Software firewalls that are hosted by a cloud service provider.  

#### Stateful vs Stateless Firewall
- **Stateful**: A class of firewall that keeps track of information passing through it and proactively filters out threats.
- **Stateless**: A class of firewall that operates based on predefined rules and does not keep track of information from data packets.

**Benefits of next generation firewalls (NGFWs)**
- Deep packet inspection
- Intrusion protection
- Threat intelligence

## Virtual Private Networks (VPNs)
A network security service that changes your public IP address and hides your virtual location so that you can keep your data private when you are using a public network like the internet.

**Encapsulation**: A process performed by a VPN service that protects your data by wrapping sensitive data in other data packets.  

## Security zones
A segment of a network that protects the internal network from the internet.  
- **Uncontrolled zone**: Any network outside of the organization's control.
- **Controlled zone**: A subnet that protects the internal network from the uncontrolled zone.
	- Demilitarized zone (DMZ)
	- Internal network
	- Restricted zone

![[Pasted image 20260524151946.png]]
**Subnetting** is the process of taking one large network and dividing it into several smaller, organized groups called subnets.  

**Classless Inter-Domain Routing (CIDR)** is a method of assigning subnet masks to IP addresses to create a subnet, replaced Classful from limited IPs. 

## Proxy servers
A server that fulfills the requests of a client by forwarding them on to other servers.  

![[Pasted image 20260524155913.png]]

**Forward proxy server**: Regulates and restricts a person's access to the internet.  
**Reverse proxy server**: Regulates and restricts the internet's access to an internal server.  

# Module 3 - Secure against network intrusions

## Malicious packet sniffing

**Passive packet sniffing**: A type of attack where data packets are read in transit.  
**Active packet sniffing**: A type of attack where data packets are manipulated in transit.  

Use **VPN** or **SSL/TLS (HTTPS, etc)** to prevent this attack. Even the attacker have access, they won't be able to read the data (which will be encrypted).  

## IP Spoofing
A network attack performed when an attacker changes the source IP of a data packet to impersonate an authorized system and gain access to a network.  

#### 1. On-path attack
An attacker where a malicious actor places themselves in the middle of an authorized connection and intercepts or alters the data in transit.  

![[Pasted image 20260525121534.png]]

#### 2. Replay attack
A network attack performed when a malicious actor intercepts a data packet in transit and delays it or repeats it at another time.  

#### 3. Smurf attack
A network attack performed when an attacker sniffs an authorized user's IP address and floods it with packets.  

# Module 4 - Security hardening

## Security Hardening
The practice of strengthening a system to reduce its vulnerability and attack surface.  
**Attack surface**: All the potential vulnerabilities that a threat actor could exploit.  

![[Pasted image 20260525151206.png]]

**Penetration test**: A simulated attack that helps identify vulnerabilities in systems, networks, websites, applications, and processes.  

## OS hardening practices
**Operating system (OS)**: The interface between computer hardware and the user.  

**Baseline configuration (baseline image)**: A documented set of specifications within a system that is used as a basis for future builds, releases, and updates.  

**Multi-factor authentication (MFA)**: A security measure which requires a user to verify their identity in two or more ways to access a system or network.
- Something you know (password)
- Something you have (ID card)
- Something unique about you (finger print)

#### Assessing vulnerabilities
- **Virtual machines (VMs)**: An additional layer of security for an organization because they can be used to run code in an isolated environment, preventing malicious code from affecting the rest of the computer or system.
- **Sandbox environments**: Commonly used for testing patches, identifying and addressing bugs, or detecting cybersecurity vulnerabilities.  

**TCP Flag codes include:**
- **Flag `S`**: Connection Start
- **Flag `F`**: Connection Finish
- **Flag `P`**: Data Push
- **Flag `R`**: Connection Reset
- **Flag `.`**: Acknowledgement

## Network hardening practices

#### Firewall
irewalls allow or block traffic based on a set of rules. As data packets enter a network, the packet header is inspected and allowed or denied based on its port number. NGFWs are also able to inspect packet payloads. Each system should have its own firewall, regardless of the network firewall.

![[Pasted image 20260525214233.png]]

#### Intrusion Detection System
The IDS is configured to detect known attacks. IDS systems often sniff data packets as they move across the network and analyze them for the characteristics of known attacks. Some IDS systems review not only for signatures of known attacks, but also for anomalies that could be the sign of malicious activity. When the IDS discovers an anomaly, it sends an alert to the network administrator who can then investigate further.

![[Pasted image 20260525214257.png]]

####  Intrusion Prevention System
An IPS searches for signatures of known attacks and data anomalies. An IPS reports the anomaly to security analysts and blocks a specific sender or drops network packets that seem suspect. 

![[Pasted image 20260525214326.png]]

#### Security Information and Event Management (SIEM)
An application that collects and analyzes log data to monitor critical activities in an organization. SIEM tools work in real time to report suspicious activity in a centralized dashboard. SIEM tools additionally analyze network log data sourced from IDSs, IPSs, firewalls, VPNs, proxies, and DNS logs.

![[Pasted image 20260525214420.png]]

> [!quote] Kelsey: Cloud security explained
> "As more and more companies move into cloud. You may just be the person who can help one of those organizations finally make that leap because they have a professional on their team."

## Secure the cloud

- **Identity access management (IAM)**: is a collection of processes and technologies that helps organizations manage digital identities in their environment.
- **Configuration**: Each cloud service necessitates precise configuration to uphold security and compliance standards.
- **Attack surface**: Cloud service providers (CSPs) offer numerous applications and services for organizations at a low cost. Every service or application on a network carries its own set of risks and vulnerabilities and increases an organization’s overall attack surface.
- **Zero-day attacks**: Zero-day attacks are an important security consideration for organizations using cloud or traditional on-premise network solutions. A zero day attack is an exploit that was previously unknown.
- **Visibility and tracking**: CSPs take responsibility for security in the cloud, but they do not allow the organizations that use their infrastructure to monitor traffic on the CSP’s servers.
- **Share responsibility model**: CSP must take responsibility for security involving the cloud infrastructure, including physical data centers, hypervisors, and host operating systems.  



















