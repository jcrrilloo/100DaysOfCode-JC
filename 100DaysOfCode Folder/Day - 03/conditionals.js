// if statements 

// Basic if..else syntax
/**
 * if(condition){
 * 
 * } else {
 * 
 * }
 * 
 *  
if(3 === 3 ){

console.log("true");
}

// the if statement breaks down and should be easily readable
/**
 * if the condition returns 'true' run code 'A' else run code 'B'
 */

/**
 * 
 * let shoppingDone = false;
    let childsAllowance; 

if(shoppingDone === true){
    childsAllowance = 10;
} else {
    childsAllowance = 5;
}
 * 
 */

// Ternarny Operator example: HTML Code
/**
 * 
 * <label for="theme">Select theme: </label>
    <select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
    </select>

    <h1>This is my website</h1>

 */

   /**
    * 
    * 
    * const select = document.querySelector("select");
    const html = document.querySelector("html");
    document.body.style.padding = "10px";

    function update(bgColor, textColor){
        html.style.backgroundColor = bgColor;
        html.style.color = textColor;
    }

    select.addEventListener("change", () =>
        select.value === "black";
            ? update("black", "white")
            : update("white", "black")
    ) 
    */
    
// What Numbers Bigger
/**
 * 
 * function greaterNum(num1,num2){
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}
console.log(greaterNum(2,10));
 * 
 **/

/**
 *  function helloWorld(lang){
    if(lang === "es"){
        return "Hola, Mundo";
    } else {
        return "Hello, World";
    }
}
console.log(helloWorld("es"));
console.log(helloWorld("fr"));
 */


/**
 * 
 * function assignGrade(numScore){
    if(numScore === 100){
        return "Grade: A"
    } else if( numScore <= ){
        return "Grade: B"
    } else if(numScore >= 79){
        return "Grade: C";
    } else if(numScore >= 69){
        return "Grade: D";
    } else {
        return "Grade: F";
    }
}

console.log(assignGrade(92));
 */

/**
 * 
 * function assignGrade(numScore){
    if(numScore > 90){
        return "A";
    } else if(numScore > 80){
        return "B";
    } else if(numScore > 70){
        return "C";
    } else if(numScore > 60){
        return "D";
    } else {
        return "F";
    }
}

console.log("Your grade: "+assignGrade(92));
console.log("Your grade: " +assignGrade(61));

 * 
 * */

function greaterNum(num1, num2) {
    if(num1 > num2){
        return num1;
    } else{
        return num2;
    }
}
console.log("The greater number is: " + greaterNum(100, 2));


function helloWorld(lang){
    if(lang === "en"){
        return "English";
    } else if(lang === "fr"){
        return "French"
    } else{
        return "Spanish";
    }
}
console.log(helloWorld("en"));
console.log(helloWorld("fr"));
console.log(helloWorld("yo"));

