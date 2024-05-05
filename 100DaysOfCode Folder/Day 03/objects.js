/**
 * === OBJECTS IN JAVASCRIPT ===
 */

// Objects: 
// the 'person' is an object
const person = {
    firstName: "Captain", // the items below: are the objects properties 
    lastName: "America",
    age: 30,
    isAvenger: true,
}
/**
 * when accessing an ojects property you want to use the 'dot' operator to call the 
 * property you are wanting to access. 
 * 
 * In the console.log we are calling the person{} function and accessing the 'firstName' propert of that object
 */
console.log(person.firstName);

// Ex. of a function with properties and methods 
const person2 = {
    name: ["Joseph", "Carrillo"],
    age: 26,
    bio: function () {
        console.log((`${this.name[0]} ${this.name[1]} is ${this.age} years old.`));
    }, 
    introduceSelf: function(){
        console.log(`Hi! I'm ${this.name[0]}.`);
    }, 
};