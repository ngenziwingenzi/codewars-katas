function maskify(cc) {
  const ccArray = cc.split('')  
  return ccArray.slice(0,cc.length-4).map(char => '#').concat(ccArray.slice(cc.length-4)).join('')
}

console.log(maskify('64607935616'))