function printerError(s) {
    s.split("");
  const validColors = "abcdefghijklm";
  let count =  0;
  for(let char of s){
    if(!validColors.includes(char)){
      count++;
    }
  }
  return `${count}/${s.length}`
}
console.log(printerError("aaabcccppp"));