function findUniq(arr) {
  return Number(arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)))
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 4, 3, 3, 3, 3, 3 ]))