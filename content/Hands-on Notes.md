---
date: 2026-06-14
tags:
  - cybersecurity
  - ctf
---
# Powerful handy commands

## Nmap 
### 1. Aggressive Network Discovery

The assessment began with an aggressive, comprehensive network scan to identify all exposed services, operating system fingerprints, and potential entry points across the full TCP port range.

```bash
nmap -sV -sC -O -T4 --min-rate 5000 -p- 10.129.2.105
```


