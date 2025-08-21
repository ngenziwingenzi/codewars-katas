function persistence(num) {
  const numArray = num.toString().split('')
  let count = 1
  while(prod.toString().length > 1){
    let prod = 1
    for(let i = 0; i < numArray.length; i++){
        prod *= numArray[i]
    }
    count++
  }
  return count
}

console.log(persistence(3988))
