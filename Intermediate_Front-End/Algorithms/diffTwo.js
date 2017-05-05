function diffArray(arr1, arr2) {
  let newArr = [];
  let same = []
  // Same, same; but different.
arr1.forEach(function(element1) {
  arr2.forEach(element2 => {
    if(element1 === element2) {
      same.push(element1)
    }
  })   
});
let sum = arr1.concat(arr2)
sum.forEach(num => {
  if(same.indexOf(num) === -1)
    newArr.push(num)
}
  
)
console.log(newArr)
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
