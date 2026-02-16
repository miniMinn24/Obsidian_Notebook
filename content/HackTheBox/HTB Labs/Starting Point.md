#### SMB
**Server Message Block** - <mark style="background: #BBFABBA6;">file/printer sharing, network browsing, inter-process communication</mark> between endpoints through `pipes` on network.
- Mostly seens on Windows, Basic for Microsoft's *Distributed File System*.
- Runs on **Application**/**Presentation** layer.
- Relies on **TCP** *(server port `445`)* and **IP** for <mark style="background: #BBFABBA6;">transport</mark>.
- On NetBT, server component uses 3 TCP or UDP ports:

| Port  | Service                  |
| ----- | ------------------------ |
| `137` | NETBIOS Name Service     |
| `138` | NETBIOS Datagram Service |
| `139` | NETBIOS Session Service  |

**SMB-enabled storage** on network --- `share` can be accessed by clients. If SMB allows clients to CRUD, there's clear need for <mark style="background: #BBFABBA6;">authentication</mark>.
