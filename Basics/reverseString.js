// "hello"
// "howdy"
// "greetings from heart"

/*
function reverseString(str) {
  str = str.split("");
  str = str.reverse("");
  str = str.join("");

  return str;
 }

//2nd solution

 function reverseString(str) {
   var newStr = "";
   for (var i = str.length - 1; i >= 0; i--) {
     newStr += str[i];
   }

   return newStr;
 }

//3rd solution



function reverseString(str) {
  var rev = "";
  str.split("");
  for (var i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  return rev;
}

*/

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("howdy"));
console.log(reverseString("greetings from heart"));
