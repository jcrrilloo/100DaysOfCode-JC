/**
 * 
 *  Write a  progrram that checks if a number
 * is even or odd
 */
console.log("Excercise 1: Even or Odd Number");
console.log("---------------------");
function evenOdd(num){
    if(num % 2 === 0){
        return "Even Number";
    } else {
        return "Odd Number";
    }
}
console.log(evenOdd(120));
console.log(evenOdd(17));
console.log("---------------------");
console.log("Excercise 2: ");

function greaterNum(num1,num2){
    if (num1 > num2){
        return "Your number is greater than: " + num2;
    } else {
        return "Your numberr is greater than: " + num1;
    }
}
console.log(greaterNum(100,10));
console.log(greaterNum(1,46));

console.log("---------------------");

/**
 * Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”)
 */

function transformGrade(num){
    if(num > 90) {
        return "A";
    } else if( num > 80) {
        return "B";
    } else if(num > 70){
        return "C";
    } else if(num > 60){
        return "D";
    } else {
        return "F";
    }
}
console.log(transformGrade(100));
console.log(transformGrade(50));
console.log(transformGrade(75));

/**
 * Write a program that calculates the ticket price based on age with the following conditions: 
 * age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20
 * , age over 60 play a ticket price of 15.
 */

/**
 * 
 * Objective:  calculates ticket price based on age
 * Conditions: 
 * 1. Age < 12 , pay ticket price of $5
 * 2. Age < 18 , pay ticket price of $10
 * 3. Age < 60 , pay tickeet price of $20
 * 4. Age > 60 , pay ticket price of $15
 */

function ticketPrice(age){
    
    if(age < 12){
        return "You pay $5";
    } else if(age < 18){
        return "You pay $18";
    } else if(age < 60){
        return "You page $20";
    } else {
        return "Ticket : $15"
    }
}
console.log(ticketPrice(5));
console.log(ticketPrice(100));
console.log(ticketPrice(15));

console.log("---------------------");

    
