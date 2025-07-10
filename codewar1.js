//  function that returns the digits of a number within an array in reverse order.
function digitize(n) {
  return n.toString().split("").reverse().map(str => Number(str));
}
console.log(digitize(23745));