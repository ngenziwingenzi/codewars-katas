//Returning n multiples of x
function countBy(x, n) {
  let z = [];
  for(let i = 1; i <= n; i++){
    z.push(x * i);
  }
  return z;
}
console.log(countBy(2,5));

// Finding number of pages needed to copy paperwork for 'n' classmates while has 'm' pages.
// If n < 0 or m < 0 return 0.
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

