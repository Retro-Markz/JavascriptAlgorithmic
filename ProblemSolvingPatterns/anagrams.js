//PROBLEM STATEMENT:
//given two strings, write a function to determine if the second string is an anagram of the first.
//an anagram is a word, phrase, or name formed by arranging the letters of another, such as cinema formed from iceman

//trying to solve it with the frecuency counter pattern

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    //if letter exist, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    //can't find letter or letter is zero then it isn't anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("hello", "hallo"));
console.log(validAnagram("taxidermy", "mytaxider"));
