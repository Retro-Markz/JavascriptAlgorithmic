//O(n)

/*
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
addUpTo(1000);
let t2 = performance.now();
console.log(`time elapsed: ${(t2 - t1) / 1000} seconds`);

function addUpTo2(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t3 = performance.now();
addUpTo2(1000);
let t4 = performance.now();
console.log(`time elapsed: ${(t4 - t3) / 1000} seconds`);


function countUpToDown(n) {
  console.log("going Up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top! \nGoing Down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down, Bye!");
}

let t1 = performance.now();
console.log(countUpToDown(10));
let t2 = performance.now();
console.log(`time elapsed: ${(t2 - t1) / 1000} seconds`);


//O(n^2)

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

let t1 = performance.now();
console.log(printAllPairs(10));
let t2 = performance.now();
console.log(`time elapsed: ${(t2 - t1) / 1000} seconds`);


//example O(n)

function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

//example O(1)
function logAtLeast5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

console.log(logAtLeast5(4));
*/
