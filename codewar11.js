// //Square Every Digit
// function squareDigits(num){
//    let strNum = String(num);
//    return Number(strNum.split('').map(n => Number(n)**2).join(''));
// }


//Square Every Digit 2
const squareDigits = num =>
  Number(String(num)
    .split('')
    .map(d => d * d)
    .join(''))      

console.log(squareDigits(9119));

