# Module 5: APIs and Data Collection
## Simple APIs
APIs are just like functions, no need to know how it works, just only input and output. An essential type of API is **REST API** that application programs use it access resources via internet.

```python
# Pandas is an API and not even written in Python
import pandas as pd

# When using this constructor, in API lingo this is an "instance"
df = pd.DataFrame({"AA":1234, "AB": 2234})
```

---
## REST APIs
REST APIs follow *Representational State Transfer* architecture style.
It communicate via HTTP message (usually containing a JSON file) that contains what operations we want the **service** or **resource** to perform in the message. Then API returns a response.

Example usage:
```python
from nba_api.stats.static import teams # a REST API
import pandas as pd # For better data visualization or management

# Data Collection Function
def one_dict(list_dict):
    keys=list_dict[0].keys()
    out_dict={key:[] for key in keys}
    for dict_ in list_dict:
        for key, value in dict_.items():
            out_dict[key].append(value)
    return out_dict

# Getting resources from NBA API
nba_teams = teams.get_teams()

# Better data format
df_nba_teams = pd.DataFrame(nba_teams)

print(df_nba_teams)
```

#### Overview of HTTP
*Hyper Text Transfer Protocol* consists of
	- **Scheme** the protocol: `http://`, `https://`...
	- **Internet Address**/**Base URL** the location: `www.github.com`...
	- **Route** the location on web server: `/images/photo.png`...
	
	Example: `http://www.ibm.com/images/photo.png`

My example code requesting:
```python
# importing requests lib for making web requests
import requests as req

# the web location
URL = "https://www.coursera.com"

# requesting 
req_status = req.get(URL)
print(req_status.status_code) # (200: OK)

if req_status.status_code == 200:
    print(req_status.headers)
```

**APIs** are good for automation, efficiency as it provides more functionalities and less human efforts. But, if APIs are poorly integrated, the application program will be vulnerable in data breaches.

#### `RandomUser` API
This section will be using `RandomUser` API to generate placeholders randomly for program testing purposes, such as random emails, users, address, title with these functions:
	- `get_login_sha()`
	- `get_full_name()`
	- `get_password()`
	- `get_username()`

```python
# Importing necessary libs
import pandas as pd # for data management
from randomuser import RandomUser as ru # for random data generation

# random 10 users generation
users = ru.generate_users(1)
df_users = pd.DataFrame(users)

print(df_users)
```

Using `get_somthing()` can generate the required parameters to construct a dataset:
```python
# retrivng each randomly genearted users' email and full names
for user in users:
    print(user, user.get_email(), user.get_full_name())
```

My useful code:
```python
# importing necessary libs
import pandas as pd # for data management
from randomuser import RandomUser as ru # for random data generation

# intializing an empty list
users = []

# randomly generating each users' username, email, and gender
for user in ru.generate_users(4):
	# first, organize a pair of data
    user_detail = {
        "Name": ru.get_username(user),
        "Email": ru.get_email(user),
        "Gender": ru.get_gender(user)
    }
	# then, append that pair into the empty list
    users.append(user_detail)

# formatting the data for better visulization
df_users = pd.DataFrame(users)
print(df_users)
```

Or, alternative code:
```python
import pandas as pd
from randomuser import RandomUser as ru

users = []

for user in ru.generate_users(4):
    user_detail = [ru.get_username(user), ru.get_email(user),ru.get_gender(user)]
    users.append(user_detail)

df_users = pd.DataFrame(users)
df_users.columns = ['Name', 'Email', 'Gender']

print(df_users)

```

---
#### Web Scraping
Beautiful Soup object is a Python library for pulling data out of HTML and XML files.

```python
from bs4 import BeautifulSoup # this module helps in web scrapping.
import requests  # this module helps us to download a web page
```

Scarping all images tags:
```python
for link in soup.find_all('img'):# in html image is represented by the tag <img>
    print(link)
    print(link.get('src'))
```

Working with JSON files:
```python
import json
person = {
    'first_name' : 'Mark',
    'last_name' : 'abc',
    'age' : 27,
    'address': {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021-3100"
    }
}

with open('person.json', 'w') as f:  # writing JSON object
    json.dump(person, f)
```