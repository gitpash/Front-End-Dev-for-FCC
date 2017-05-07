
function findElement(arr, func) {
 let r = arr.filter(el => func(el))
 console.log(r)
}


findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })