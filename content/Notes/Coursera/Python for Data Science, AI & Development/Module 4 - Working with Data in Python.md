# Module 4: Working with Data in Python
## Reading and Writing Files with `Open`
Python's `open` function creates an object and access to data within the text file.
	- **File Path**: the location of the file to be opened.
	- **Mode**: the purpose of opening the file (`r` for reading, `w` for writing and `a` for appending).

```python
file = open('file.txt', 'r') # opening the file in read mode
```

---
#### Using `with` Statement
The `with` statement is used in most Python operations as it is a best practice when working with file, which ensures the file are properly closed after operation.
	- `with` is good for **automatic resource management**.

```python
with open('file.txt', 'r') as file:
	# Code...
```

Reading entire content:
```python
# to read with a function
def read_file(path):  
    with open(path, 'r') as file:  
        content = file.read()  
        return content  
  
print(read_file('file.txt'))
```

#### Reading Line-by-Line with `readline()`
`readline()` method provides to read the files line by line, and store each line as 

```python
line_1 = file.readline('file.txt', 'r')
line_2 = file.readline('file.txt', 'r')
```

Using with `while` loop:
```python
while True:
	line = file.readline('file.txt', 'r')

	# Break when there're no more lines in file.txt
	if not line: 
		break
		
	print(content)
```

Checking specific value:
```python
line_2 = file.readline('file.txt', 'r')

if 'important' in line_2:
	# Code...
```

> [!IMPORTANT]  **Never Forget** to Close the File
> `file.close()` ensures to properly close the file after reading the contents in the file, as it helps not to waste any resources.
> 
> Or, `file.closed` method can be used to check if the file is closed.

#### Indented Reading (Optional)
`seek()` method reads at specific position in the file (like a cursor). The position is specified in bytes, so you'll need to know the byte offset of the characters you want to read:
```python
file.seek(10) # Move to the 11th byte (0-based index)
```

 `read()` method with an argument specifies the number of characters to read from current position:
```python
characters = file.read(5) # Read the next 5 characters
characters = file.readline(10) # It doesn't read past the end of line  
```

#### Writing Files with `write()`
`write()` method with `w` mode overwrites an existing or a new file. But with `a` (append) mode add new contents to the existing file:
```python
with open('file2.txt', 'w') as write_file:
	# Code...
```


#### Syntax and use cases when working with files in Python:

|Mode|Syntax|Description|
|---|---|---|
|‘r’|`'r'`|Read mode. Opens an existing file for reading. Raises an error if the file doesn't exist.|
|‘w’|`'w'`|Write mode. Creates a new file for writing. Overwrites the file if it already exists.|
|‘a’|`'a'`|Append mode. Opens a file for appending data. Creates the file if it doesn't exist.|
|‘x’|`'x'`|Exclusive creation mode. Creates a new file for writing but raises an error if the file already exists.|
|‘rb’|`'rb'`|Read binary mode. Opens an existing binary file for reading.|
|‘wb’|`'wb'`|Write binary mode. Creates a new binary file for writing.|
|‘ab’|`'ab'`|Append binary mode. Opens a binary file for appending data.|
|‘xb’|`'xb'`|Exclusive binary creation mode. Creates a new binary file for writing but raises an error if it already exists.|
|‘rt’|`'rt'`|Read text mode. Opens an existing text file for reading. (Default for text files)|
|‘wt’|`'wt'`|Write text mode. Creates a new text file for writing. (Default for text files)|
|‘at’|`'at'`|Append text mode. Opens a text file for appending data. (Default for text files)|
|‘xt’|`'xt'`|Exclusive text creation mode. Creates a new text file for writing but raises an error if it already exists.|
|‘r+’|`'r+'`|Read and write mode. Opens an existing file for both reading and writing.|
|‘w+’|`'w+'`|Write and read mode. Creates a new file for reading and writing. Overwrites the file if it already exists.|
|‘a+’|`'a+'`|Append and read mode. Opens a file for both appending and reading. Creates the file if it doesn't exist.|
|‘x+’|`'x+'`|Exclusive creation and read/write mode. Creates a new file for reading and writing but raises an error if it already exists.|

---
## Pandas
An open-source software library for data manipulation and analysis used in Python.

Pandas offer 2 primary data structures:
	1. **DataFrame**: The 2-dimensional and size-mutable data structure with labelled axes *rows & columns*.
	2. **Series**: The 1-dimensional labelled array *a single column or row*.

**Data Import and Export**: Pandas makes easy to read data from various sources *SQL databases, spreadsheets, ...* and export them in these format.

Importing **Pandas** library to access to its pre-built classes and functions:
```python
import pandas as pd

# Now we can access to Pandas' pre-bult classes and functions
# E.g.:
# - read_csv()
# - Series()
# - DataFrame
# ...
```

*csv: comma separated file, df: data frame*

Data frame loading:
```python
print(pd.read_csv(csv_file))
```

