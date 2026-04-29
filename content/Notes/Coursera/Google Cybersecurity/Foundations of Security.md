---
date: 2026-03-05
---
**Table of Contents**

1. [Module 1 - Foundations of Cybersecurity](#module-1---foundations-of-cybersecurity)
2. [Module 2 - The Evolution of Cybersecurity](#module-2---the-evolution-of-cybersecurity)
3. [Module 3 - Protect against threats, risks, and vulnerabilities](#module-3---protect-against-threats-risks-and-vulnerabilities)
4. [Module 4 - Cybersecurity tools and programming languages](#module-4---cybersecurity-tools-and-programming-languages)

---

# Module 1 - Foundations of Cybersecurity

**Security analysts** - responsible for monitoring and protecting information and systems.

- Protecting computer and network systems
- Installing prevention software
- Conducting periodic security audits

Two basic parts of security:

- **Operations**: Responding to detections and doing investigations
- **Projects**: Working with other teams to build new detections or improve the current detection.
  > [!quote] A Helpful Impact
  > A **playbook** is a list of how to go through a certain detection, and what the analyst needs to look at in order to investigate those incidents.

# Module 2 - The Evolution of Cybersecurity
## Past Cybersecurity Attacks
**Computer Virus** is a Malicious code written to interfere with computer operations and cause damage to data and software. Now commonly referred to as **Malware**.  
- **Malware**: Software designed to harm devices or networks.

> [!quote] Morris Worm
> Created by Robert Morris In 1988. The program crawled the web and installed itself onto other computers to tally the number of computers that were connected to the internet. Failed to keep track of compromised computers and continued to re-install itself until the computers ran out of memory and crashed.  
> *About 6,000 computers were affected (10% of the internet at the time*

## Attacks in Digital Age
The **LoveLetter** attack was an example of social engineering. Social engineering is a <mark style="background: #D2B3FFA6;">manipulation technique</mark> that exploits human error to gain private information, access, or valuables.

**Phishing** is the use of digital communications to trick people into revealing sensitive data or deploying malicious software.

> [!quote] Equifax Breach
> During the Equifax breach, over 143 million customer records were stolen, and the breach affected approximately 40% of all Americans.  
> ![[Pasted image 20260422201315.png]]

> [!INFO]- Identify: Methods of Attacks
> - **Malware**: A software designed to harm devices or networks.  
> - **Virus**: A malware program that modifies other computer programs by inserting its own code to damage and/or destroy data.  
> - **Worm**: Malware that self-replicates, spreading across the network and infecting computers.  
> - **Ransomware**: A malicious attack during which threat actors encrypt an organization's data and demand payment to restore access.  
> - **Spyware**: Malicious software installed on user's computer without their permission, which is used to spy on and steal user data.  
> - **Phishing**: The use of digital communications to trick people into revealing sensitive data or deploying malicious software.  
> - **Spear Phishing**: A malicious email attack targeting a specific user or group of users that appears to originate from a trusted source.  
> - **Whaling**: A form spear phishing during which threat actors target executive in order to gain access to sensitive data.  
> - **Business Email Compromise (BEC)**: An attack in which a threat actor impersonates a known source to obtain a financial advantage.  
> - **Vishing**: The exploitation of electronic voice communication to obtain sensitive information or to impersonate a known source.  
> - **Social Engineering**: A manipulation technique that exploits human error to gain unauthorized access to sensitive, private, and/or valuable data.  
> - **Social Media Phishing**: An attack in which a threat actor collects detailed information about their target on social media sites before initiating an attack.  
> - **Watering Hole Attack**: An attack in which a threat actor compromises a website frequently visited by a specific group of users.  
> - **Physical Social Engineering**: An attack in which a threat actor impersonates an employee, customer, or vendor to obtain unauthorized access to a physical location.  
> - **USB Baiting**: An attack in which a threat actor strategically leaves a malware USB stick for an employee to find and unknowingly infect a network.  

## Intro to the eight CISSP security domains
![[Pasted image 20260423195514.png]]

1. **Security and Risk Management**
	Defines security goals and objectives, risk mitigation, compliance, business continuity, and the law.  
> Updating company policies related to private health info if a change is made to a federal compliance regulation.
2. **Asset Security**
	Secures digital and physical assets. It's also related to the storage, maintenance, retention, and destruction of data.
> Make sure confidential in that old equipment is properly disposed of and destroyed.
3. **Security architecture and engineering**
	Optimizes data security by ensuring effective tools, systems, and process are in place.
> Setting up firewalls
4. **Communication and network security**
	Manage and secure physical networks and wireless communications.
> Analyse user behaviors - users connecting to unsecure network.
5. **Identity and access management**
	Keeps data secure, by ensuring users follow established policies to control and manage physical assets, like office spaces, and logical assets, such as networks and applications.
> Setting up employee key cards access to building.
6. **Security assessment and testing**
	 Conducting security control testing, collecting and analyzing data, and conducting security audits to monitor for risks, threats and vulnerabilities.
> Limiting access to payroll information.
7. **Security operations**
	Conducting investigations and implementing preventative measures.
> When an unknown device is connected to your network, you stop it following company's policies.
8. **Software development security**
	Uses secure coding practices, which are a set of recommended guidelines that are used to create secure applications and services.
> Advising password policies or any other user data are secured when a new mobile app is being developed.

## Understand Attackers
**Advanced Persistent Threats (APTs)**: Tends to research their targets in enterprise environments and can remain undetected. They can damage critical infrastructure and gaining access to intellectual property (trade secrets).  

**Insider Threats**: Abusing their authorized access to harm an organization (sabotage, corruption, leaks, espionage).  
**Hacktivists**: Driven by a political agenda (demonstrations, propaganda, social change campaigns, fame).  

#### Hacker types
- **Authorized hackers**: Follows a code of ethics, adhere to the law to conduct risk evaluations (safeguard from threat actors).
- **Semi-authorized hackers**: Researchers of vulnerabilities but doesn't take advantage of it.
- **Unauthorized hackers**: Doesn't follow or respect the law, just to collect and sell confidential data for their missions.

# Module 3 - Protect against threats, risks, and vulnerabilities

## Introduction to security frameworks and controls

**Security Frameworks**: Guidelines used for building plans to help mitigate risk and threats to data and privacy.  

**Purpose of Security Frameworks**
- Protecting PII
- Securing financial information
- Identifying security weaknesses
- Managing organizational risks
- Aligning security with business goals

### Components of security frameworks

![[Pasted image 20260429115523.png]]
1. **Identifying and documenting security goals**
> ​For example, an organization may have a goal to ​align with the E.U.'s General Data Protection Regulation, ​also known as GDPR (a data protection law established to ​grant European citizens more control ​over their personal data)
2. **Setting guidelines to achieve security goals**
> For example, when implementing ​guidelines to achieve GDPR compliance, ​your organization may need to develop ​new policies for how to handle ​data requests from individual users.
3. **Implementing strong security processes**
> In the case of GDPR, ​a security analyst working for ​a social media company may help design ​procedures to ensure the organization ​complies with verified user data requests. 
4. **Monitoring and communicating results**
> As an example, you may monitor ​your organization's internal network and report ​a potential security issue affecting ​GDPR to your manager or regulatory compliance officer. 

**Security controls**: Safeguards designed to reduce specific security risks (like awareness training to employees).  

## Secure design
**CIA Triad**: A foundational model that helps inform how organizations consider risk when setting up systems and security policies.  

![[Pasted image 20260429120737.png]]
- **Confidentiality**: Only authorized users can access specific assets or data.
> ​For example, strict access controls that ​define who should and should not have access to data, ​must be put in place to ensure ​confidential data remains safe.
- **Integrity**: Data is correct, authentic and reliable.
> To maintain integrity, ​security professionals can use a form of ​data protection like encryption ​to safeguard data from being tampered with.
- **Availability**: Data is accessible to those who are authorized to access it.

**Asset** is an item perceived as having value to an organization.

### NIST Cybersecurity Framework (CSF)
National Institute of Standards and Technology (NIST) U.S.-based agency. A voluntary framework that consists of standards, guidelines, and best practices to manage cybersecurity risk.  
Important to be familiar with it as it is used by professionals as a **baseline.**  

## Controls, Frameworks, and Compliance

##### The Federal Energy Regulatory Commission - North American Electric Reliability Corporation (FERC-NERC)
**FERC-NERC** is a regulation that applies to organizations that work with electricity or that are involved with the U.S. and North American power grid. These types of organizations have an obligation to prepare for, mitigate, and report any potential security incident that can negatively affect the power grid. They are also legally required to adhere to the Critical Infrastructure Protection (**CIP**) Reliability Standards defined by the FERC.

##### The Federal Risk and Authorization Management Program (FedRAMP®)
FedRAMP is a U.S. federal government program that standardizes security assessment, authorization, monitoring, and handling of cloud services and product offerings. Its purpose is to provide consistency across the government sector and third-party cloud providers.

##### Center for Internet Security (CIS®)
CIS is a nonprofit with multiple areas of emphasis. It provides a set of controls that can be used to safeguard systems and networks against attacks. Its purpose is to help organizations establish a better plan of defense. CIS also provides actionable controls that security professionals may follow if a security incident occurs.

##### General Data Protection Regulation (GDPR)
GDPR is European Union (E.U.) general data regulation that protects the processing of E.U. residents' data and their right to privacy in and out of E.U. territory. For example, if an organization is not being transparent about the data they are holding about an E.U. citizen and why they are holding that data, this is an infringement that can result in a fine to the organization. Additionally, if a breach occurs and an E.U. citizen's data is compromised, they must be informed. The affected organizations have 72 hours to notify the E.U. citizen about the breach.

##### Payment Card Industry Data Security Standard (PCI DSS)
PCI DSS is an international security standard meant to ensure that organizations storing, accepting, processing, and transmitting credit card information do so in a secure environment. The objective of this compliance standard is to reduce credit card fraud.

##### The Health Insurance Portability and Accountability Act (HIPAA)
HIPAA is a U.S. federal law established in 1996 to protect patients' health information. This law prohibits patient information from being shared without their consent. It is governed by three rules:
1. Privacy
2. Security
3. Breach notification

Organizations that store patient data have a legal obligation to inform patients of a breach because if patients' **Protected Health Information** (PHI) is exposed, it can lead to identify theft and insurance fraud. PHI relates to the past, present, or future physical or mental health or condition of an individual, whether it's a plan of care or payments for care. Along with understanding HIPAA as a law, security professionals also need to be familiar with the Health Information Trust Alliance (HITRUST®), which is a security framework and assurance program that helps institutions meet HIPAA compliance.

##### International Organization for Standardization (ISO)
ISO was created to establish international standards related to technology, manufacturing, and management across borders. It helps organizations improve their processes and procedures for staff retention, planning, waste, and services.

##### System and Organizations Controls (SOC type 1, SOC type 2)
The American Institute of Certified Public Accountants® (AICPA) auditing standards board developed this standard. The SOC1 and SOC2 are a series of reports that focus on an organization's user access policies at different organizational levels such as:
- Associate
- Supervisor
- Manager
- Executive
- Vendor
- Others

They are used to assess an organization's financial compliance and levels of risk. They also cover confidentiality, privacy, integrity, availability, security, and overall data safety. Control failures in these areas can lead to fraud.  

> Two suggestions to research: the **Gramm-Leach-Bliley Act** and the **Sarbanes-Oxley Act**


## Heather: Protect sensitive data and information

> [!quote]
> We should make sure we're very deliberate about how it's handled and where it's stored, and that we understand where it's stored all the time.

## Ethic in cybersecurity
**Security ethics**: Guidelines for making appropriate decisions as a security professional.  
- Privacy protection means safeguarding personal information from unauthorized use.
- Laws are rules that are recognized by a community and enforced by a governing entity.

##### United States standpoint on counterattacks 
In the U.S., deploying a counterattack on a threat actor is illegal because of laws like the Computer Fraud and Abuse Act of 1986 and the Cybersecurity Information Sharing Act of 2015, among others. You can only defend. The act of counterattacking in the U.S. is perceived as an act of vigilantism. A vigilante is a person who is not a member of law enforcement who decides to stop a crime on their own. And because threat actors are criminals, counterattacks can lead to further escalation of the attack, which can cause even more damage and harm. Lastly, if the threat actor in question is a state-sponsored hacktivist, a counterattack can lead to serious international implications. A hacktivist is a person who uses hacking to achieve a political goal. The political goal may be to promote social change or civil disobedience. 

##### International standpoint on counterattacks
The International Court of Justice (ICJ), which updates its guidance regularly, states that a person or group can counterattack if: 
- The counterattack will only affect the party that attacked first.
- The counterattack is a direct communication asking the initial attacker to stop.
- The counterattack does not escalate the situation.
- The counterattack effects can be reversed.

> [!quote]
> When you're faced with one of these difficult decisions, it's good to think about what would be the consequences of your decision."

# Module 4 - Cybersecurity tools and programming languages
## Common cybersecurity tools
**Log**: A record of events that occur within an organization's systems  
**Security Information and Event Management (SIEM) tool**: An application that collects and analyzes log data to monitor critical activities in an organization.
- [Splunk](https://www.splunk.com/): A mature, highly customizable platform known for its powerful Search Processing Language (SPL), extensive third-party integrations, and support for on-premises, cloud, and hybrid deployments.
- **Google's Chronicle**: cloud-native, serverless SIEM built on Google’s infrastructure, emphasizing automatic data normalization, massive scalability, and a flat-rate pricing model tied to data ingestion volume. 

**Playbook**: A manual that provides details about any operational action.  
**Network protocol analyzer (packet sniffer)**: A tool designed to capture and analyze data traffic within a network - `tcpdump` and `wireshark`.  

## Introduction to Linux, SQL, and Python
**Programming**: Used to create a specific set of instructions for a computer to execute tasks.  
**Linux**: An open-source operating system (e.g., examining logs).  
**Structured Query Language (SQL)**: A programming language used to create, interact with, and request information from a database.  
**Database**: An organized collection of information or data.  
**Python**: Used to perform tasks that are repetitive and time-consuming, and that require a high level of detail and accuracy.  



