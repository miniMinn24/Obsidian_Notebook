# Firewall Setup
Firewalls are essentially used in Servers (Linux) to protect unauthorised activities based on <mark style="background: #BBFABBA6;">pre-defined rules, protocols, ports</mark> and other criteria.

## Iptables
Filtering network traffic - `nftables, ufw, firewalld`
- **Nftables** is <mark style="background: #ADCCFFA6;">modern syntax</mark> and need more effort to migrate
- **UFW** (Uncomplicated Firewall) - <mark style="background: #ADCCFFA6;">more simple</mark>, built on *iptables*
- **FirewallD** - <mark style="background: #ADCCFFA6;">dynamic and flexible</mark>, custom firewall for complex network configurations


| Component | Description                                                    |
| --------- | -------------------------------------------------------------- |
| Tables    | **Organise and categorise** firewall                           |
| Chains    | Firewall **rules applied to specific** type of network traffic |
| Rules     | Defined rules to filtering packets and take action on them     |
| Matches   | Matching specific network traffic - *IP, ports, protocols*     |
| Targets   | **Specify the action** for packets that match a specific rule  |
*Tables in iptables are used to categorise and organise firewall rules*

| Table Name | Description                                           | Built-in Chains                                    |
| ---------- | ----------------------------------------------------- | -------------------------------------------------- |
| `filter`   | Used to filter network traffic - IP, ports, protocols | `INPUT, OUTPUT, FORWARD`                           |
| `nat`      | Modify source or destination IP of packets            | `PREROUTING, POSTROUTING`                          |
| `mangle`   | Modify header fields of packets                       | `PREROUNTING, OUTPUT, INPUT, FORWARD, POSTROUTING` |
*The raw table contatins built-in chains - `PREROUTING and OUTPUT`*

## Chains
Two types of chains in **Iptables** - `Built-in chains, User-defined chains`
- `PREROUTING` - modifying<mark style="background: #ABF7F7A6;"> destination IP of incoming packets before routing</mark> table processes them.
- `POSTROUTING` - modifying<mark style="background: #ABF7F7A6;"> source IP of outgoing packets after the routing</mark> table processes them.

**User-defined chains** can simplify rule managment by grouping firewall rules. *e.g. web servers that require similar rules, the rules for each server could be grouped in a user-defined chain*

## Rules and Targets
Rules are added to chains using `-A` followed by chain name
- **Rules** - criteria specific fields in the <mark style="background: #ABF7F7A6;">IP header</mark> *(source or destination IP, protocol, source, destination port, ...)*
- **Targets** - <mark style="background: #ABF7F7A6;">action to take for packets</mark> that match the specific rule (`accept, drop, reject, modify`)


| Target Name  | Description                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------- |
| `ACCEPT`     | Allows to **pass through** firewall to destination                                              |
| `DROP`       | **Drops** the packet, **blocks** from passing through                                           |
| `REJECT`     | **Drops** the packet, with *error message sends* back to source                                 |
| `LOG`        | logs the packet info                                                                            |
| `SNAT`       | Modifies **source** IP of packet - for NAT to translate private IP to public IP                 |
| `DNAT`       | Modifies **destination** of packet - for NAT to forward traffic one IP to another               |
| `MASQUERADE` | Similiar to `SNAT` - used in dynamic IP scenario                                                |
| `REDIRECT`   | Redirecting packets to another port                                                             |
| `MARK`       | Adds or modifies the **Netfilter** mark value of packet - for advanced routing or other purpose |
```bash
# Add new entry
# INPUT chain → Allows TCP on port 22 - Accepting
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

## Matches
To match <mark style="background: #ABF7F7A6;">specific characteristics</mark> of network traffic - *source, destination, protocol, port, ...*

| Match Name     | Description                                                    |
| -------------- | -------------------------------------------------------------- |
| `-p`           | **Protocol** to match *(tcp, udp, icmp, ...)*                  |
| `--dport`      | **Destination** port to match                                  |
| `--sport`      | **Source** port to match                                       |
| `-s`           | **Source IP** to match                                         |
| `-d`           | **Destination IP** to match                                    |
| `-m state`     | Matches state of connection *(NEW, ESTABLISHED, RELATED, ...)* |
| `-m multiport` | Matches **multiple ports or port ranges**                      |
| `-m tcp`       | Matches TCP packets with additional options                    |
| `-m udp`       | Matches UDP packets with additional options                    |
| `-m string`    | Matches packets that contain specific string                   |
| `-m limit`     | Matches packets at specified rate limit                        |
| `-m conntrack` | Matches packets based on their **connection tracking info**    |
| `-m mark`      | Matches packets based on their **Netfilter mark value**        |
| `-m mac`       | Matches packets based on their **MAC**                         |
| `-m iprange`   | Matches packets based on **range of IPs**                      |
*In general, matches are specified `-m` option*
```bash
# Add rule to INPUT chain → Filter → matches TCP on port 80
sudo iptables -A INPUT -p tcp -m tcp --dport 80 -j ACCEPT
```
Matches incoming TCP traffic (`-p tcp`) on port 80 (`--dport 80`) and jumps to the accept target (`-j ACCEPT`) if the match is successful.

---
# Practical - using Iptables
Launching a web server and blocking traffic:
```bash
# Lacuhing web server on port 8080
python -m http.server 8080

# Blocking incoming traffic on port 8080
sudo iptables -A INPUT -p tcp --dport 8080 -j DROP

# Deleting that and accepting back
sudo iptables -D  INPUT -p tcp --dport 8080 -j DROP
sudo iptabels -A INPUT -p tcp --dport 8080 -j ACCEPT
```

Blocking traffic from specific IP *e.g. 192.168.1.10*:
```bash
sudo iptables -A INPUT -s 192.168.1.10 -j DROP   # Dropping
sudo iptables -D INPUT -s 192.168.1.10 -j DROP   # Delete rule
sudo iptables -A INPUT -s 192.168.1.10 -j ACCEPT # Accepting

# Test with curl
curl http://localhost:8080 # will get response or nothing
```

**ICMP** (Internet Control Message Protocol) - used for reporting errors and performing network diagnostics.

Blocking traffic from specific protocol *(e.g. ICMP)*:
```bash
sudo iptables -A INPUT -p icmp -j DROP   # Dropping
sudo iptables -D INPUT -p icmp -j DROP   # Deleting rule
sudo iptables -A INPUT -p icmp -j ACCEPT # Accepting

ping <target-ip> # will get reply or nothing
```


Creating new chain and adding rules:
```bash
sudo iptables -N NEWCHAIN
sudo iptables -A NEWCHAIN -p tcp --dport 8080 -j ACCEPT
```

Forwarding traffic to specifi chain:
```bash
sudo iptables -A INPUT -p tcp --dport 8080 -j NEWCHAIN
```

### Save Iptables rules
```bash
sudo pacman -S iptables-nft
sudo iptables-save > /etc/iptables/iptables.rules
```
