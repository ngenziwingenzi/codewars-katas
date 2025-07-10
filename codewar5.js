function toAcronym(inp){
  let text = "";
  for (let i = 0; i < inp.split(" ").length; i++) {
    text += inp.split(" ")[i][0];
  }
  return text.toUpperCase();
}
console.log(toAcronym("Let us check."));