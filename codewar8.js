// Beginner Series #3 Sum of Numbers
function getSum( a, b )
{
  if( a < b ){ return loop( a, b ); }
  if( a > b ){ return loop( b, a ); }
  return a;
}

function loop( i, j ){
  var sum = 0;
  for( i ; i <= j ; i++ ){
    sum += i;
  }
  return sum;
}

console.log(getSum(9, 1));