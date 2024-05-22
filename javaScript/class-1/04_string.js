// String
let name1 = "Saswat";
let name2 = "Kumar"
let name3 = "Mohapatra"


let sentence = "He is a good boy"; // 16 char

// empty string "" " "
console.log(name1 + " " + name2 + " " + name3 + "\n" + sentence);

// charAt() : function
// It returns the character at the specified index in a string.

console.log(sentence.charAt(14)); // e

// length
console.log(sentence.length); // 16

let lengthCheck =
  "   Lorem  ipsum dolor sit amet consectetur adipisicing elit. Doloribus at rerum ea minus nulla itaque ab vero ad asperiores exercitationem    ";
console.log(lengthCheck.length); // 134

// split()
// console.log(sentence.split(" "));
console.log(sentence.toUpperCase()); // HE IS A GOOD BOY
console.log(lengthCheck);
console.log(lengthCheck.trim());
console.log(lengthCheck);



// task:1
// use all the string methods to demonstrate all the properties  with  example

//example 
// let sentence = "He is a good boy"; // 16 char

console.log(sentence.includes("is"));


//tsk-2 = 
//Declar a sentence and include your name is in that and check wheather your name is present or not using "include " method
