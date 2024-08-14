// "eye"
//

function palindrome(str) {
  let front = 0;
  let back = str.length - 1;

  while (back > front) {
    //increment
    while (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }
    //decrement
    while (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }
    //do the comparison
    if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
    front++;
    back--;
  }
  //if fralse. then is a palindrome
  return true;
}

console.log(palindrome("eye"));
console.log(palindrome("salas"));
console.log(palindrome("casa"));
