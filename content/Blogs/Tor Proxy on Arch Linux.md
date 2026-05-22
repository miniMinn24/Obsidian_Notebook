---
date: 2025-09-17
tags:
  - tor
  - proxy
  - archlinux
---
These notes are copied from this [article](https://linuxconfig.org/install-tor-proxy-on-ubuntu-20-04-linux). It was primarily focused on Ubuntu 20.04 Linux, but the step-by-step processes also worked on **Arch Linux**.

## Installation
Tor helps to avoid identification of you by routing your network data through a **pool of servers** around the world.

```bash
$ sudo pacman -S tor
```

By default, Tor runs on port `9050` - confirm with `ss` command (*another utility to investigae sockets*).

```bash
$ ss -nlt
State        Recv-Q       Send-Q             Local Address:Port              Peer Address:Port       
LISTEN       0            4096                   127.0.0.1:9050                   0.0.0.0:*                    
LISTEN       0            4096                     0.0.0.0:5355                   0.0.0.0:*                         
```
- `n` - numeric (make not human readable and be specific), `l` - listening sockets, `t` - TCP sockets.

## Tor Network Connection Test
Check your current IP address, obtain an external IP address from Tor network, and then make sure they are different.

```bash
# Current IP Address
$ wget -qO - https://api.ipify.org; echo

# Obtain IP Address from Tor network
$ torsocks wget -qO - https://api.ipify.org; echo
```

## Torifying Your Shell
Using the Tor network by default for shell commands

```bash
# ON
$ source torsocks on
Tor mode activated. Every command will be torified for this shell

# This command goes through Tor network
$ wget -qO - https://api.ipify.org; echo
162.247.74.200

# Making permanent for all new shell sessions
$ echo ". torsocks on" >> ~/.bashrc

# OFF
$ source torsocks off
Tor mode deactivated. Command will NOT go through Tor anymore.
```

## Enable the Tor Control Port
To interact with the Tor installation on our system.

First, password protect the Tor connection - through **hashing** process.

```bash
# Enter your Tor password
$ torpass=$(tor --hash-password "my-tor-password")

# Enabling the Tor control port and inserting hashed password.
$ printf "HashedControlPassword $torpass\nControlPort 9051\n" | sudo tee -a /etc/tor/torrc
```

Checking the config file `/etc/tor/torrc`:

```bash
$ tail -2 /etc/tor/torrc
HashedControlPassword 16:5D13CF3C7511D9FC60161179F8FFA1083C99601A5257CDC622E161839B
ControlPort 9051

# Restarting to apply changes
$ sudo systemctl restart tor
```

You should able to see the Tor service running on **both ports** `9050` and `9051`:

```bash
$ ss -nlt
$ tail -2 /etc/tor/torrc
State        Recv-Q       Send-Q             Local Address:Port              Peer Address:Port       
LISTEN       0            4096                   127.0.0.1:9050                   0.0.0.0:*          
LISTEN       0            4096                   127.0.0.1:9051                   0.0.0.0:*   
...
```

## Connecting to Tor Control Port
Now able to connect to the Tor control port to [communicate with Tor and issue commands](https://gitweb.torproject.org/torspec.git/tree/control-spec.txt#n415). e.g., using `telnet`  command to request a new Tor circuit and clear cache:

```bash
$ telnet 127.0.0.1 9051
Trying 127.0.0.1...
Connected to 127.0.0.1.
Escape character is '^]'.
AUTHENTICATE "my-tor-password"
250 OK
SIGNAL NEWNYM
250 OK
SIGNAL CLEARDNSCACHE
250 OK
quit
250 closing connection
Connection closed by foreign host.
```

Tor control port can also be shell scripted. e.g., which will request a new circuit (IP Address) from Tor:

```bash
$ source torsocks off
Tor mode deactivated. Command will NOT go through Tor anymore.
$ torsocks wget -qO - https://api.ipify.org; echo
103.1.206.100
$ echo -e 'AUTHENTICATE "my-tor-password"\r\nsignal NEWNYM\r\nQUIT' | nc 127.0.0.1 9051
250 OK
250 OK
250 closing connection
$ torsocks wget -qO - https://api.ipify.org; echo
185.100.87.206
```

This script can be executed any time you need to obtain a new circuit.

## Configure Web Browser to Use Tor Network
- Open settings panel - Firefox: `about:preferences` in search bar > General > Network Settings - "Settings..." button.
- "Manual proxy configuration" and enter `localhost` under the "SOCKS Host" field, port `9050`.
- Go to [IP Chicken](ipchicken.com) to make sure that you are connected to the Tor network.

