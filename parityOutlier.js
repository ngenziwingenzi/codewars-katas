function findOutlier(integers){
  return integers.filter(n => n % 2 === 0).length > 1 ? 
    Number(integers.filter(n => n % 2 !== 0)):
    Number(integers.filter(n => n % 2 === 0))
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
