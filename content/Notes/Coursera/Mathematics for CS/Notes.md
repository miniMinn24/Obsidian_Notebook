# Mathematics for Computer Science
The key concepts of sequences, series, and the principle of mathematical induction taught by **Coursera**.

## Sequences
The **sequence** is a collection of numbers that follows a pattern. For examples:
Generating even numbers: $U_n = 2n$
	First term: $U_1 = 2(1) = 2$
	*2, 4, 6, 8...*
Generating odd numbers: $u_n = 2n-1$
	Third term: $U_{3} = 2(3) - 1 = 5$
	*1, 3, 5, 7...*

Other sequence examples:
$U_{n} = n^{2}$
	Fourth term: $U_{4} = 4^{2} = 16$
	*1, 4, 9, 16...*
$U_{n} = n^{2} - n + 1$
	Third term: $U_{3} = 3^{2} - 3 + 1 = 7$
	*1, 3, 7, 13...*

---
#### Defining an Arithmetic Sequence
The **arithmetic sequence** is the sequence where the common difference remains constant between any two successive terms. And it's entirely defined by **two things**:
- The **first term**, we always call that $a$
	$U_{1} = a$ 
	
	so if $a = 3, d = 4$
	$U_{1} = a = 3$

- The **common difference**
	$difference= d$, it is the difference number in a list

##### How to find a and d when the question asks you to calculate for "1,3,5,... find 8th term"?
so for example *1,3,5,7,9,...*, $a$ is 1 (base), $d$ is 2. To find the $U_{8}$ term:
	$U_{8} = 1+(8-1)2 = 15$

