function getCount(str) {
  let count = 0;
  const answer = str.some(char => char == 'a' || char == 'b' || char == 'c' || char == 'd' || char == 'e')
  if(answer){
    count+= 1;
  }
  return count;
}

console.log(getCount("i have a pen"));

//Better approach
function countVowels(str) {
  const vowels = new Set(['a','e','i','o','u']);
  let count = 0;
  for (const ch of str.toLowerCase()) {
    if (vowels.has(ch)) count++;
  }
  return count;
}
