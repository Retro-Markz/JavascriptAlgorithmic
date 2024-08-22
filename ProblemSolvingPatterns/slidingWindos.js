//this pattern involves creating a window which can eiter be an array ir number from one position to another
//depending on certain  condition, the windoweither increses or closes (and new window is created)
//very useful for keeping track of subset of data in an array/string

"Hellothere"; //lother is the largers non secuencial string part

//write a function called maxSubarraySum which accepts an array of integers
//and a number called n. the function should calculate the maximum sum of n
//consecutive elements in the array

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([2, 3, 5, 6, 7, 6, 6, 7, 6, 9, 9], 3));
