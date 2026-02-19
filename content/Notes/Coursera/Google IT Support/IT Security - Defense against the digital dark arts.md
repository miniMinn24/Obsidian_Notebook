---
title: IT Security - Defense against the digital dark arts
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
