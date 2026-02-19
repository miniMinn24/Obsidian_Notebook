# System Information

A list of essential tools to help gather information. Crucial for accessing security configurations, identifying vulnerabilities, or preventing potential security risks.

| Command    | Description                                                                                                                        |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `whoami`   | Displays current username.                                                                                                         |
| `id`       | Returns users identity                                                                                                             |
| `hostname` | Sets or prints the name of current host system.                                                                                    |
| `uname`    | Prints basic information about the operating system name and system hardware.                                                      |
| `pwd`      | Returns working directory name.                                                                                                    |
| `ifconfig` | The ifconfig utility is used to assign or to view an address to a network interface and/or configure network interface parameters. |
| `ip`       | Ip is a utility to show or manipulate routing, network devices, interfaces and tunnels.                                            |
| `netstat`  | Shows network status.                                                                                                              |
| `ss`       | Another utility to investigate sockets.                                                                                            |
| `ps`       | Shows process status.                                                                                                              |
| `who`      | Displays who is logged in.                                                                                                         |
| `env`      | Prints environment or sets and executes command.                                                                                   |
| `lsblk`    | Lists block devices.                                                                                                               |
| `lsusb`    | Lists USB devices                                                                                                                  |
| `lsof`     | Lists opened files.                                                                                                                |
| `lspci`    | Lists PCI devices.                                                                                                                 |

## SSH
**Secure Shell**, a protocol that allows to actions on remote computers.
- One of the standard tools for administrators to configure and maintain computer through remote access.

```
$ ssh hostname@[IP address]
```

**How-to connect HTB pwnbox**
	Download vpn file, and nevigate into that path in your terminal, then run this:
	
```
	$ sudo openvpn --config your-vpn-file.ovpn
```

### Hostname
Prints the name of computer who we are logged into.

```
$ hostname

Arch Linux
```

### Whoami
A quick way to get the current username to know who we are logged in as. A situational awareness who we are running as, and figure out if the user has any special privileges/access.

```
$ whoami

miniminn
```

### Id
Expands of `whoami` command, prints out group memberships and IDs. Sudo rights could help us escalate privileges.

```
miniminn@archlinux[/]$ id

uid=1000(miniminn) gid=1000(miniminn) groups=1000(miniminn),1337(hackthebox),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),116(lpadmin),126(sambashare)
```

### Uname
Running any of these options on their own will give us the specific bit output we are interested in.

```
$ uname -a

Linux box 4.15.0-99-generic #100-Ubuntu SMP Wed Apr 22 20:32:56 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
```

#### Uname to Obtain Kernel Release

Suppose we want to print out the kernel release to search for potential kernel exploits quickly. We can type `uname -r` to obtain this information.


```
$ uname -r

4.15.0-99-generic
```

With this info, we could go and search for "4.15.0-99-generic exploit," and the first [result](https://www.exploit-db.com/exploits/47163) immediately appears useful to us.


> [!TIP] Study the commands
> It is highly recommended to **study the commands** and understand what they are for and what information they can provide.


