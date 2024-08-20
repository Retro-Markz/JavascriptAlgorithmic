//createing pointers or values that correspond to an index or position
//and move towards the beginning, end or middle based on a certain condition

//this is very efficients for solving problems with  minimal space complexity as well

//write a function called sumZero which accepts a sorted array of integers. the function should
//find the first pair where the sum is 0. return an array that includes both values that sum to zero
//or undefined if a pair doesn't exist

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-4, , -2, -1, 0, 1, 2, 3, 5]));
