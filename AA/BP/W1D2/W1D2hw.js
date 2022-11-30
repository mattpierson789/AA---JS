// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:


function isOdd(num) {
    return num % 2 != 0  
  }


  console.log(isOdd(2));    // => false
  console.log(isOdd(5));    // => true
  console.log(isOdd(-17));  // => true



  function isOdd_2(num) {

return num % 2 == 1 || num % 2 == -1

  }

  console.log(isOdd_2(2));    // => false
  console.log(isOdd_2(5));    // => true
  console.log(isOdd_2(-17));  // => true


  function isEven(num) {

    return num % 2 == 0 

  }
  
  console.log(isEven(2));    // => true
  console.log(isEven(20));    // => true
  console.log(isEven(-17));  // => false




  // Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:


function plusFive(num) {
   return num + 5
}


console.log(plusFive(10));  // => 15
console.log(plusFive(2));   // => 7
console.log(plusFive(-8));  // => -3



// Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
//

function threeOrSeven(num) {

return num % 3 == 0 || num % 7 == 0   

}


// Examples:
 console.log(threeOrSeven(3));   // => true
 console.log(threeOrSeven(42));  // => true
 console.log(threeOrSeven(8));   // => false
//


// Write a function `hello` that takes in a string and prints out "Hello, " followed
// by the string. HINT: this function doesn't need to return anything, it should
// just print using console.log

function hello(str) {

return "Hello, " + str

}

// Examples:
console.log(hello("child"));    // prints "Hello, child"
 console.log(hello("Anthony"));  // prints "Hello, Anthony"


 // Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.

function yell(str) {
  let yell_sent = str.toUpperCase();

  return yell_sent + "!!!"

}

// Examples:
console.log(yell("I want to go to the store")); // => "I WANT TO GO TO THE STORE!!!"
console.log(yell("Time to program")); // => "TIME TO PROGRAM!!!"


function max(num1, num2) {

if (num1 > num2) {
  
  return num1;
  
} else {

return num2

} 

}

console.log (max(3,5))



// Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:

function whisper(str) {

whispered = str.toLowerCase();

return "..." + whispered + "..."

}


console.log(whisper("Hey Anthony")); // => "...hey anthony..."
console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."


// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:

function isSubstring(searchString, subString) {

let lowerSearch = searchString.toLowerCase();
let lowerSub = subString.toLowerCase();

return lowerSearch.indexOf(lowerSub) > -1

}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false




// Write a function `echo` that takes in a string and returns that string "echo-ized".

function echo(str) {

let str_upcase = str.toLowerCase();
let str_lowcase = str.toUpperCase();

return str_upcase + "! ..." + str + "! ..." + str_lowcase + "!"

}


// Examples:
console.log(echo("Mom!")); // => "MOM! ... Mom! ... mom!"
console.log(echo("hey")); // => "HEY ... hey ... hey"
console.log(echo("JUMp")); // => "JUMP ... JUMp ... jump"



