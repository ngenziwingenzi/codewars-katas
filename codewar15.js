//multiplying loc's word num times
function modifyMultiply(str, loc, num){
    const words = str.split(" ");

    const word = words[loc];

    return Array(num).fill(word).join("-");
}
console.log(modifyMultiply("My word is going to prove me wrong", 2, 5));