//Two functions to find minimum and maximum
var min = function(list){
    return Math.min(...list)
}
var max = function(list){
    return Math.max(...list)
}

//Alternative for Arrays 
var max = list => Math.max(...list);
var min = list => Math,min(...list);
console.log(max([2,4,3,56]));

//For List of Numbers
var max = (...numbers) => Math.max(...numbers);
var max = (...numbers) => Math.min(...numbers);
console.log(max(21,23,78,43));