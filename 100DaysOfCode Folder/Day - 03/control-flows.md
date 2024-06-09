# Control Flows - App Academy Bootcamp
* what  is control flows: 
-  control flow : is the order in which  instructions are executed within a program. 
- you can modify the control flow using 'control structures' which are expressions that alter the control flow based ono given parameteers.  
- these control structures within JS allow the program flow to change  within a unit of code or a function
- the one of the two main control structures are :
1. Conditional statements.
- conditional statements cover , 'if' , 'else if', 'if...else'

**Mutually Exclusive Conditions**
* take away from 'mutually exclusive conditions' is that in JS these are conditions that cannot be true at the same time. 
- ex: 'is a cat' and 'is a dog' are mutually exclusive statements because an animal cannot be both a cat and a dog at the same time.
**String.indexOf();** 
- indexOf() is a method of 'String' type.
- what it does? is it values searches the string and returns the index of the first occurence of the specificed substring. 
- to break the above. 
* indexOf() function helps you find where a word starts in a sentence and returns the index of where that position is.

## Loops && Iterations
*  What are loops : 
- a quick and easy way tto do something repeatedly. You can use different iteration statements tto accomplish loops in JS
* Ex: yoou tell the loop to take 'x' steps and then 'y' steps  in anotherr/ 
* Ex: the statement: "go five steps to the east" could look like this
``` 
for(let step = 0; step < 5; step++>){
    // runs 5 times, with values of step [0] through [4]
    console.log("walking east one step);
}
// for(initialization; condition; afterthough)
    statement
```
* loops repeat  an  action some numbeer of times
* the different loop mechanisms offer different ways to deterrmine the  start and end points of the loop. 
* some loops are betters than others depending on the situation
## Statements for loops provided in JavaScript
1. for statement
2. do...while statementtt
3. while statement 
4. labeled statement
5. break statement
6. continue statementt
7. for..in statement
8. for..of statement

## for statement
* 'for loop' repeats until a specified condition evaluattes to false. 
* Ex. 
```
for (initialization; condition; afterthought)
  statement
```
* What happens in a 'for loop'
1. the ***initializing expressions***, if any, is executed. 
- this process initialized one or more 'loop' counters but it can express any complexities and also declare a variaable. 
2. the **condition expression** is then evaluated next. if the value of the condition is true, then that statement will execute. Otherwise the 'for' loop will end/terminate. 
- omitted conditions are assumed to be true
3. the ***statement*** executes. In order to execute a multiple statements, use block statementts , ex: ({ }) to group the statements
4. if present, the update expression 'afterthought' will execute
5. **control** returns step 2

## while..loops
* **NOTE**: you will always loop through something until a condition is met. We start at index[0] always
* Analogy: running a race track. if you wanted to loop through 

## Arrays

## if...elsee

An 'if...else' statement executes as a 'statement' if a specified condition is 'truthy'. "if" the condition is falsy, another satement in the optional 'else' clause will be executed

ex. if [your age] is  greater than 18 [print a adult] 
    else [print a kid]

# Syntax - JS
``` 
if(condition)
    statement1

// with an else clause 
if(condition)
    statement1
        else 
        statment2

```
* Condition: is the expression that is considered to be either 'truthy' or 'falsy'

Statement1: 
    Statement that is executeed 'if' the condition is 'truthy'. It can be any statement

    Including further nested 'if' statements. To execute multiple statements, use a 'block' statement to group those statements. to execute no statements, us an empy statement 

* Block statement: 
is used to group zero or morer statements. The block is delimiteed by a pair of curcly braces and contains a list of zero or more statements  and declarations. 

Ex: 
``` 

var x = 1;
let y = 1;

if(true){           /// this is  a block statement 
    var x = 2;
    let y = 2;
}
console.log(y); // prints  2
console.log(x); // prints out 1 
```

* Block statement can also be called the 'compound' statemennt in other languages. It allows you  to usee multiple statements where JS expects only one statement.

* Combining statements  into blocks is a common practice in JS. Especially when associated with 'control flow statements' such as 'if..else' and 'for' loops. 

**NOTE** blocks can prevent temporary variables from polutting the global namespace. 
**GLOBAl NAMESPACE** : is the space where your variables, functions and objects are defined outside* of any function, class or block. So  not within that block

# Multiple if..else statements

* if..else statements can be nested to creaate an 'if-else' clause.

Ex. 
``` 
if(condition1)
    statement1
    else if(condition2)
        statement2
        else if(condition3)
            statement3
            // else 
                statementN