---
date: 2026-04-30
---
**Table of Contents**

1. [Module 1 - Security domains](#module-1---security-domains)


---
![[Pasted image 20260430143958.png]]

# Module 1 - Security domains

## CISSP security domains
**Security posture**: An organization's ability to manage its defense of critical assets and data, and react to change.  

![[Pasted image 20260430150833.png]]
### 1. Security and risk management
Focused on defining security goals and objectives, risk mitigation, compliance, business continuity, and legal regulations.  
> Reducing risks to critical assets (like PII) by defining security goals and objectives.

**Risk mitigation**: The process of having the right procedures and rules in place to quickly reduce the impact of a risk like a breach.  
**Business continuity**: An organization's ability to maintain their everyday productivity by establishing risk and disaster recovery plans.  

### 2. Asset security
Focused on securing digital and physical assets. It's also related to the storage, maintenance, retention, and destruction of data.  
> PII/SPII should be securely handled and protected, whether stored on a computer, transferred over a network or physically collected. **Following organization's policies**.

### 3. Security architecture and engineering
Focused on optimizing data security by ensuring effective tools, systems, and processes are in place to protect an organization's assets and data.  
> Having policies that encourage users to recognize and report security concerns.

**Shared responsibility**: All individuals within an organization take an active role in lowering risk and maintaining both physical and virtual security.  

### 4. Communication and network security
Focused on managing and securing physical networks and wireless communications.  
> Employees working remotely in public spaces need to be protected from vulnerabilities by having security team members remove access to those types of communication channels at the organization level.

### 5. Identity and access management (IAM)
Focused on access and authorization to keep data secure, by making sure users follow established policies to control and manage assets.  
- Identification (username, biometric data, etc.)
- Authentication (password, pin, etc.)
- Authorization (level of access, takes place after Identification has been confirmed.)
> To reduce the overall risk to systems and data.

### 6. Security assessment and testing
Focused on conducting security control testing, collecting and analyzing data, and conducting security audits to monitor for risks, threats, and vulnerabilities.  
> Examining organizational goals and objectives, testing evaluations and security assessment reports to improve existing controls or implement new controls.

### 7. Security operations
Focused on conducting investigations and implementing preventative measures.  
> Once a security incident has been identified, a  heightened sense of urgency is required in order to minimize potential risks to the organization.

### 8. Software development security
Focused on using secure coding practices.  
> Performing a secure design review during the design phase, secure code review and pentesting during deployment.

> [!quote]
> Cybersecurity path wasn't a linear path.

## Threats, risks, and vulnerabilities

### Threat
Any circumstance or event that can negatively impact assets (e.g., social engineering attacks).
- **Insider threats**: Staff members or vendors abuse their authorized access to obtain data the may harm an organization.
- **Advanced persistent threats (APTs)**: A threat actor maintains unauthorized access to a system for an extended period of time.  

### Risk
Anything that can impact the confidentiality, integrity, or availability of an asset (e.g., lack of backup processes).  
- **External risk**: Anything outside the organization that has the potential to harm organizational assets, such as threat actors attempting to gain access to private information
- **Internal risk**: A current or former employee, vendor, or trusted partner who poses a security risk
- **Legacy systems**: Old systems that might not be accounted for or updated, but can still impact assets, such as workstations or old mainframe systems. For example, an organization might have an old vending machine that takes credit card payments or a workstation that is still connected to the legacy accounting system.
- **Multiparty risk**: Outsourcing work to third-party vendors can give them access to intellectual property, such as trade secrets, software designs, and inventions.
- **Software compliance/licensing**: Software that is not updated or in compliance, or patches that are not installed in a timely manner
![[Pasted image 20260430160742.png]]
- **Low-risk asset**: Information that would not harm the organization's reputation or ongoing operations, and would not cause financial damage if compromised (e.g., <mark style="background: #BBFABBA6;">public research data</mark>).
- **Medium-risk asset**: Information that's not available to the public and may cause some damage to the organization's finances, reputation, or ongoing operations (e.g., <mark style="background: #FFF3A3A6;">the early release of a company's quarterly earnings could impact the value of their stock</mark>).
- **High-risk asset**: Information protected by regulations or laws, which if compromised would have a severe negative impact on an organization's finances, ongoing operations, or reputation (e.g., <mark style="background: #FF5582A6;">leaked assets with SPII, PII or intellectual property</mark>).

### Vulnerability
A weakness that can be exploited by a threat (e.g., outdated firewalls, software or apps; or unprotected confidential data).

## Key impacts of threats, risks, and vulnerabilities
**Ransomware**: A malicious attack where threat actors encrypt an organization's data and demand payment to restore access.  
> Locked to confidential data, leave devices usable, etc.

### Layers of the web
- Surface web (can be accessed by a usual web browser)
- Deep web (only authorized employees to access intranet)
- Dark web (by only specialized software)

> [!quote]
> My data to day consists of analyzing security risks and providing solutions to those risk.  
> One of the more common threats we come across is misconfigurations or requesting access for something that you don't really need.  


## NIST's Risk Management Framework (RMF)
![[Pasted image 20260430163014.png]]
- Prepare
- Categorize
- Select
- Implement
- Assess
- Authorize
- Monitor

### RMF Step 1: Prepare
Activities that are necessary to manage security and privacy risks before a breach occurs.
> To monitor for risks and identify controls that can be used to reduce those risks.

### RMF Step 2: Categorize
Used to develop risk management processes and tasks.
> How the CIA of the systems and information can be impacted by risk. Understand how to follow processes established by your organization.

### RMF Step 3: Select
Choose, customize, and capture documentation of the controls that protect an organization.
> Keeping a playbook up-to-date or helping to manage other docs that allows you and your team to address issues more efficiently.

### RMF Step 4: Implement
Implement security and privacy plans for the organization.
> If you notice a pattern of employees constantly needing password resets, implementing a change to password requirements may help solve this issue.

### RMF Step 5: Assess
Determine if established controls are implemented correctly.
> Analyzing whether the implemented protocols, procedures, and controls that are in place meets organizational needs.  
> Also identifies if anything should be changed to better manage potential risks.

### RMF Step 6: Authorize
Being accountable for the security and privacy risks that may exist in an organization.
> Involves generating reports, developing plans of action, and establishing project milestones that are aligned to your organization's security goals.

### RMF Step 7: Monitor
Be aware of how systems are operating.
> Assessing and maintaining technical operations are tasks that analysts complete daily.

## Manage common threats, risks, and vulnerabilities
There are many resources, such as the NIST, that provide lists of [cybersecurity risks](https://www.nist.gov/itl/smallbusinesscyber/cybersecurity-basics/cybersecurity-risks). Additionally, the Open Web Application Security Project (OWASP) publishes a standard awareness document about the [top 10 most critical security risks](https://owasp.org/www-project-top-ten/) to web applications, which is updated regularly.  
![[Pasted image 20260430210530.png]]

#### Common Vulnerabilities
- **ProxyLogon**: A pre-authenticated vulnerability that affects the Microsoft Exchange server. This means a treat actor can complete a user authentication process to deploy malicious code from a remote location.
- **ZeroLogon**: A vulnerability in Microsoft's Netlogon authentication protocol. An authentication protocol is a way to verify a person's identity. Netlogon is a service that ensures a user's identity before allowing access to a website's location.
- **Log4Shell**: Allows attackers to run Java code on someone else's computer or leak sensitive information. It does this by enabling a remote attacker to take control of devices connected to the internet and run malicious code.
- **PetitPotam**: Affects Windows New Technology LAN Manager (NTLM). It is a theft technique that allows a LAN-based attacker to initiate an authentication request.
- **Security logging and monitoring failures**: Insufficient logging and monitoring capabilities that result in attackers exploiting vulnerabilities without the organization knowing it.
- **Server-side request forgery**: Allows attackers to manipulate a server-side application into accessing and updating backend resources. It can also allow threat actors to steal data.

# Module 2 - Security frameworks and controls

## About Frameworks and Controls
**Security frameworks**: Guidelines used for building plans to help mitigate risk and threats to data and privacy.  
> For example, the healthcare industry uses frameworks to comply with the United States’ Health Insurance Portability and Accountability Act (HIPAA), which requires that medical professionals keep patient information safe. 

**Security controls**: Safeguards designed to reduce specific security risks.  
- **Physical**: Gates, locks, guards, CCTV.
- **Technical**: Firewalls, MFA, Anti-virus software.
- **Administrative**: Separation of duties, Authorization, Asset classification. 
> Using a measure like MFA to validate someone’s identity is one way to help mitigate potential risks and threats to private data.

**Encryption**: The process of converting data from a readable format to an encoded format (ciphertext).  

**Biometrics**: Unique physical characteristics that can be used to verify a person's identity.  

**Vishing**: The exploitation of electronic voice communication to obtain sensitive information or to impersonate a known source.  

**Authorization**: The concept of granting access to specific resources within a system.  

### Specific frameworks and controls

##### Cyber Threat Framework (CTF)
Developed by the U.S. government to provide "a common language for describing and communicating information about cyber threat activity".  
Helps professionals to analyze and share information more efficiently to improve their response to the cyber landscape.

##### International Organization for Standardization/International Electrotechnical Commission (ISO/IEC) 27001
An internationally recognized and used framework **ISO/IEC 27001**. Enables organizations of all sectors and sizes to manage the security of assets. Outlines requirements for a information security management system, best practices, and controls. Doesn't require specific controls, it does provide a collection of controls to improve security posture.  

## NIST frameworks

### NIST S.P. 800-53
A unified framework for protecting the security of information systems within the <mark style="background: #BBFABBA6;">federal government</mark>.  

### NIST Cybersecurity Framework (CSF)
A voluntary framework that consists of standards, guidelines, and best practices to manage cybersecurity risk. 

![[Pasted image 20260501125313.png]]

#### 1. Identify
The management of cybersecurity risk and its effect on an organization's people and assets.
> As a security analyst, you may be asked to monitor systems and devices in your organization's internal network to identify potential security issues.

#### 2. Protect
The strategy used to protect an organization through the implementation of policies, procedures, training, and tools that help mitigate cybersecurity threats.
> You and your team might encounter new and unfamiliar threats and attacks. For this reason, studying historical data and making improvements to policies and procedures is essential.

#### 3. Detect
Identifying potential security incidents and improving monitoring capabilities to increase the speed and efficiency of detections.
> You might be asked to review a new security tool's setup to make sure it's flagging low, medium, or high risk, and then alerting the security team about any potential threats or incidents.

![[Pasted image 20260501130640.png]]

#### 4. Respond
Making sure that the proper procedures are used to contain, neutralize, and analyze security incidents, and implement improvements to the security process.  
> You could be working with a team to collect and organize data to document an incident and suggest improvements to process to prevent the incident from happening again.

#### 5. Recover
The process of returning affected systems back to normal operation.
> You might work with your security team to restore systems, data, and assets (financial or legal files), that have been affected by an incident like a breach.

#### 6. Govern (NIST CSF 2.0 update)
Emphasizes the importance of strong cybersecurity governance across all levels of the organization. Establishing and maintaining the structures and processes need to effectively manage risk.
> Setting clear cybersecurity objectives, ensuring leadership commitment, developing and implementing a comprehensive risk management strategy, and continuously improving cybersecurity performance.

## OWASP security principles
**Open Web Applications Security Project**
- **Minimize attack surface area** (e.g., phishing emails, weak passwords | restricting access, establish complex passwords)
- **Principle of least privilege** (e.g., you may have access to locked data, but can't be able to change permissions)
- **Defense in depth** (e.g., MFA setup)
- **Separation of duties** (e.g., the person in a company who sings the paychecks shouldn't also be the person who prepares them)
- **Keep security simple** (e.g., The more complex the security controls are, the harder it is for people to work collaboratively)
- **Fix security issues correctly** (e.g., Fixing a weak WiFi password that could lead to breach)

**Additional OWASP security principles**
- **Establish secure defaults**: Optimal security state of an application is also its default state for users.
- **Fail securely**: When a firewall fails it should simply close all connections and block all new ones, rather than start accepting everything.
- **Don't trust services**: If a third-party vendor tracks reward points for airline customers, the airline should ensure that the balance is accurate before sharing that information with their customers.
- **Avoid security by obscurity**: The security of an application should not rely on keeping the source code secret.

> [!quote]
> Don't be too overwhelmed with trying to understand every single specialization within cybersecurity.

## Plan a security audit

**Security audit**: A review of an organization's security controls, policies, and procedures against a set of expectations (internal|external).  

### Common elements of internal audits
- Establishing the scope and goals
- Conducting a risk assessment
- Completing a controls assessment
- Assessing compliance
- Communicating results

**Audit questions**
- What is the audit meant to achieve?
- Which assets are most at risk?
- Are current controls sufficient to protect those assets?
- What controls and compliance regulations need to be implemented?

**Stakeholder communication**
- Summarizes scope and goals
- Lists existing risks
- Notes how quickly those risks need to be addressed
- Identifies compliance regulations

![[o6XzbUnYRK6pwAtl0ME25Q_3c91489225e04f408952ba8a8595e0f1_Control-categories.pdf]]


