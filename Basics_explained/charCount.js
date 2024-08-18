//make a function that cunt how many times a char repeats in a string, make ir alphanumeric only

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

console.log(charCount("hello World, here i come"));

//create a function that recives a string
//create an empry array
//create a for loop whit the total length or the recived string
//make a if-else, first, taking apart the characters to test (/[a-z0-9]/) and run a logic
//the logic goes, if the char is > than 0 then increment
//else, if the char is just 1, mantain in 1
//return the obj
