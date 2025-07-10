//Abbreviate a Two Word Name
const abbrevName = name => name.split(" ").map(n => n[0].toUpperCase()).join(".");

console.log(abbrevName("nshuti hubert"));