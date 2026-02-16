# Module 3: Python Programming Fundamentals

## Conditions and Branching
About logical comparisons `>, <, ==, !=, >=, <=...` and logic gates `AND, OR, NAND...`
Then, condition checking with `if, else, elif...`

---
## Loops
Modifying the list with `for` loop:
```python
colors = ["Yellow", "Red", "Cyan", "Blue", "Purple"]

def change_all_white():
	for i in range(0, len(colors)):
		colors[i] = "White"

change_all_white()
print(colors)
```

![[Pasted image 20250509161520.png|380]]

Iterate on both index and element value:
```python
# Loop through the list
students = ['Jake', 'Steve', 'Alex', 'Rina']

for i, student in enumerate(students):
	print(i, student)

## Output:
# 0 Jake
# 1 Steve
# 2 Alex
# 3 Rina
```

`while` loop:
```python
dates = [1982, 1980, 1973, 2000]

i = 0
year = dates[0]

while(year != 1973):    
    print(year)
    i += 1
    year = dates[i]
```

---
## Functions
Defining a function:
```python
def function_name():
	pass # Used to for no-operation statement
```

When the number of arguments to be used for a function, they can be packed into a **tuple**:
```python
def printAll(*args): # <-- Dynamic
	print("No of arguments:", len(args))

	for argument in args:
	print(argument)

printAll('Horsefeather','Adonis','Bone') # 3 arguments in output
printAll('Sidecar','Long Island','Mudslide','Carriage') # 4 arguments in output
```
#### Local and Global Variables 
Initialising variables:
```python
Global_var = "This is Global Variable."

def function_name():
	Local_var = "This is Local Variable."

	print(Global_var) # Accessable outside the function
	print(Local_var) # Only accessable inside the function
```

Initialising global variable in the function:
```python
# ERROR PROGRAM
album = "The BodyGuard"
def printer1(album):
    internal_var1 = "Thriller"
    print(album, "is an album")
    
printer1(album)
printer1(internal_var1) # This raises an error
```

The solution to access variable inside the function from entire program:
```python
# SOLUTION PROGRAM
album = "The BodyGuard"

def printer(album):
    global internal_var # <-- initialising as global variable
    internal_var= "Thriller"
    print(album,"is an album")

printer(album) 
printer(internal_var)
```

---
## Common <mark style="background: #FFF3A3A6;">Exceptions</mark> in Python

1. `ZeroDivisionError`: Division by zero is undefined in mathematics, causing an arithmetic error.
```python
result = 10 / 0
print(result) # Raises ZeroDivisionError
```

2. `ValueError`: An error occurs when an inappropriate value is used within the code, such as trying to convert a non-numeric `str` into `int`.
```python
num = int("ABC") # Raises ValueError
```

3. `FileNotFoundError`: Attempting to access a file that doesn't exists.
```python
with open("nonexistent_file.txt", "r") as file:
	content = file.read() # Raises FileNotFoundError
```

4. `AttributeError`: An error occurs when an attribute or method are used incorrectly.
```python
text = "Example"
length = text.countTheLengthLOL() # Raises AttributeError
```

## Handling Exceptions

Python has `try and except` built-in tool to handle and manage exceptions to prevent the program from crashing.

Example of `try-except`:
```python 
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Error: Cannot divide by zero")
```

Example of `try-except-finally`:
```python
A = 1

try:
    B = int(input("Please enter a number to divide A"))
    A = A/B
except ZeroDivisionError:
    print("0 division is undefined")
except ValueError:
    print("Only numbers accepted")
except:
    print("Something went wrong")
else:
    print("success A=",A)
finally:
	print("Process Completed")
```

---
## Classes and Objects
##### Creating a `Class`
First step to create a class is giving a **name**. Then, determine all the data that make up that class, which are **attributes** (as variables).

`__init__` is a **constructor** (special method) used to initialise a the object. The `self` contains all the attributes in the set.  The class parent will always be `object` (for this course).

```python
# Importing a lib for graphical visualisation
import matplotlib.pyplot as plt
  

class Circle(object):

	# Constructor
	def __init__(self, radius=3, color='blue'):
		self.radius = radius
		self.color = color

	# Method
	def add_radius(self, r):
		self.radius = self.radius + r
		return(self.radius)

	# Method
	def drawCircle(self):
		plt.gca().add_patch(plt.Circle((0, 0),radius=self.radius,fc=self.color))
		plt.axis('scaled')
		plt.show()
```

Creating a **Blue Circle**:
```python
# Creating a Blue circle, then, output.
Blue_Circle = Circle(4, "blue")
Blue_Circle.drawCircle()
```

Listing out the object's methods:
```python
print(dir(Blue_Circle))

# Output:
# ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__'...
```

---
## A `TextAnalyzer` practical lab from the module

```python
class TextAnalyzer(object):
    
    def __init__ (self, text):
        # remove punctuation
        formattedText = text.replace('.','').replace('!','').replace('?','').replace(',','')
        
        # make text lowercase
        formattedText = formattedText.lower()
        
        self.fmtText = formattedText
        
    def freqAll(self):        
        # split text into words
        wordList = self.fmtText.split(' ')
        
        # Create dictionary
        freqMap = {}
        for word in set(wordList): # use set to remove duplicates in list
            freqMap[word] = wordList.count(word)
        
        return freqMap
    
    def freqOf(self,word):
        # get frequency map
        freqDict = self.freqAll()
        
        if word in freqDict:
            return freqDict[word]
        else:
            return 0
```

Retrieving the `fmtText` of feedback_1:
```python
feedback_1 = "Your product is good, but there's something I want to suggest? the reliability is good but not enough!"  
analyzed_text = TextAnalyzer(feedback_1)  
  
print(analyzed_text.fmtText)
```