Series loading:
```python
data = [12,42,82,4,22,182,11]

print(pd.Series(data))
```

---
Accessing data by label:
```python
print(s[2]) # Access the element with label 2 (value 30)`
```

Accessing by position:
```python
print(s.iloc[3]) # Access the element at position 3 (value 40)`
```

Accessing multiple elements:
```python
print(s[1:4]) # Access a range of elements by label`
```

---
Useful **Pandas**'s functionalities:
- **values**: Returns the Series data as a NumPy array.
- **index**: Returns the index (labels) of the Series.
- **shape**: Returns a tuple representing the dimensions of the Series.
- **size**: Returns the number of elements in the Series.
- **mean(), sum(), min(), max()**: Calculate summary statistics of the data.
- **unique(), nunique()**: Get unique values or the number of unique values.
- **sort_values(), sort_index()**: Sort the Series by values or index labels.
- **isnull(), notnull()**: Check for missing (NaN) or non-missing values.
- **apply()**: Apply a custom function to each element of the Series.

---
Creating **DataFrames** from dictionaries:
```python
pentest_info = {
                'IP': ['192.168.20.1', '192.158.23.1', '192.168.21.3'],
                'Ports': [2,4,1],
                'Admin': ['admin001', 'admin002', 'admin003']
                }

info_df = pd.DataFrame(pentest_info)
```

Accessing rows specifically:
```python
# Show multiple columns with the label
print(info_df[['IP', 'Ports']])

# Show Admin colum and row 2 only
print(info_df[['Admin']].iloc[2])
```

---
#### `loc()` and `iloc()` Functions
`loc()` is label-based that we have to pass the name of row or column.
	`loc[row_label, column_label]`

`iloc()` is indexed-based that we have to pass an integer index to select specific row/column.
	 `iloc[row_index, column_index]`

```python
# Sample Data
sheet = {
        'Student': ['David', 'Samuel', 'Terry', 'Evan'],
        'Age': [27, 24, 22, 32],
        'Country': ['UK', 'Canada', 'China', 'USA'],
        'Course': ['Python', 'C++', 'Machine Learning', 'Web Development'],
        'Marks': [85, 72, 89, 76]
        }

df = pd.DataFrame(sheet)
```

```python
# first row and the first column
df.iloc[0, 0]

# first row and the third column
df.iloc[0, 2]

# first row and salary column
df.loc[0, 'Course']
```

#### Slicing
```python
# slicing with indexes
df.iloc[0:2, 0:3]

# Output:
#   Student  Age
# 0   David   27
# 1  Samuel   24
# 2   Terry   22


# slicing with name
df.loc[0:3, 'Student':'Country']

# Output:
#   Student  Age Country
# 0   David   27      UK
# 1  Samuel   24  Canada
# 2   Terry   22   China
# 3    Evan   32     USA
```

---
## Numpy
A Python library that is commonly used for working with arrays, linear algebra, and matrices. *Numerical Python*: an open-source project.
The array object in **Numpy** is called **ndarray**, it provides lots of supportive functions to easily work with ndarray.

```python
import numpy as np

# Creating numpy array
a = np.array([1,2,3,4])

# Check version
print(np.__version__)
```

We can define steps in slicing by `arr[start:end:step]`.

Using a list as a argument and assign `1000` to corresponding particular indexes:
```python
arr = np.array([1,2,3,4,5,6,7,8,9,10])
select = [0,2,5,7]

arr[select] = 1000
```

```python
# Get the number of elements in an array
arr.size 

# Get the number of dimensions in an array
arr.ndim

# Geting shape (tuple of integers indicating the size of the array in each dimension)
arr.shape
```

Numpy statistical functions:
`arr.mean`: finding mean value
`arr.std`: standard deviation
`arr.max()`: finding the largest value in an array
`arr.min()`: finding the smallest value in an array

Array basic operations:
```python
import numpy as np

a = np.array([1,4,2])
b = np.array([4,3,1])

# Basic operations
np.add(a,b)
np.multiply(a,b)
np.divide(a,b)
np.subtract(a,b)
```

More operations:
```python
# Dot operation
np.dot(a,b) # It does multiplication first, then sum all values.

# Adding Constant (adding a value to each elements in the array)
a + 1 # This adds 1 to each elements in an array

# Calculating the sin of each elements
np.sin(a)
```

```python
# Linspace: returns evenly spaced numbers over a specified interval.
np.linspace(start, stop, num=int)
```

---
#### 2 Dimensional Arrays
This note include useful information about basic operations of matrix.

Getting the information of arrays:
```python
import numpy as np

a = np.array([
    [11,12,13],
    [21,22,23],
    [31,32,33]
])

print(a.size) # number of elements in the array: 9
print(a.ndim) # number of dimenions: 2
print(a.shape) # number of rows and column: (3, 3)
```

Accessing elements:
```python
a[0][1] # first row, and second column
a[0][1:4] # first row, and second to third columns
```

matrix multiplication is *dot operation* `numpy.dot()`
