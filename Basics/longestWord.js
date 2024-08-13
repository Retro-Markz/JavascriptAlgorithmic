//The quick brown fox jumped over the lazy dog
// "lets try with a really super long word such as otorhinolaringology"

// BASIC SOLUTION
// function findLongestWord(str) {
//   var words = str.split(" ");
//   var maxLength = 0;
//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//     }
//   }
//   return maxLength;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(
//   findLongestWord(
//     "lets try with a really super long word such as otorhinolaringology"
//   )
// );

//INTERMEDIATE SOLUTION

// function findLongestWord(str) {
//   return str.split(" ").reduce(function (x, y) {
//     return Math.max(x, y.length);
//   }, 0);
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(
//   findLongestWord(
//     "lets try with a really super long word such as otorhinolaringology"
//   )
// );

//ADVANCED SOLUTION

function findLongestWord(str) {
  str = str.split(" ");

  if (str.length == 1) {
    return str[0].length;
  }
  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
    return findLongestWord(str.join(" "));
  }
  if (str[0].length <= str[1].length) {
    return findLongestWord(str.slice(1, str.length).join(" "));
  }
  return str.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(
  findLongestWord(
    "lets try with a really super long word such as otorhinolaringology"
  )
);
