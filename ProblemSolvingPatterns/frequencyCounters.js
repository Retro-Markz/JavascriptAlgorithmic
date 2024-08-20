//this patttern uses objects or sets to collect values/frequencies of values
//this can often avoid the need for nested lops or O(n^2) operations with arrays/strings

//examples

/*
Write a function called same, wich accepts two arrays.
the function should return true if every value in the array has it's corresponding 
value squared in the second array.
the frecuency of the values must be the same
*/

//first see the 'not the best slution for this case', for the complexity O(n^2), but is the fastest way to
//get the solution

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

let t1 = performance.now();
console.log(same([1, 2, 3], [1, 4, 9]));
let t2 = performance.now();
console.log(`time elapsed: ${(t2 - t1) / 1000} seconds`);

//time elapsed in proces is about 0.0013~0.009

//refactores for a mor destructured solution but with O(n) complexity

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequency1 = {};
  let frequency2 = {};
  for (let val of arr1) {
    frequency1[val] = (frequency1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequency2[val] = (frequency2[val] || 0) + 1;
  }
  for (let key in frequency1) {
    if (!(key ** 2 in frequency2)) {
      return false;
    }
    if (frequency2[key ** 2] !== frequency1[key]) {
      return false;
    }
  }
  return true;
}

let t3 = performance.now();
console.log(same2([1, 2, 3], [1, 4, 9]));
let t4 = performance.now();
console.log(`time elapsed: ${(t4 - t3) / 1000} seconds`);

//so, the second is not that 'fancy' but time elapsed is 0.00015~0.00023

//the goal  for me is to improve code performance
