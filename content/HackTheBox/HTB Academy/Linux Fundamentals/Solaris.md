# Solaris
A Unix-based OS by **Sun Microsystems** --- later by **Orcale Corporation**. Widely used in *database management, cloud computing, virtualisation*.
- `Orcale VM Server for SPARC` allows to run multiple VM on <mark style="background: #BBFABBA6;">single physical server</mark>
- Mission-critical applications

## Linux vs Solaris
Solaris is <mark style="background: #ABF7F7A6;">proprietary OS</mark> and source code is not avaliable in public --- uses **Service Management Facility** (SMF) - <mark style="background: #ABF7F7A6;">advanced service</mark> management framework with better reliability
Linux uses **Zettabyte File System** (ZFS) - <mark style="background: #ABF7F7A6;">advanced file system</mark> offers *data compression, snapshots, scalability, ...*

Solaris uses **Image Packaging System** (IPS), also provide **RBAC** which not available in all Linux distros.

## Differences
Grouped into categories:
- `Filesystem`
- `Process management`
- `Package management`
- `Kernel and Hardware support`
- `System monitoring`
- `Security`

Difference of commands between Linux and Solaris:

| Linux (Debian)                                                 | Solaris                                               |
| -------------------------------------------------------------- | ----------------------------------------------------- |
| `uname -a` *basic info*                                        | `showrec -a` *more detailed*                          |
| `sudo apt-get install apache2` *Advanced Packaging Tool (APT)* | `pkgadd -d SUNWapchr` *Solaris Package Manager (SPM)* |

## NFS in Solaris
The <mark style="background: #ABF7F7A6;">NFS server</mark> in Solaris can be configured using `share` - directly over the network --- *specify read/write, access restrictions, ...*
```bash
# Sharing directory with r,d permissions over NFS
share -F nfs -o rw /export/home
```

Mounting an NFS share from server with IP:
```bash
mount -F nfs 10.129.15.122:/nfs_share /mnt/local
```

Configuration for NFS --- contains entries:
```bash
cat /etc/dfs/dfstab

# Output:
share -F nfs -o rw /export/home
```

## Process Mapping
`lsof` a utility to list all the <mark style="background: #ABF7F7A6;">files opened</mark> by a process.
```bash
# Listing files opened by Apache web server process
sudo lsof -c apache2
```

In Solaris:
```bash
# Similiar to output of lsof
pfiles 'pgrep httpd'
```

## Executable Access
In Solaris `truss` --- identifies source of errors, performance issues, can also <mark style="background: #ABF7F7A6;">reveal sensitive info</mark> that may arise during **development or maintenance**.

`strace` an alternative --- diagnose and troubleshoot issues in real-time.

```bash
sudo strace -p 'pgrep apache2' # pgrep greps process id
```

In Solaris:
```bash
truss ls

# Output:
execve("/usr/bin/ls", 0xFFBFFDC4, 0xFFBFFDC8)  argc = 1
...SNIP...
```