The *pattern*:
	First term: $U_1 = a$
	Second term: $U_2 = a + d$
	Third term: $U_3 = a +(n-1)d$
	Forth term: $U_{4} = a + (n - 1)d$
	and so on... 
	*you will see why the first 1st and 2nd terms always wrote like that as you calculate on the paper... 
	(because it's easier for the questions to solve the problems in the beginning)*

**Arithmetic Sequence**, the $n^{th}$ term is always given by:
$$ U_{n} = a + (n-1)d $$
##### Arithmetic Sequence Example
Generating a sequence of **arithmetic sequence** by $a=3$, $d=-4$.
The sequence: *3, -1, -5, -9, -13...*

---
#### Defining a Geometric Sequence
Rather than adding the same amount every time the **geometric sequence** multiply by the same amount every time.
We use $a$ and $r$ (common ratio), not $d$ (common difference) anymore.
*Terms*: $a, ar, ar^{2}\dots$

**Geometric Sequence**, the $n^{th}$ term is always given by:
$$U_{n} = ar^{(n-1)}$$
##### Geometric Sequence Example
Generating a sequence of **geometric sequence** by a = $1$, r = $2$
	The sequence: *1, 2, 4, 8, 16, 32...*

---
## Divergent Series
if $r>1$, it must be <mark style="background: #ABF7F7A6;">divergent series</mark> as it goes infinite. For example, think of $1.00001$ and you keep multiplying it. As it seems, it can be continued to infinity.

*limit* $n \to \infty$
$U_{1} \to \infty$

## Convergent Series
Take the sequence $U_n = 1.$ That is, the sequence which goes $1, 1, 1, 1, ...$ It is a convergent sequence, its *limit is 1*.

This is **convergent**:
*limit* $n \to \infty$        $\left( \frac{1}{2} \right)^{n} \to 0$ 

And, this is **divergent**:
*limit* $n \to \infty$        $(2)^{2} \to \infty$

---
## Recursion
**Recursion** is when a function calls itself and build up a sequence of numbers based on using that function repetitively. 

##### Example
The example formula is given as follows: $$U_{n} = n\times U_{n-1}$$
1. $U_{1} = 1$
2. $U_{2} = 2\times 1 = 2$
3. $U_{3} = 3\times 2 = 6$
4. $U_{4} = 4\times 6 = 24$
5. $U_{5} = 5\times 24 = 120$
6. ...

### Fibonacci Sequence
**Fibonacci sequence** is one of examples that is used in **recursions**.

The course defined: $$U_(n+2) = U_(n+1) + U_{n}$$
It's originally defined as: $$F(n) = F(n-1) + F(n-2)$$
**Mine** defined: $$U_{n} = U_{n-1} + U_{n-2}$$
The **Fibonacci Sequence:** $$0, 1, 1, 2, 3, 5, 8, 13, 21, 34, \dots$$
#### Golden Ratio
*limit:* $n\to \infty$
$$\frac{U_{n+1}}{U_{n}} \to \frac{{1+\sqrt{5}}}{2}$$
> [!TIP] Sequences in the Tests
> In the questions, sequences can be customised and they'll ask for the $n^{th}$ term, like this:
> Question 1, if $U_{n} = U_{n-1}\times U_{n-2}$, find $U_{6} = ?$.

---
## Series
Think of generating natural numbers $U_{n}  = n$, and it goes like this *1,2,3,4,...*
Assume we want to find the **sum** of these numbers and it's simple: $S_{n} = S_{n-1} + n$

Before that we want to **sum** for the first 4 numbers in this series, the **Sigma Notation** is used to represent the sum of a series of terms. $$\sum_{k=1}^{n}{k} = \left( \frac{1}{2}n \right)(n+1) $$
In **sigma notation** $\sum_{k=1}^{n}{k}$
1. The number below $k=1$ represents the <mark style="background: #ADCCFFA6;">starting index</mark> of the series.
2. The number at the top $n$ represents the <mark style="background: #ADCCFFA6;">ending index</mark> of the series.
3. $k$ represents how much number you will be summing each numbers between the starting index and ending index of the series.

In the right-hand side $\left( \frac{1}{2}n \right)(n+1)$
- It just shows the summation that can be also be calculated in this way on the paper.

---
## Mathematical Induction
The purpose of **mathematical induction** is a method used to prove that a statement holds **true** for all natural numbers. There're two important things:
- **Base Case**: Prove the statement is true for the **first term** (usually $n=0$ or $n=1$).
- **Inductive Step**: Assume the statement is true for $n=k$ (*inductive hypothesis*), and then prove it’s also true for $n=k+1$.

In CS, **inductive proofs** are used to prove that the recursive algorithms work correctly.

> [!TIP] It's just like "Domino Tiles"
> you have a set of domino tiles, to make sure all the tiles fall down, you first have to knock the first one. Assume some domino tiles in the middle of a set, $k$ and $k+1$. If you knock the tile $k$ to fall down, this falling down will knock also the tile $k+1$.


Previously, we use this for a summation of natural numbers: $$S_{n} = \left( \frac{1}{2}n \right)(n+1)$$
Seeing if it's **true** for $n=1$:
$S_{1} = \frac{1}{2}1(1+1)=1$        Which is **true**

Assume if it's **true** for $n=k$:
$S_{k} = \frac{1}{2}k(k+1)$

Remember, if this current one is true, you have to prove the next is also true, so, $n = k+1$
$$S_{k+1} = S_{k}+(k+1)$$
Now, let's prove it step by step $S_{k+1} = \frac{1}{2}k(k+1)+(k+1)$:
1. $S_{k+1} = \frac{1}{2}k(k+1)+\frac{2(k+1)}{2}$
2. $S_{k+1} = \frac{1}{2}[k(k+1)+{2(k+1)}]$
3. $S_{k+1} = \frac{1}{2}(k^2+k+2k+2)$
4. $S_{k+1} = \frac{1}{2}(k^2+3k+2)$
5. $S_{k+1} = \frac{1}{2}(k+1)(k+2)$

***Therefore, the formula holds true for $n=k+1$***

##### An Algebra Skill You Need to Remember
When you prove the statements by calculating expressions, you may need **Quadratic Factoring**.
Think of $x^2 + 3x - 28 = 0$:

1. Think of how can you get that $-28$ by **multiplying** some numbers. So in this case, $7\times -4 = -28$.
2. Then, think of how can you get $3x$ after multiplying. So now, add them $7-4 = 3$.
3. All good now, we will use $7\times -4$.
4. So, the answer will be:
	$(x-4)(x+7)=0$, and will switch numbers to find the value of $x$.
	$x=4$ and $x=-7$, remember you get **opposite** value when you switch over the equal.

The simplified explanation: $$x^2+3x-28=0$$
The answer: $$(x-4)(x+7)=0$$

