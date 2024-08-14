//basic

/*
function repeatStringNumTimes(str, num) {
  if (num > 0) {
    return str.repeat(num);
  }
  return "";
}


//intermediate

function repeatStringNumTimes(str, num) {
  if (num < 0) return "";
  if (num === 1) return str;
  else return str + repeatStringNumTimes(str, num - 1);
}
*/

//advanced

function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

console.log(repeatStringNumTimes("candy apple", -1));
console.log(repeatStringNumTimes("candy apple", 4));
