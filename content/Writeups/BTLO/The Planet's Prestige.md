---
date: 2026-05-10
tags:
  - challenge
  - defensive
  - email
---

**Challenge:** https://blueteamlabs.online/home/challenge/the-planets-prestige-e5beb8e545

> [!quote] Scenario
> CoCanDa, a planet known as 'The Heaven of the Universe' has been having a bad year. A series of riots have taken place across the planet due to the frequent abduction of citizens, known as CoCanDians, by a mysterious force. CoCanDa’s Planetary President arranged a war-room with the best brains and military leaders to work on a solution. After the meeting concluded the President was informed his daughter had disappeared. CoCanDa agents spread across multiple planets were working day and night to locate her. Two days later and there’s no update on the situation, no demand for ransom, not even a single clue regarding the whereabouts of the missing people. On the third day a CoCanDa representative, an Army Major on Earth, received an email.

# Tools Used
- [PhishTool](https://app.phishtool.com) to analyze emails for phishing attacks.
- [ExifTool](https://exiftool.org/) to analyze metadata of various file types. 
- [CyberChef](https://gchq.github.io/CyberChef/) to decode and identify hidden data.
- [Neovim](https://neovim.io/) to read and understand content structures.

# Questions & Answers
## Q-1. What is the email service used by the malicious actor?

Mail ကိုစစ်ဖို့အတွက် ကျွန်တော် [PhishTool](https://app.phishtool.com) ကိုအသုံးပြုပါတယ်။

![[Pasted image 20260510173030.png]]

Email headers တွေမှာ ဒီ Mail ဘယ်ကလာလဲဆိုတဲ့ Info ပါတွေကိုကြည့်နိုင်ပါတယ်။ တချို့ Header တွေက Faked လုပ်ထားနိုင်တာကြောင့် Sender Policy Framework (SPF) ကိုတစ်ချက်စစ်သင့်ပါတယ်။ SPF က Email Spoofing နဲ့ Authorized server တွေကိုစစ်ဆေးပေးတာပါ၊ အောက်မှာဆို Mail လာတဲ့ Source က Legitimate မဖြစ်ဘူးလို့သတ်မှတ်ထားပါတယ်။

![[Pasted image 20260511162625.png]]

Transmission မှာ Originating IP `93.99.104.210` ကိုကြည့်လိုက်ရင် "emkei.cz" ဆိုတာတွေ့ရပါတယ်။

![[Pasted image 20260510173551.png]]

## Q-2. What is the Reply-To email address?

Reply-to field ဆိုတာ Recipient ဘက်က Reply ပြန်လို့ရင် Mail ရဲ့ Actual address ဘက်ကိုပြန်တာမဟုတ်ဘဲ Alternate address ဘက်ကို Response ပြန်ဖို့သတ်မှတ်ပေးတာဖြစ်ပါတယ်။ ဒီ Email address domain ကလည်း Attacker အသုံးပြုထားတာဖြစ်တာကြောင့် အောက်ပုံမှာ `negeja3921@pashter.com` ကိုတွေ့ရပါတယ်။ 

![[Pasted image 20260511181629.png]]

## Q-3. What is the filetype of the received attachment which helped to continue the investigation?

Attachments မှာစစ်ကြည့်လိုက်ရင် PuzzleToCoCanDa.pdf ဆိုတဲ့ဖိုင်ပါနေတာကိုတွေ့ရပါတယ်။ Download ဆွဲကြည့်တဲ့အခါ သူက Password protected ဖိုင်ဖြစ်ပြီး Password: `Infected` ပါ။

![[Pasted image 20260511183939.png]]

puzzletococanda.pdf ဖိုင်ကို `exiftool`  နဲ့အသေးစိတ် metadata စစ်ကြည့်လိုက်တဲ့အခါ File type က ZIP ဖိုင်ဆိုတာတွေ့ရပါတယ်။

![[Pasted image 20260511184605.png]]

## Q-4. What is the name of the malicious actor?

ခုနက puzzletococanda.pdf ကို zip ဖြည်ကြည့်တဲ့အခါ အခြားဖိုင်တွေပါဝင်နေတာတွေ့ရပါတယ်။ 

![[Pasted image 20260511185251.png]]


ဖိုင်တစ်ခုချင်းဆီ `exiftool` နဲ့ Metadata လိုစစ်ဆေးလိုက်တဲ့အခါ GoodJobMajor (.pdf) ဖိုင်မှာ Author က `Pestero Negeja` ဖြစ်ကြောင်းတွေ့ရပါတယ်၊ မေခွန်းထဲက Malicious actor တစ်ယောက်ရဲ့နာမည်ပါ။ 

![[Pasted image 20260511184931.png]]

## Q-5. What is the location of the attacker in this Universe?

ကျွန်တော်တို့ File တွေ Metadata လိုက်စစ်နေရင်းနဲ့ Money.xlsx ဆိုတဲ့ဖိုင်ကလည်း zip ဆိုတာတွေ့ရပါလိမ့်မယ်။ 

![[Pasted image 20260511190142.png]]

Unzipping `Money.xlsx`:
```bash
unzip Money.xlsx -d unzipped_contents
```

zip ဖြည်ကြည့်တဲ့အခါ Office Spreadsheet အတွက် XML contents တွေပါဝင်ပါလိမ့်မယ်။ ဒါပေမယ့် File တစ်ခုချင်း အမြန်လိုက်ဖွင့်ကြည့်လိုက်တဲ့အခါ sharedStrings.xml ဖိုင်မှာ Message နဲ့အတူ Encoded စားသားတစ်ခုကို တွေ့ရပါတယ်။

![[Pasted image 20260511191203.png]]

```
VGhlIE1hcnRpYW4gQ29sb255LCBCZXNpZGUgSW50ZXJwbGFuZXRhcnkgU3BhY2Vwb3J0Lg==
```

ဒီ Encoded text ကို CyberChef မှာရှာကြည့်လိုက်တော့ သူက Base64 encoded ဖြစ်ပြီး ASCII စာသားအနေနဲ့အောက်ပါအတိုင်း Output မှာ Message ကိုပြန်တွေ့ရပါတယ်။ 

![[Pasted image 20260511191826.png]]

## Q-6. What could be the probable C&C domain to control the attacker’s autonomous bots?

Command and Control (C&C) server ဆိုတာ Attacker တွေက Target တွေကိုတိုက်ခိုက်ဖို့အတွက် Command Center အဖြစ် Stolen data သိမ်းမယ် (or) Command တွေပို့ဆောင်တဲ့နေရာလေးပေါ့။ Network တစ်ခုကိုထိုးဖောက်ဖို့အတွက်လည်း C&C Communication တည်ဆောက်တာက Attacker တွေအသုံးပြုတဲ့ နည်းလမ်းတစ်ခုပါပဲ။

ကျွန်တော်တို့သိခဲ့တဲ့ Mail ရဲ့ Reply-To: `negeja3921@pashter.com` ဆိုကတည်းက Autonomous bots တွေကလည်း ဒီ Attacker's domain ထဲမှာပဲဖြစ်နေဖို့၊ Events တွေကို Listening လုပ်နေမယ်ဆိုတာသေချာပါတယ်။

![[Pasted image 20260511193028.png]]


