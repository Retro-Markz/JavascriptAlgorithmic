//make a function that cunt how many times a char repeats in a string, make ir alphanumeric only

/*
function charCount(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

*/

//create a function that recives a string
//create an empry array
//create a for loop whit the total length or the recived string
//make a if-else, first, taking apart the characters to test (/[a-z0-9]/) and run a logic
//the logic goes, if the char is > than 0 then increment
//else, if the char is just 1, mantain in 1
//return the obj

//refactor, not for performance but for style

function charCount(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

//in order to check performance, can use alphanumeric instead of regular expresion (regexp), but cheking out, it works
//diferent in diferent enviroments, so, it's a good idea to check perfomrmance in the particular case of use for
//this refactor

//add this function and then replace the function for the regExp en the original func

function isAlphaNumeric(str) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
}

console.log(isAlphaNumeric("hello"));

console.log(charCount("hello World, here i come"));
