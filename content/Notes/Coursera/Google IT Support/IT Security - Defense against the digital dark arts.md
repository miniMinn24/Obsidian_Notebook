---
date: 2026-02-24
---

## Table of Contents

- [[#Module 1 - Understanding Security Threats]]
- [[#Module 2 - Pelcgbybtl (Cryptology)]]

---

# Module 1 - Understanding Security Threats

## The CIA Triad

A guiding model for designing information security policies.

- **Confidentiality**: Keeping things hidden - _password protections, limit access, ..._
- **Integrity**: Keeping out data accurate and un-tampered with - _received data should remain the same throughout its entire journey._
- **Availability**: The information we have is readily accessible to those people that should have it. _being prepared if your paper is lost or system shutdown._

## Essential Security Terms

- **Risk**: The possibility of suffering a loss in the event of an attack on the system.
- **Vulnerability**: A flaw in a system that could be exploited to compromise the system.
- **0-day Vulnerability (Zero day)**: A vulnerability that is not known to the software developer or vendor, but is known to an attacker.
- **Exploit**: Software that is used to take advantage of a security bug or vulnerability.
- **Threat**: The possibility of danger that could exploit a vulnerability.
- **Hacker**: A hacker in the security world is someone who attempts to break into or exploit a system.
- **Attack**: An actual attempt at causing harm to a system.

## Malicious Software

A type of malicious software that can be used to obtain your sensitive information, or delete or modify files.

- **Virus**: The virus attaches itself to some sort of executable code like a program.
- **Worms**: Similar but instead of having to attach themselves onto something to spread, worms can live on their own and spread through channels like the network. (_e.g., ILoveYou_)
- **Adware**: Software that displays advertisements and collects data.
- **Trojan**: Malware that disguises itself as one thing but does something else.
- **Spyware**: A type of malware that's meant to spy on you.
- **Keylogger**: A common type of spyware that's used to record every keystroke you make.
- **Ransomware**: A type of attack that holds your data or system hostage until you pay some sort of ransom (_e.g., WannaCry ransomware attack in May, 2017_).

Hacker can also steal computer' resources like CPU.

- **Botnet**: Designed to utilize the power of the internet-connected machines to perform some distributed function.
- **Backdoor**: A way to get into a sytem if the other methods to get in the system aren't allowed (secret entry access).
- **Rootkit**: A collection of software or tools that an admin would use.
- **Logic bomb**: A type of malware that's intentionally installed.

## Anti-malware Protection, Malware Removal

If a computer is performing poorly or acting strangely, it might be infected with malware. IT professionals need to know how to isolate, remove, and repair infected devices.

### Gather and Verify

First gather information when the symptoms started and if the user has downloaded any unusual files.

- Running slower than normal
- Restarts on its own multiple times
- Uses all or a higher than normal amount of memory

Use **resource manager** to identify any unusual program running and investigate it.

### Quarantine Malware

Distributed botnets can communicate with bad actors. Disconnect any network connections to separate or quarantine the infected device form the rest of the network. Automatic backups might restore the system with files infected by malware, so you should be careful of enabling or disabling backup system.

### Remove Malware

First, run offline malware scan while disconnected from local network. All anti-virus/anti-malware programs rely on threat definition files (do a complete update). Monitor the computer again to confirm no further issues.

Make sure and reconfigure the computer to won't happen again. After all, manually create a safe restore point.

### Malware Education

- Keep the computer and software updated
- Use a non-administrator account whenever possible
- Think twice before clicking links or downloading anything
- Be careful about opening email attachments or images
- Don't trust pop-up windows that ask to download software
- Limit your file-sharing
- Use antivirus software

## Network Attacks

A **DNS Cache Poisoning attack** works by tricking a DNS server into accepting a fake DNS record that will point you to a compromised DNS server. It then feeds you fake DNS addresses when you try to access legitimate websites.

- Can spread to other DNS servers

**Meddler-in-the-middle** attack: commonly the session hijacking or cookie hijacking.
**Rogue AP**: An access point that is installed on the network without the network administrator's knowledge.
**Evil Twin** attack: Similar to Rogue AP, is for you to connect to a network that is identical to yours. Once we connect to it, they will be able to monitor our traffic.

## Denial-of-Service

An attack that tries to prevent access to a service for legitimate users by overwhelming the network or server.

- **Ping of death** (PoD): Send a malformed ping to a computer. Ping would be larger in size than what the internet protocol was made to handle - buffer overflow - causes crash and execution of malicious code.
- **Ping Flood**: Sends SYN request, when servers responds with SYN/ACK, but the attacker would reject or not respond with ACK - causes many half-open connections and server resource usage will be full.

**Distributed Denial-of-service** attack (DDoS): A DoS attack using multiple systems.

## Client-Side Attacks

- **Cross-site scripting (XSS)** attack: A type of injection attack where the attacker can insert malicious code and target the user of the service. (targets user)
- **SQL Injection** attack: Unlike XSS, it targets the entire website if it's using SQL database. Attackers can potentially run SQL commands that allow them to delete website data.

## Password Attack

Utilize software like password-crackers that try and guess your password.

- **Brute force**: Continuously tries different combinations of characters and letters until it gets access (_abc123!@#, ABC1, etc,._).
- **Dictionary Attack**: Instead of combinations, it tries out words that are commonly used passwords (_banana, 1vent0r, etc,._).

A strong password with a mix of capitals, letters, numbers and special characters can prevent this attack.

## Deceptive Attacks

- **Social Engineering**: An attack method that relies heavily on interactions with humans instead of computers (phishing | spear phishing attacks).
- **Spoofing**: A source masquerading around as something else.
- **Baiting**: Enticing the victim to do something (e.g, Leaving a USB drive somewhere in hope that someone out there will plug it into their machine).
- **Tailgating**: Gaining access into a restricted area or building by following a real employee in.
- **Whaling**: A whale target is typically someone in a position of power (wealthly, high-level government employee, etc.) that they have ability to pay high ransomware fees.
- **Vishing**: Uses Voice over IP (VoIP) to make phone calls or leave voice messages pretending to be from reputable companies in order to trick victims into revealing personal information.

### Targeted and in-person deceptive attacks

- **Shoulder surfing**: Shoulder surfing happens when a person looks over a victim’s shoulder to watch them enter login credentials, credit card numbers, or other sensitive information.
- **Tailgating**: A form of social engineering in which an unauthorized party gains physical access to a restricted area by simply following a person or group of persons who have authorized access.
- **Impersonation**: Might happen over email, text messaging, or a phone call. The attacker impersonates someone who should have access to an organization’s computer network.
- **Dumpster Diving**: Involves the attacker literally digging through the trash of an individual or organization to hunt for confidential information.
- **Evil twin**: Installing Wi-Fi routers that appear to belong to an organization's network. These Wi-Fi access points may not require a password and might appear to offer a stronger signal than the real Wi-Fi router.

## Physical Security

1. **Guards** monitoring controlled access points.
2. **Door locks** restrict access with key or security badge.
3. **Equipment locks** can restrict the movement of sensitive equipment.
4. **Video surveillance** to record activities for playback.
5. **Alarm systems** notify security by sounding and alarm.
6. **Motion sensors** detect movement within a controlled area - triggers alarm systems.

### Protecting the entry points of a building

- **Access Control vestibules**: Interlocking doors or gateways to prevent unauthorized individuals from following authorized individuals into controlled facilities.
- **Badge readers**: They identify each user by the badge they present to the device.

### Protecting the outside of a building

- **Bollards** are sturdy, short, vertical posts placed to restrict access of vehicles to a controlled area.
- **Fences** are physical barriers, with many different designs, that enclose controlled areas to establish a perimeter and keep out external threats.

---

# Module 2 - Pelcgbybtl (Cryptology)

## Cryptography

Hiding messages from potential enemies. Overarching discipline that covers the practice of coding and hiding messages from third parties - referred to as cryptology. Works by a **Encryption algorithm** and a **key**.

> The opposite of this, looking for hidden messages or trying to decipher coded message is referred to as cryptanalysis.

- **Ecryption**: The act of taking a message, called plain-text, and applying an operation to it, called a cipher, so that you receive a garbled, unreadable message as the output, called ciphertext.
- **Cryptosystem**: A collection of algorithms for key generation and encryption and decryption operations that comprise a cryptographic service should remain secure - even if everything about the system is known, except the key.
- **Frequency analysis**: The practice of studying the frequency with which letters appear in a ciphertext.
- **Steganography**: The practice of hiding information from observers, but not encoding it.

The system should remain secure even if your adversary knows exactly what kind of encryption systems you're employing, as long as your **keys remain secure**.

## Future of Cryptanalysis

**Cryptanalysis** uses technology to improve the process of encrypting data and innovates new ways to defend companies from attacks that can access and decode their data.

Many modern encryption algorithms are based on large prime number factorization - hard to do by hand. Evolved to create harder algorithms but also makes easier to crack (Modern quantum computers).

- **Known-Plaintext Analysis (KPA)** requires access to some or all of the plaintext of the encrypted information. The analyst's goal is to examine the known plaintext to determine the key used to encrypt the message.
- **Chosen-Plaintext Analysis (CPA)** requires that the attacker knows the encryption algorithm or has access to the device used to do the encryption. The analyst can encrypt one block of chosen plaintext with the targeted algorithm to get information about the key.
- **Ciphertext-Only Analysis (COA)** requires access to one or more encrypted messages. No information is needed about the plaintext data, the algorithm, or data about the cryptographic key. (Intelligence agencies face this challenge when intercepting encrypted communications with no key)
- **Adaptive Chosen-Plaintext Attack (ACPA)** is similar to a chosen-plaintext attack. Unlike a CPA, it can use smaller lines of plaintext to receive its encrypted ciphertext and then crack the encryption code using the ciphertext.
- **Meddler-in-the-Middle (MITM)** uses cryptanalysts to insert a meddler between two communication devices or applications to exchange their keys for secure communication. The meddler replies as the user and then performs a key exchange with each party. The users or systems think they communicate with each other, not the meddler.

### Results from a cryptanalysis attack

- **Instance deduction** - discovers additional plain or cipher text. While the key isn’t found to break the code, the additional plaintext or ciphertext can be used to cause problems or continue attacks.
- **Information deduction** - obtains some information about plain or cipher text not previously known. The additional information can lead to more information about the encryption key.
- **Distinguishing algorithm** - distinguish the encryption algorithm from a random alteration. This information reveals clues about the encryption algorithm.
- **Global deduction** where the attacker finds an algorithm that is functionally equivalent to the one used in the key. This algorithm is then used to decrypt all information and messages.
- **Total break** - gaining the entire key.

## Symmetric Cryptography

The algorithm that they use the same key to encrypt and decrypt messages.

- **Substitution Cipher**: An encryption mechanism that replaces parts of your plaintext with ciphertext.
- **Stream Cipher**: Takes a stream of input and encrypts the stream one character or on digit at a time, outputting one encrypted character or digit at a time.
- **Block Cipher**: Takes data in, places it into a bucket or block of data that's a fixed size, then encodes that entire block as one unit.

Example, it can be seen when inspecting the 802.11 frame of a web encrypted wireless packet:
![[Pasted image 20260213131112.png]]

## Symmetric Encryption Algorithms

**Data Encryption Standard (DES)**: Designed in the 1970s by IBM, with some input from the US National Security Agency. Adopted as official **FIPS** (Federal Information Processing Standard for the US).

**DES** is a symmetric block cipher that uses 64-bit key sizes and operates on blocks 64-bits in size. Though the key size is technically 64-bits in length, 8-bits are used only for parity checking, a simple form of error checking.

> This means that real world key length for DES is only 56-bits.

Key length is super important in cryptography since it essentially defines the maximum potential strength of the system.

**Advanced Encryption Standard** (AES): Also a symmetric block cipher, similar to DES in which it replaced. Uses 128-bit blocks, twice the size of DES blocks, and supports key lengths of 128-bit, 192-bit, or 256-bit.

Because of the large key size, brute-force attacks on AES are only theoretical right now, because the computing power required (or time required using modern technology) exceeds anything feasible today.

> When considering various encryption algorithms is **speed** and **ease of implementation**.

**RC4** (Rivest Cipher 4): A symmetric stream cipher that gained widespread adoption because of its simplicity and speed.

**GCM** (Galois/Counter Mode): works by taking randomized seed value, incrementing this, and encrypting the value, creating sequentially numbered blocks of ciphertext.

**Seed value**: A secret value that is used to initialize a process that is generated by software using one or more values.

## Asymmetric Cryptography (public key ciphers)

They uses different keys to encrypt and decrypt.

- **Confidentiality**: since encrypted
- **Authenticity**: granted by digital signatures
- **Non-repudiation**: author of the message isn't able to dispute the origin.
  ![[Pasted image 20260213135124.png]]
  Both shared their public keys, but private keys are kept secret. When Daryll sends message, it is encrypted by Suzanne's public key. When Suzanne receives the encrypted message, it is decrypted by her private key.

## Asymmetric vs. Symmetric Cryptography

- **MAC**: A bit of information that allows authentication of a received message, ensuring that the message came from the alleged sender and not a third party masquerading as them.
- **HMAC**: Keyed-hash message authentication code.
- **CMACs**: Cipher-Based Message Authentication Codes.
- **CBC-MAC**: Cipher block chaining message authentication codes.

## Asymmetric Encryption Algorithms

![[Pasted image 20260213161021.png]]

**Elliptic curve cryptography (ECC)**: A public-key encryption system that uses the algebraic structure of elliptic curves over finite fields to generate secure keys.

Both Diffie-Hellmen and DSA have elliptic curve variants, referred to as ECDH and ECDSA, respectively.

## Hashing

(Or a hash function) A type of function or operation that takes in an arbitrary data input and maps it to an output of fixed size, called a hash or digest.
![[Pasted image 20260219000648.png]]

You feed in any amount of data into a hash function and the resulting output will always be the same size, but the output should be **unique to the input**, such that two different inputs should never yield the same output.  
Hashing can also be used to identify duplicate data sets in databases or archives to speed up searching of tables or to remove duplicate data to save space.

Cryptographic hashing is distinctly different from encryption because cryptographic hash functions should be one directional. The ideal cryptographic hash function should be **deterministic**, meaning that the same input value should always return the same hash value.

**Hash Collisions**: Two different inputs mapping to the same output.

Hashing example, we can see that a small difference like changing to all lower case results wildly different output:

```bash
echo 'Hello Mom' | md5sum
2b6fa33b32023e88dc3fd3f43982d8f2  -
echo 'hello mom' | md5sum
ea893bac2d5652173cedf7c86526acf5  - # Small change, different hash
echo 'Hello Mom' | md5sum
2b6fa33b32023e88dc3fd3f43982d8f2  - # Same input, same hash
```

## Hashing Algorithms

MD5 hash function had design flaws by hash collisions (2010) - replaced by SHA1.

**A hash collision** occurs when two distinct inputs produce the same output hash value using a hash function.

**SHA1** is part of the Secure Hash Algorithm suite of functions, designed by the nSA, published in 1995. It operates a 512 bit blocks and generates 160 bit hash digest. Used in:

- TLS/SSL
- PGP SSH
- IPsec
- Git (uses hashes to identify revisions and data integrity by detecting corruptions or tampering)
  Now being replaced with SHA2 and SHA3.

A **MIC** is essentially a hash digest of the message in question. Think of it as a check sum for the message, ensuring that the contents of the message weren't modified in transit.

A successful brute force attack, against even the most secure system imaginable, is a function of attacker time and resources.

A rainbow table is just a pre-computed table of all possible password values, and their corresponding hashes - to trade computational power for disk space:

![[Pasted image 20260219214932.png]]

**Password salt**: Additional randomized data that's added into the hashing function to generate a has that's unique to the password and salt combination.

![[Pasted image 20260219215053.png | 200]]

This means now for an attacker, is that they'd have to compute a rainbow table for each possible salt value. Early UNIX systems used fa 12 bit salt:

$$
2^{12}=4096 {\text{ Possible Salts}}
$$

If a large salt is used, the computational and storage requirements to generate useful rainbow tables becomes almost infeasible. Modern systems now uses:

$$
2^{128} = \text{340 undecillion}
$$

Clearly, it raises the bar high enough that a rainbow table attack wouldn't be possible in any realistic time-frame.

## Public Key Infrastructure

**PKI** is a system that defines the creation, storage and distribution of digital certificates (a file that proves that an entity owns a certain public key):

![[Pasted image 20260219221126.png | 400]]

**CA** (Certificate Authority) is crucial component of a PKI system.  
There's also an **RA** (Registration Authority) that's responsible for verifying the identities of any entities requesting certificates to be signed and stored with the CA.  
A central repository is needed to securely store and index keys, and a certificate management system of some sort makes managing access to stored certificates and issuance of certificates easier.

**SSL/TLS** is a certificate that a web server presents to a client as part of the initial secure setup:
![[2026-02-19-231503_hyprshot.png | 400]]

**Self-signed certificate:** the name implies, these are certificates that are **bound to clients** and are used to **authenticate** the client to the server, allowing access control to an SSL/TLS service.  
With their own internal CA issues and manages client certificates for their service.  
There're also **code signing certificates**: Allowing users of these signed applications to verify the signatures and ensure that the application was not tampered with.

## Certificates

The X.509 standard is what defines the format of digital certificates.

| Field                                                 | Description                                                                                                                  |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Version**                                           | What version of the X.509 standard the certificate adheres to.                                                               |
| **Serial Number**                                     | A unique identifier assigned by the CA that allows it to manage and identify individual certificates.                        |
| **Certificate Signature Algorithm**                   | Indicates which public key algorithm is used for the public key and which hashing algorithm is used to sign the certificate. |
| **Issuer Name**                                       | Information about the authority that signed the certificate.                                                                 |
| **Validity**                                          | Contains two sub-fields — **Not Before** and **Not After** — defining the period during which the certificate is valid.      |
| **Subject**                                           | Identifying information about the entity to whom the certificate was issued.                                                 |
| **Subject Public Key Info**                           | Contains two sub-fields defining the public key algorithm and the public key itself.                                         |
| **Certificate Signature Algorithm (Signature Field)** | Must match the algorithm specified in the Subject Public Key Info field.                                                     |
| **Certificate Signature Value**                       | The actual digital signature data.                                                                                           |

A web of trust is where individuals, instead of certificate authorities, sign other individuals public keys:
![[Pasted image 20260219235706.png | 400]]

## Cryptography in Action

**HTTPS** can also be called HTTP over **SSL/TLS** - since encapsulating the HTTP traffic over an encrypted secured channel utilizing SSL or TLS.

1. A secure communication line, which means data being transmitted is protected from potential eavesdroppers.
2. The ability to authenticate both parties communicating, though typically only the server is authenticated by the client.
3. The integrity of communications, meaning there are checks to ensure that messages aren't lost or altered in transit.

![[Pasted image 20260221220415.png]]

The **session key** is the shared symmetric encryption key used in TLS sessions to encrypt data being sent back and forth.

- **Forward Secrecy**: A property of a cryptographic system so that even in the event that the private key is compromised, the session keys are still safe.
- **Secure Shell (SSH)**: A secure network protocol that uses encryption to allow access to a network service over unsecured networks (a secure replacement for **telnet, rlogin or rexec**).
- **Pretty good privacy (PGP)**: An encryption application that allows authentication of data, along with privacy from third parties, relying upon asymmetric encryption to achieve this.

## Securing Network Traffic

**Virtual Private Network (VPN)**: A mechanism that allows you to remotely connect a host or network to an internal, private network, passing the data over a public channel, like the internet.  
![[Pasted image 20260221221714.png]]

**IPsec** works by encrypting an IP packet and encapsulating the encrypted packet inside an IPsec packet - then it gets routed to the VPN end-point where the packet is deencapsulated and decrypted then sent to the final destination:  
![[Pasted image 20260221221933.png]]

**IPsec** supports **Transport mode** and **Tunnel mode**:

- When **transport mode** is used, only the payload of the IP packet is encrypted, leaving the IP headers untouched.
- In **tunnel mode**, the entire IP packet, header payload and all, is encrypted and encapsulated inside a new IP packet with new headers.

The **tunnel** is provided by L2TP which permits the passing of unmodified packets from one network to another.  
The **secure channel**, on other hand, is provided by IPsec, which provides confidentiality, integrity, and authentication of data being passed (e.g, OpenVPN).

OpenVPN can operate over either TCP or UDP, typically over port 1194. Supports up to 256 bit encryption through the OpenSSL library.

## Cryptographic Hardware

![[Pasted image 20260221230359.png]]

A **Trusted Platform Module (TPM)** integrated into the hardware of a computer that's dedicated crypto processor.

- Secure generation of keys
- Random number generation
- Remote attestation
- Data binding and sealing
  Has unique secret RSA key burned into the hardware at the time of manufacture - allows to perform hardware authentication - can detect unauthorized hardware changes to a system.

Data sealing is similar to binding since data is encrypted using the hardware backed encryption key.

**Secure Element**: A tamper resistant chip often embedded in the microprocessor or integrated into the main board of a mobile device. It supplies secure storage of cryptographic keys and provides a secure environment for applications.  
**Trusted Execution Environment (TEE)**: Provides full-blown isolated execution environment that runs alongside the main OS.

Options for implementing FDE:
- PGP (commercial product)
- Bitlocker (Microsoft)
- Filevault 2 (Apple)
- dm-crypt (open-source)

![[Pasted image 20260224211516.png]]


## Lab Summary: OpenSSL

### Generating Keys
Generating a 2048-bit RSA private key:
```bash
openssl genrsa -out private_key.pem 2048
```

Generating a public key:
```bash
openssl rsa -in private_key.pem -outform PEM -pubout -out public_key.pem
```

### Encrypting and Decrypting

Encrypting a text file:
```bash
# Create a file
echo 'Hello mom, this is a secret text.' > secret.txt

# Encryption with public key
openssl rsautl -encrypt -pubin -inkey public_key.pem -in secret.txt -out secret.enc
```

Decryption with private key:
```bash
openssl rsautl -decrypt -inkey private_key.pem -in secret.enc
```

### Creating a hash digest
A hash digest of a message:
```bash
openssl dgst -sha256 -sign private_key.pem -out secret.txt.sha256 secret.txt
```

Performing a verification:
```bash
openssl dgst -sha256 -verify public_key.pem -signature secret.txt.sha256 secret.txt

# OUTPUT
# If successful and file hasn't been modified
Verified OK
```


