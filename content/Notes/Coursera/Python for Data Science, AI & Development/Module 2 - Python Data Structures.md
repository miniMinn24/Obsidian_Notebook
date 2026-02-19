# Module 2: Python Data Structures

## About Lists and Tuples
A basic data structure and the methods commonly used in Python.
##### Tuples
An ordered sequence and immutable (fixed pair of data values).
```python
tup = ("Code", 10, 2.4)
tup_2 = ("Python", 2)

print(tup + tup_2) # Output: ('Code', 10, 2.4, 'Python', 2)
print(tup[1:3]) # Output: (10, 2.4)


# Nested tuple
tup = (12, 23, 36, 20, 51, 40, (200, 240, 100))

print(tup[6][0]) # Output: 200
```
##### Lists
Essentially used in python data structures and they are mutable.
```python
# Append method
lt = ["Code", 10, 2.4]
lt.append(["Python", 2]) # adding to the list as a single element

print(lt) # Output: ['Code', 10, 2.4, ['Python', 2]]

# Extend method
lt = ["Code", 10, 2.4]
lt.extend(["Python", 2]) # adding to the list one or multiple elements

print(lt) # Output: ['Code', 10, 2.4, 'Python', 2]


## Modifying Lists
lt = ["Code", 10, 2.4]

lt[0] = "Python" # Output: ["Python", 10, 2.4]
del(lt[2]) # Output: ["Python", 10]

## Converting string to list
data_seq = "Mike,12,2000"
list_seq = data_seq.split(',')

print(list_seq) # Output: ['Mike', '12', '2000']
```

### Methods used in Python Data Structure
##### `strip()`
It used to remove **leading** and **trailing** characters from a string.
```python
my_string = "--Hello World--"

print(my_string.strip("-")) # Output: Hello World
```

##### `copy()`
A method used to create a shallow copy of a list.
```python
my_list = [1, 2, 3, 4, 5]
new_list = my_list.copy() print(new_list)

# Output: [1, 2, 3, 4, 5]
```
##### `insert()`
Inserting an element in specific order.
```python
my_list = [1, 2, 3, 4, 5]
my_list.insert(2, 6)

# Output: [1, 2, 6, 3, 4, 5]
```

##### `pop()`
A method used to remove the element at the specified index.
```python
my_list = [10, 20, 30, 40, 50]
removed_element = my_list.pop() # Removes and returns the last element
print(removed_element)
# Output: 50

print(my_list) # Output: [10, 20, 30, 40]
```

##### `remove()`
A method used to removes the specified value in the list.
```python
my_list = [10, 20, 30, 40, 50]
my_list.remove(30) # Removes the element 30

print(my_list) # Output: [10, 20, 40, 50]
```

##### `reverse()`
A method used to reverse the order of elements in a list.
```python
my_list = [1, 2, 3, 4, 5]
my_list.reverse()

print(my_list) # Output: [5, 4, 3, 2, 1]
```

##### `sort()`
A method used to sort elements in the list.
```python
my_list = [5, 2, 8, 1, 9]
my_list.sort(reverse=True)

print(my_list) # Output: [9, 8, 5, 2, 1]
```

## Dictionaries
A dictionary consists of keys and values. It is helpful to compare a dictionary to a list. Instead of being indexed numerically like a list, dictionaries have keys. These keys are the keys that are used to access values within a dictionary.

> [!TIP] Example
> The best example of a dictionary can be accessing person's detais using the **social security number**.  
> Here the social security number which is a unique number will be the **key** and the details of the people will be the **values** associated with it.

Dictionaries in Python are an unordered, mutable, and indexed collection where each key is unique and maps to a value. Keys can only be strings, numbers, or tuples, but values can be any data type.

##### Creating a Dictionary
```python
Dict = {"key1": 1, "key2": "2", "key3": [3, 3], "key4": (4, 4), ('key5'): 5}
```
##### Modification:
```python
Dict.update({key: value}) # Add another key-value pair

Dict.clear() # Removing all key-value pairs

# Removing specific key-value pair
Dict.pop({key})
del Dict[key]
```
##### Retrieving: 
```python
Dict.keys() # Get all the keys in dictionary
Dict.values() # Get all the values in dictionary

list(Dict.keys()) # Dictionary as a list
Dict.copy() # Create a shallow copy

# Retrieves all key-value pairs as tuples and converts them into a list of tuples.
items_list
```

##### Verifying
```python
# Verify the key is in the dictionary
if 1 in Dict.values():
	...

if "Key1" in Dict.keys():
	...
```

## Sets
A set is an unordered collection of unique elements.
```python
set1 = {1,2,3,4,5,6,8,7,6,5,3,2,1,1}
print(set1) # Output: {1, 2, 3, 4, 5, 6, 7, 8}

set1.add(1) # Output still the same
set1.remove(1) # Output: {2, 3, 4, 5, 6, 7, 8}

# Verify an element in the set
1 in set1 # True
```

Set logic operations:
```python
set1 = {1,2,3,4,5}
set2 = {4,5,6,7,8}

intersection = set1.intersection(set2) # Output: {4,5}
difference = set1.difference(set2) # Output: {1,2,3}
union = set1.union(set2) # Output: {1,2,3,4,5,6,7,8}
```

`superset` and `subset`:

![[Pasted image 20250508233027.png|300]]

```python
set1 = {1,2,3,4,5}
set2 = {4,5}

issupertset = set1.issuperset(set2) # Output: True
issubset = set2.subset(set1) # Output: True
```