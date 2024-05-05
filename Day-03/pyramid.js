/**
 * === LEARN INTRO JS BY BUILDING A PYRAMID GENERATOR === 
 * 
 * JavaScript is a powerful scripting language that you can use to make web pages interactive. It's one of the core technologies of the web, along with HTML and CSS. All modern browsers support JavaScript.

In this practice project, you'll learn fundamental programming concepts in JavaScript by coding your own Pyramid Generator. You'll learn how to work with arrays, strings, functions, loops, if/else statements, and more.
 */

const character = "!";
const count = 8;
const rows = [];
let inverted = false;

function padRow(rowsNumber, rowsCount){
    return " ".repeat(rowsCount - rowsNumber) 
    + character.repeat(2 * rowsNumber -1) + " ".repeat(rowsCount - rowsNumber);
}

for(let i = 1; i <= count; i++){
    if(inverted){
        rows.unshift(padRow(i,count));
    } else {
        rows.push(padRow(i, count));
    }
}

let result = " ";

for (const row of rows){
    result = result + "\n" + row;
}

console.log(result);