---
date: 2026-05-30
tags:
  - course
  - cybersecurity
  - labs
---
# From [[Course 3 - Networks and Network Security]]

## Cybersecurity incident report: network traffic analysis

**Part 1: Provide a summary of the problem found in the the tcpdump log.**  
As part of the DNS protocol, the UDP protocol was used to contact the DNS server to retrieve the IP address for the domain name of `yummyrecipesforme.com`. The ICMP protocol was used to respond with an error message, indicating issues contacting the DNS server. The UDP message going from your browser to the DNS server is shown in the first two lines of every log event. The ICMP error response from the DNS server to your browser is displayed in the third and fourth lines of every log event with the error message, “UDP port 53 unreachable.” Since port 53 is associated with DNS protocol traffic, we know this is an issue with the DNS server. Issues with performing the DNS protocol are further evident because the plus sign after the query identification number 35084 indicates flags with the UDP message and the “A?” symbol indicates flags with performing DNS protocol operations. Due to the ICMP error response message about port 53, it is highly likely that the DNS server is not responding. This assumption is further supported by the flags associated with the outgoing UDP message and domain name retrieval.  

**Part 2: Explain your analysis of the data and provide at least one cause of the incident.**  
The incident occurred today at 1:24 p.m. Customers notified the organization that they received the message “destination port unreachable” when they attempted to visit the website yummyrecipesforme.com. The cybersecurity team providing IT services to their client organization are currently investigating the issue so customers can access the website again. In our investigation into the issue, we conducted packet sniffing tests using tcpdump. In the resulting log file, we found that DNS port 53 was unreachable. The next step is to identify whether the DNS server is down or traffic to port 53 is blocked by the firewall. The DNS server might be down due to a successful Denial of Service attack or a misconfiguration. 


## Cybersecurity incident report
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

## Security risk assessment report

**Part 1: Select up to three hardening tools and methods to implement**.  
Three hardening tools the organization can use to address the vulnerabilities found include:
1. Implementing multi-factor authentication (MFA)
2. Setting and enforcing strong password policies
3. Performing firewall maintenance regularly

**MFA** requires users to use more than one way to identify and verify their credentials before accessing an application. Some MFA methods include fingerprint scans, ID cards, pin numbers, and passwords.  

**Password policies** can be refined to include rules regarding password length, a list of acceptable characters, and a disclaimer to discourage password sharing. They can also include rules surrounding unsuccessful login attempts, such as the user losing access to the network after five unsuccessful attempts.  

**Firewall maintenance** entails checking and updating security configurations
regularly to stay ahead of potential threats.  

**Part 2: Explain your recommendations**  
Enforcing multi-factor authentication (MFA) adds an additional layer of security beyond a password. It will reduce the likelihood that a malicious actor can access a network through a brute force or related attack since additional effort is required to authenticate in more than one way. MFA may also reduce the likelihood of people sharing passwords. Since the recipient of the shared password would need to possess additional authentication besides a password, MFA makes it less useful to share passwords, thereby making passwords less likely to be shared.  

Creating and enforcing a password policy within the company will make it increasingly challenging for malicious actors to access the network. Policies such as suspending the account after a certain number of logins can prevent successful brute force attacks. Increasing password complexity, requiring more frequent password updates, and not allowing passwords to be reused also help prevent malicious actors from infiltrating the network.  

Firewall maintenance should happen regularly. Network administrators should ensure that firewall rules are in place that reflect the most up to date standards for allowed and denied traffic. Traffic from sources that are suspicious should be placed on a denied traffic list. Firewall rules should be updated whenever a
security event occurs, especially an event that allows suspicious network traffic into the network. This measure can be used to protect against various DoS and DDoS attacks.  

## Incident report analysis

### Summary
The organization's network services were suddenly stopped responding for 2 hours due to DOS attack. After investigation, a flood of ICMP packets was able to sent though one of organization's unconfigured firewall.

| NIST CSF Framework Steps | Documentation                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Identify                 | The incident management team audited the internal network, network services, and firewalls involved in the attack to identify the gaps in security. The team found that the firewall was unconfigured and the attacker was able to send a flood of ICMP pings through it. Upon initial review, it appears that the DOS attack overwhelmed the internal network services, which suddenly stopped providing network services to users. |
| Protect                  | The team has implemented a new firewall rule to prevent future attacks: rate of incoming ICMP packets limited, source IP address verification to check for spoofed IP addresses on incoming ICMP packets.                                                                                                                                                                                                                            |
| Detect                   | We will update the IDS/IPS system to filter out some ICMP traffic based on suspicious characteristics and implement a network monitoring software to monitor all incoming traffic from the internet.                                                                                                                                                                                                                                 |
| Respond                  | The team blocked incoming ICMP packets and stopped all non-critical network services offline We informed the management teams to report about the incident and notified when it was finally resolved obtaining network services safe.                                                                                                                                                                                                |
| Recover                  | The critical network services were restored after setting a new firewall rule and updating all necessary policies, the network servers were secured to prevent future attacks and operating back to normally.                                                                                                                                                                                                                        |


# From [[Course 4 - Tools of the trade - Linux and SQL]]

## Installing a package in Debian-based Linux

