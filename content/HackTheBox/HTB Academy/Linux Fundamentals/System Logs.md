# System Logs
A set of files that contains info - *system's behavior, network activity, and user activity*
and used to <mark style="background: #ABF7F7A6;">identify potential security breachs</mark> - *unauthorised logins, attempted attacks, clear text credentials, and unusual file access*

Reviewing logs after security testing *(intrusion detection alerts, system warnings, ...)*

Set the appropriate <mark style="background: #ABF7F7A6;">log levels, configuring log rotation</mark> to prevent log files from becoming too large, and ensuring that the logs are <mark style="background: #ABF7F7A6;">stored securely and protected</mark> from unauthorized access.
- Regularly review and analyse in timely manner

## Kernel Logs
**Hardware information** - *hardware drivers, system calls, kernel events* located in `/var/log/kern.log`
Helps to <mark style="background: #ABF7F7A6;">identify suspicious system calls</mark> and could indicate the presence of malware, detect unusual behaviours
## System Logs
**System-level events** information - *service starts/stops, login attempts, reboots* located in `/var/log/syslog`
Helpts to <mark style="background: #ABF7F7A6;">identify potential issues</mark> and recommend security measures for it
## Authentication Logs
**User authentication** attempts - *successful and failed attempts* located in `/var/log/auth.log`
Essential for penetration testers to **review logs**, ensure it is <mark style="background: #ABF7F7A6;">secure and has not been compromised</mark>.
## Application Logs
**Activities of specific applicaitons** stored in their own files - `var/log/apache2/error.log` *(Apache web server)* or `/var/log/mysql/error.log` *(MySQL server)* --- can be used to identify suspcious and <mark style="background: #ABF7F7A6;">data exfiltration</mark>
- **Access logs** - track requests made - *login attempts, file accesses, network connections*
- **Audit logs** - track changes made - *modifications, configurations, attempts to modify*

| Service | Description                                                        |
| ------- | ------------------------------------------------------------------ |
| **Apache**  | `/var/log/apache2/access.log`                                      |
| **Nginx**   | `/var/log/nginx/access.log`                                        |
| **OpenSSH** | `/var/log/auth.log` on Ubuntu and `/var/log/secure` on CentOS/RHEL |
| **MySQL**   | `/var/log/mysql/mysql.log`                                         |
| **Systemd** | `/var/log/journal/` directory                                      |
## Security Logs
Fail2bah application records failed login attempts in `/var/log/fail2ban.log` while UFW records `/var/log/ufw.log`
General system logs `/var/log/syslog` or `/var/log/auth.log` --- penetration testers use it to search for <mark style="background: #ABF7F7A6;">specific events or patterns</mark> for further tests.

> [!TIP] Important to be familiar with **default locations** for access logs
> All these logs can be assessed and analyzed CLI tools *`tail, grep, sed`*
