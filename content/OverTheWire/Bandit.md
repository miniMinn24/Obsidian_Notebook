### SSH
**Secure Shell** used for communications between Unix systems over the internet, <mark style="background: #ABF7F7A6;">to remote login and command execution</mark>. A replacement for **Telnet** communication and other unsecured Unix shell protocols.
- Uses<mark style="background: #BBFABBA6;"> public-key cryptography</mark> for authentication: both ends uses generated **public-private** key pairs to encrypt connection.
```bash
ssh <username>@<remote>
ssh bandit0@bandit.labs.overthewire.org -p 2220
```
*Should then check `pwd`, `/etc/*release`, and `whoami`*

Looking for file type:
```bash
find . -type f # f - regular file, d - directory 
find . -type f -exec file {} + # along with another command to check file Type
```

Usages:
```bash
# View file types
$ find . -type f -exec file {} + | grep "ASCII"

# Finding for specific size and checking
$ find . -type f -size 1033c ! -executable
```


Finding based on **user** and **group**:
```bash
find / -type f -user bandit7 -group bandit6
```

### Piping and Redirection
- `STDIN (0)` - standard input (data fed into program)
-  `STDOUT (1)` - standard output
-  `STDERR (2)` - standard error

```bash
# Redirecting
ls > myoutput
```

#### Looking for unique line
`uniq` command only works with sorted data, and can be used with `sort`:
```bash
$ sort data.txt | uniq -u

# Example -- test.txt
cyber
analyst
key
analyst
cyber

$ sort test.txt
analyst
analyst
cyber
cyber
key

$ sort test.txt | uniq -u
key
```

#### Looking for Human-Readable Strings | Preceded by several "="
`strings` extracts printable and readable characters from a file, while `cat` is not efficient for direct reading. Then, output is <mark style="background: #BBFABBA6;">piped</mark> to filter lines containing `=` characters.
```bash
# Viewing file
$ cat data.txt
W!��N|�U��9�GJ�v���9=lakdW!��N|�
   U��9�GJ��v��9=G��@��Z�
adflkajdfli...U��9�GJ�v���9====lakdW!��N|�
   U��9�GJ�...
  
# Extracting only printable strings
$ strings data.txt
WN9=la
kdW!ad
fa
...

# Filter containing "==="
$ strings data.txt | grep ===
========== the
========== password
Q========== is%
u`9J========== FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey

```

#### Extracting Base64 Encoded Data
`base64` a utility to encode and decode data (<mark style="background: #BBFABBA6;">converting binary data into ASCII characters</mark>) for safe transmission over **text-based protocols**. 
- **Encoding** `base64 [file]` and **Decoding** `base64 -d [file]`

#### Password rotated 13 position | for 'a-z' 'A-Z' letters
`tr` a utility to translating and deleting characters. Supports output character transformations (basic find and replace):
- Transform - `a` to `A`
- Squeezing - `H    e     l   l o` to `Hello`
- Deleting - `DpDaDsDswoDrd`to `password`
```bash
# Syntax
$ cat data.txt | tr [OPTION] SET1 [SET2]

# lowercase to UPPERCASE
$ cat greekfile | tr [a-z] [A-Z]

# Deleting specific characters
$ echo "Welcome To World" | tr -d W

# Sequeezing to repeative characters
$ echo "Welcome    To    World" | tr -s " "
```

Decoding the 13 positions rotated characters:
```bash
# Example - what 13 positions means:
#   None Rotated         - abcdefghijklmnopqustuvwxyz
#   13 Positions Rotated - nopqustuvwxyzabcdefghijklm

# If password is just hided in lowercase with 13 positions
$ cat data.txt | tr 'a-z' 'n-za-m'

# But it is hided for both lowercase and uppercase with 13 positions
$ cat data.txt | tr 'a-zA-Z' 'n-za-mN-ZA-M'
```
