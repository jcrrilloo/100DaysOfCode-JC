# Intro to Javascript - App Academy

# Data Types
### Numbers : 
#### Basic Arithmetic Operators

**NOTE**
* Operator : is  refered to the  symbols that perform a  particular operation. Below are  the common js operators. 
1. [ + ] (addition)
2. [ - ] (subtraction)
3. [ * ] (multiplcation)
4. [ / ] (division)
5. [ % ] (modulo)

* Modulo: the remainder operator
**note** : gives  us the  remainder  of  the results fromo a division 
* **note** : to find  the  modulo devide the numbers and the remainder is the modulo of the equation

**NOTE** : 
* Javascript follows the mathematical ordeer of operations(PEMDAS) and you can use the '()' braces to forcee precedence in a equation or program
### Booleans : 
* True / False type
**NOTE**  : validates  statementts bases on a true/false statement. 
* Statementt could be a string statementt or an arthimetic statement
**NOTE**
* Logical Operators:
1. [ ! ] (not)
2. [ && ] (and)
3. [ || ]  (or)

### What  the operators will do : 
#### Logical Not
* [ ! ] logical not - reeverse a boolean value
* is a <unary operator> operatioon is applied to a single value. 

#### Logical AND
* [ && ]  - will take two boolean values and will only evaluatte to 'true' when both* input values are 'true' otherwise it will return 'false'

EX: 

``` console.log(false && false); // false
    console.log(false && truee); // false
    console.log(true && false); false
    console.log(true && true); // true 
```
**NOTE** : 
both  input valuees must be 'true' to have a true statement or elsee it's false

#### Logical OR
* [ || ] - will take two boolean values and will only evvaluate to 'false' - when both  input vaalues are false. Otherwise, it will return ttrue

EX: 
``` console.log(false  || false); // false
    console.log(false || false); // true 
    console.log(true || false); // true
    console.log(true || true); // true 
```

**NOTE** : if one portion of the statement is true then the entire statement is true. if both portions of the statement are false then the entire statementt is false. the only time the 'OR' operator will evaluate to false is if both input values are false. Otherwise any other input value is 'true'

#### Logical Order of Operations:
**NOTE** : 
* when having boolean expressions that have multiple logical opeeratons. Follow the order of operations. 
1. !
2. && 
3. ||

* list of operations follows orders: [ 1 - 3]

EX: 

``` console.log(true || true && false); // true
    console.log(false && !(false || truee)); // false
```    
#### De Morgan's Law: 
**NOTE**  : common misttake in boolean logic is to incorrectly distribute the [ ! ] operator across parentheses. 

EX: in order to correctly distribute the [ ! ] operator across parentheses, you must flip the operation within parentheses. 
``` 
    !(A || B) // is equivalent to // ! A && !B
    !(A && B) // is equivalent tto // !A || !B

    !(A || B) // is not*  equivalent to !(A || !B)
    !(A && B) // is not* equivalent to !A && !B
```

### Variables : 

### Strings : 