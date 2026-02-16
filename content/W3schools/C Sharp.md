# C# Programming Basics
## Programming on Linux
Create a project folder first:
```bash
mkdir -p Console_App
cd Console_App
```

Generate essential files:
```bash
# generate project files
dotnet new console -o ./ -n Console_Name

# build and compile program to execute
dotnet build; dotnet run
```

## Syntax
```C#
using System;

namespace HelloMom
{
	class Program
	{
		static void Main(string[] args)
		{
			// Programming starts here
			Console.WriteLine("Hello Mom!")
		}
	}
}
```

1. `using System`: we use classes from `System` namespace, where `Console` is a class of `System` and uses `WriteLine()` method to output texts.
2. `namespace` is used to organise the code, and it is a container for **classes** and other **namespaces**.
3. `class` is a container for data and methods, which brings functionality to the program. Codes that runs in **C#** must be inside a class (above example: `class Program`).
4. `Main` is the method that always seen in **C#** programs that any code inside its curly brackets `{}` will be executed.

## Data Types
```C#
int num = 10; // Whole integer
float num = 10.1234567F; // 6-7 decimal digits
double num = 10.123456789D; // 15 decimal digits
long num = 15000000000L; // Stores large numbers

char character = 'A'; // Only 1 character
string text = 'Hello Mom!'; // sequence of chars
bool status = true; // Boolean
```

## Maths
```C#
// Maximum and Minimum
int x = 10;
int y = 4;
Math.Max(x, y); // Maximum: x
Math.Min(x, y); // Minimum: y

Math.Sqrt(4); // Square Root: 2
Math.Abs(-4.5); // Absolute Positive: 4.5
Math.Round(9.9) // Round to nearest whole number: 10
```