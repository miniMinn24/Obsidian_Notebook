---
date: 2026-06-02
tags:
  - cybersecurity
  - course
  - concepts
---
---
![[Pasted image 20260602205605.png]]

# Module 1 - Introduction to asset security

## The what, why, and how of asset security

- **Risk**: Anything that can impact the confidentiality, integrity, or availability of an asset. `Likelihood x Impact = Risk`
- **Threat**: Any circumstance or event that can negatively impact assets
- **Vulnerability**: A weakness that can be exploited by a threat

## Security starts with asset classification

**Asset management**: The process of tracking assets and the risks that affect them.  
- Starts with **Asset inventory**: A catalog of assets that need to be protected.

**Asset classification**: The practice of labeling assets based on sensitivity and importance to an organization.
- Public
- Internal-only
- Confidential
- Restricted

## Elements of a Security Plan

- **Policies**: These are foundational rules that reduce risk and protect information, outlining the scope, objectives, and limitations of a security plan.
- **Standards**: These provide tactical guidance, acting as references that inform how policies are set, such as specifying password length requirements.
- **Procedures**: These are step-by-step instructions for performing specific security tasks, promoting accountability, consistency, and efficiency within an organization.

# Module 2 - Protect organizational assets

## Security controls
- Operational
- Technical
- Managerial

**Usage audits**: Reviewing which resources each account is accessing and what the user is doing with the resource.  
**Privilege audits**: Whether a user's role is in alignment with the resources they have access to.  
**Account change audits**: Account directory services keep records and logs associated with each user.  

## The data lifecycle
- **PII**: Personally identifiable information, any information used to infer an individual's identity.
- **PHI**: Protected health information, information that relates to the past, present, or future physical or mental health or condition of an individual.
- **SPII**: S for sensitive, a specific type of PII that falls under stricter handling guidelines.

![[Pasted image 20260610153543.png]]

- **Information privacy** refers to the protection from unauthorized access and distribution of data.
- **Information security** (InfoSec) refers to the practice of keeping data in all states away from unauthorized users.

## Fundamentals cryptography
**Cipher**: An algorithm that encrypts information.  

## Public key infrastructure (PKI)
 An encryption framework that secures the exchange of information online.  
 
- **Symmetric encryption** is the use of a single secret key to exchange information. Because it uses one key for encryption and decryption, the sender and receiver must know the secret key to lock or unlock the cipher.
- **Asymmetric encryption** is the use of a public and private key pair for encryption and decryption of data. It uses two separate keys: a public key and a private key. The public key is used to encrypt data, and the private key decrypts it. The private key is only given to users with authorized access.

## Non-repudiation and hashing

**Non-repudiation**: The concept that the authenticity of information can't be denied.  

**Hashing**: The hash function is an algorithm that produces a code that can't be decrypted (digesting).  

```bash
# Checking the hash of a particular file
$ sha256 <filename> 
```


**Salting** is an additional safeguard that's used to strengthen hash functions. A salt is a random string of characters that's added to data before it's hashed. The additional characters produce a more unique hash value, making salted data resilient to rainbow table attacks.  

![[Pasted image 20260611222601.png]]

## Access controls and authentication systems

**Authentication**:
1. **Knowledge**: something the user knows
2. **Ownership**: something the user possesses
3. **Characteristic**: something the user is

**Single sign-on (SSO)**: A technology that combines several different logins into one.  

**SSO** works by automating how trust is established between a user and a service provider. Rather than placing the responsibility on an employee or customer, SSO solutions use trusted third-parties to prove that a user is who they claim to be. This is done through the exchange of encrypted access tokens between the identity provider and the service provider.  

![[Pasted image 20260611223907.png]]

## Why we audit user activity
**Session**: A sequence of network HTTP basic auth requests and responses associated with the same user.  

**Session ID**: A unique token that identifies a user and their device while accessing the system.  

**Session cookie**: A token that websites use to validate a session and determine how long that session should last.  

## Authentication, Authorization, Accounting (AAA) Framework

1. **Authentication**: verifies the identity of a user or device attempting to access the network (<mark style="background: #ADCCFFA6;">passwords, biometrics, MFA</mark>, etc).
2. **Authorization**: determines what resources and actions the authenticated user is permitted to access (policies: <mark style="background: #ADCCFFA6;">Role-Based Access Control (RBAC) or the principle of least privilege</mark>).
3. **Accounting** (Auditing): tracks and logs user activities, including <mark style="background: #ADCCFFA6;">login times, data usage, and session details</mark>, to provide an audit trail for troubleshooting, billing, and forensic investigation.

**Identity and access management (IAM)** is a collection of processes and technologies that helps organizations manage digital identities in their environment. Both AAA and IAM systems are designed to authenticate users, determine their access privileges, and track their activities within a system.  

**User provisioning** is the process of creating and maintaining a user's digital identity.  

### Granting authorization
- Mandatory access control (MAC)
- Discretionary access control (DAC)
- Role-based access control (RBAC)

![[Pasted image 20260612111500.png]]

**MAC** is the strictest of the three frameworks. Authorization in this model is based on a strict need-to-know basis. Access to information must be granted manually by a central authority or system administrator.  
- Commonly applied in law enforcement, military, and other government agencies where users must request access through a chain of command. MAC is also known as non-discretionary control because access isn’t given at the discretion of the data owner.

![[Pasted image 20260612111615.png]]

**DAC** is typically applied when a data owner decides appropriate levels of access.
- One example of DAC is when the owner of a Google Drive folder shares editor, viewer, or commentor access with someone else.

![[Pasted image 20260612111644.png]]

**RBAC** is used when authorization is determined by a user's role within an organization.
- For example, a user in the marketing department may have access to user analytics but not network administration.

# Module 3 - Vulnerabilities in systems

## Vulnerability management
1. Identify vulnerabilities
2. Consider potential exploits
3. Prepare defense against threats

**Zero-day**: An exploit that was previously unknown.  

## Vulnerabilities of CI/CD

**Continuous Integration** (Building a solid foundation) is all about frequently merging code changes from different developers into a central location. This triggers automated processes like building the software and running tests. CI catches problems through an automated process: every time code is integrated, the system automatically builds and tests it. This immediate feedback loop reveals integration problems as soon as they occur. CI helps catch integration problems early, leading to higher quality code. Think of it as the foundation of the pipeline.  

**Continuous Delivery** (Ready to release) means your code is always ready to be released to users. After passing automated tests, code is automatically deployed to a staging environment (a practice environment) or prepared for final release. Typically, a manual approval step is still needed before going live to production, which provides a control point.  

**Continuous Deployment** (Fully automated releases) automates the entire release process. Changes that pass all automated checks are automatically deployed directly to the live production environment, with no manual approval. This is all about speed and efficiency.  

![[Pasted image 20260612161106.png]]

