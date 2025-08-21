function sortTheInnerContent(words){
  let result = []  
  const wordsArr = words.split(' ')
  const innerContents = wordsArr.map(word => word.slice(1,-1).split('').sort().reverse().join(''))
  for(let i = 0; i < wordsArr.length; i++){
        result.push(`${wordsArr[i].charAt(0)}${innerContents[i]}${wordsArr[i].slice(-1)}`)
  }
  return result
  //wor.chat(0)+slice()+charat(-1)
}

console.log(sortTheInnerContent("sort the inner content in descending order"))