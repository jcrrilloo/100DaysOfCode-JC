// should return 'true' if 'subString' is a part of the 'searchString'
// regardless of upper and lower case 
// 'false' if otherwise

function isSubstring(searchString, subString){
    let lowerSearchStr =  searchString.toLowerCase();
    let lowerSubStr = subString.toLowerCase();

    return lowerSearchStr.indexOf(lowerSubStr)  !== -1;
}

console.log(isSubstring("The cat went to the stoore", "he cat went"));
console.log(isSubstring("Time to program", "time"));
console.log(isSubstring("Jump for joy", "joys"));