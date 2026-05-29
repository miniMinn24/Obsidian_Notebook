---
date: 2026-05-23
tags:
  - course
  - cybersecurity
  - networking
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

## Cybersecurity Incident Report: Network Traffic Analysis

**Part 1: Provide a summary of the problem found in the the tcpdump log.**  
As part of the DNS protocol, the UDP protocol was used to contact the DNS server to retrieve the IP address for the domain name of `yummyrecipesforme.com`. The ICMP protocol was used to respond with an error message, indicating issues contacting the DNS server. The UDP message going from your browser to the DNS server is shown in the first two lines of every log event. The ICMP error response from the DNS server to your browser is displayed in the third and fourth lines of every log event with the error message, “UDP port 53 unreachable.” Since port 53 is associated with DNS protocol traffic, we know this is an issue with the DNS server. Issues with performing the DNS protocol are further evident because the plus sign after the query identification number 35084 indicates flags with the UDP message and the “A?” symbol indicates flags with performing DNS protocol operations. Due to the ICMP error response message about port 53, it is highly likely that the DNS server is not responding. This assumption is further supported by the flags associated with the outgoing UDP message and domain name retrieval.  

**Part 2: Explain your analysis of the data and provide at least one cause of the incident.**  
The incident occurred today at 1:24 p.m. Customers notified the organization that they received the message “destination port unreachable” when they attempted to visit the website yummyrecipesforme.com. The cybersecurity team providing IT services to their client organization are currently investigating the issue so customers can access the website again. In our investigation into the issue, we conducted packet sniffing tests using tcpdump. In the resulting log file, we found that DNS port 53 was unreachable. The next step is to identify whether the DNS server is down or traffic to port 53 is blocked by the firewall. The DNS server might be down due to a successful Denial of Service attack or a misconfiguration. 

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

## Cybersecurity Incident Report
**Section 1: Identify the type of attack that may have caused this
network interruption**  

While web server was normally communicating with the internal hosts, the server was loaded by a volume of network traffic and was unable to use the service by hosts.  
The logs show that the server was communicating with other hosts normally, but suddenly, an unknown IP address appeared and it started to perform send multiple SYN requests to the server.  
The event could be the server is under DoS attack by being loaded with a volume of network traffics.  

**Section 2: Explain how the attack is causing the website to malfunction**  
When visitors try to establish a connection with the web server, a three-way handshake is used:

1. First, the client sends `SYN` to the web server requesting if a connection can be able to establish.
2. Second, the server acknowledges the request by sending `SYN/ACK` to the client.
3. Lastly, the client acknowledges that the connection can be established by sending `ACK` to the server. Then, the TCP connection is successfully established and ready to data to transfer over the network.

When an attacker sends a large number of `SYN` packets all at once, the server would try to acknowledge all of the request, which could results in overloaded traffics and making the services unresponsive or un-available to others.  

In the logs, the malicious IP `203.0.113.0` started a three-way handshake, then sent a massive volume of `SYN` packets. The server become unresponsive to other normal hosts, overloaded with large traffic of `SYN` packets and couldn't fulfill the requests by acknowledging (`SYN/ACK`) back to the hosts.

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





















