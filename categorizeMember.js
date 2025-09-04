function openOrSenior(data){
  let output = []
  for(let i = 0; i < data.length; i++){
    for(let j = 0; j < 2; j++){
      if(data[i][j] >= 55 && data[i][j+1] > 7){
        output.push('Senior')
      }
      else{
        output.push('Open')
      }
      break;
    }
  }
  return output
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))