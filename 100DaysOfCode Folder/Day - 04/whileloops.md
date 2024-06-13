# While loops 
#### Syntax: 
``` while (condition)
    statement 
```
### Condition:
* the expression evaluated 'before' each pass through the loop
- if this condition evaluates to true, 'statement' is executed.
- when condition 'evaluates to false' execution continues with the statement after the 'while' loop

### Statement:
* a stateement that is executed is executed as long as the condition evaluates to true. 
* you can use 'block statements' to execute multiple statements using 'while loops'

**you can use 'control flow statements' inside** 
**EX:** 
- break: stops 'statement' execution and goes to the first statement after the loop
- continue: stops 'statement' execution and re-evaluates 'condition'

``` 
let n = 0;
let x = 0;

while( n < 3 ){
    n++;
     x += n;
}
```
* my explanation : // incrementing 'n'
// for 'x' incrementing the value of '1' and passing it to 'x'
// second pass ' n' is 2 & we are adding that value to 'x' whic is '1' which is now '3'
// the third pass we we add another '1' to our value of 'n' which is 3 and we add it to our value of 'x' which is '3' add those together and it gives us '6'
// console. should be : n is 3 && x is 6