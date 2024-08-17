//time perfonrmance

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