```bash
# Task 1. Ensure that APT is installed
apt

# Task 2. Install and uninstall the Suricata application
sudo apt install suricata

# Task 3. Install the tcpdump application
sudo apt install tcpdump

# Task 4. Listing installed applications
apt list --installed
```


# From [[Course 5 - Assets, Threats, and Vulnerabilities]]

## Risk Register

> [!quote] Operational environment
The bank is located in a coastal area with low crime rates. Many people and systems handle the bank's data—100 on-premise employees and 20 remote employees. The customer base of the bank includes 2,000 individual accounts and 200 commercial accounts. The bank's services are marketed by a professional sports team and ten local businesses in the community. There are strict financial regulations that require the bank to secure their data and funds, like having enough cash available
each day to meet Federal Reserve requirements.  

| Asset | Risk(s)                   | Description                                                     | Likelihood  | Severity         | Priority |
| ----- | ------------------------- | --------------------------------------------------------------- | ----------- | ---------------- | -------- |
| Funds | Business email compromise | *An employee is tricked into sharing confidential information.* | Certain (3) | Moderate (2)     | 6        |
| Funds | Compromised user database | *Customer data is poorly encrypted.*                            | Likely (2)  | Catastrophic (3) | 6        |
| Funds | Financial records leak    | *A database server of backed up data is publicly accessible.*   | Certain (3) | catastrophic (3) | 9        |
| Funds | Theft                     | *The bank's safe is left unlocked.*                             | Rare (1)    | Catastrophic (3) | 3        |
| Funds | Supply chain disruption   | *Delivery delays due to natural disasters.*                     | Rare (1)    | Moderate (2)     | 2        |

#### Risk matrix

![[Pasted image 20260610134910.png]]

## Data leak worksheet
**Incident summary**: A sales manager shared access to a folder of internal-only documents with their team during a meeting. The folder contained files associated with a new product that has not been publicly announced. It also included customer analytics and promotional materials. After the meeting, the manager did not revoke access to the internal folder, but warned the team to wait for approval before sharing the promotional materials with others.  
During a video call with a business partner, a member of the sales team forgot the warning from their manager. The sales representative intended to share a link to the promotional materials so that the business partner could circulate the materials to their customers. However, the sales representative accidentally shared a link to the internal folder instead. Later, the business partner posted the link on their company's social media page assuming that it was the promotional materials.  

| Control               | Least privilege                                                                                                                                                                                                                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Issue(s)**          | Many people neglected to keep the confidential information private. The manager should have done a better job keeping track of the internal folder by limiting access to the representative and themselves. The customer also could have done a better job of communicating their plans to share the marketing information before posting it to social media. |
| **Review**            | NIST SP 800-53 is a resource that's designed to help organizations address data privacy risks. The document defines security controls, describes implementation strategies, and suggests individual control enhancements. AC-6 is a section about access controls that relate to the principle of least privilege.                                            |
| **Recommendation(s)** | Based on the suggestion of NIST SP 800-53: AC-6, the data leak might have been avoided with the following controls:<br>- Automatically revoke access to information after a period of time.<br>- Regularly audit user privileges.                                                                                                                             |
| **Justification**     | Automating security tasks whenever possible is a good way to reduce the chances of human error. In this case, creating a policy that sets expiration dates for access links might have avoided the leak. Requiring managers to regularly audit who can access their files is another way that information could be kept private.                              |

## Activity: Improve AAA for a small business

> [!quote] Scenario
> You’re the first cybersecurity professional hired by a growing business.  
> 
> Recently, a deposit was made from the business to an unknown bank account. The finance manager says they didn’t make a mistake. Fortunately, they were able to stop the payment. The owner has asked you to investigate what happened to prevent any future incidents.  
> 
> To do this, you’ll need to do some accounting on the incident to better understand what happened. First, you will review the access log of the incident. Next, you will take notes that can help you identify a possible threat actor. Then, you will spot issues with the access controls that were exploited by the user. Finally, you will recommend mitigations that can improve the business' access controls and reduce the likelihood that this incident reoccurs.

**Employee directory:**  

![[Pasted image 20260612114036.png]]

**Event log**:  

![[Pasted image 20260612114058.png|329]]


| Authentication/Authorization | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Note(s)**                  | At the time 8:29:57 AM, 10/03/2023, a user named Robert Taylor Jr. from role Legal attorney performed an un-authorized deposit to an unknown bank account. The actor used the computer device **Up2-NoGud** on IP address `152.207.255.255`.                                                                                                                                                                                                                                                                                                                                                                                       |
| **Issue(s)**                 | The actor had admin level privileges and had access to all resources. The user account should have been deactivated since 12/27/2019, but it was active till 2023 when the event occurred.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Recommendation(s)**        | The actor account (Robert Taylor Jr.) must be immediately deactivated as it reached over the end date.   <br><br>After reviewing the employee directory sheet, every user including the actor have admin level privilege. This major security flaw should be immediately fixed with RBAC framework, where every user should have only necessary permissions for each role to prevent future events like this.  <br><br>Moreover, the ensure login security, the MFA should be implemented to prevent malicious actors accessing the resources, except the authorized users within the company to have access to company resources. |

 
