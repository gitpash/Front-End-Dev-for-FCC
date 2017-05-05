function sumAll(arr) {
  let max = Math.max(arr[0], arr[1])
  let min = Math.min(arr[0], arr[1])
  // console.log(max, min)
  let newArr = []
  while(min <= max) {
    newArr.push(min)
    min++
  }
  let result = newArr.reduce((sum, number) => sum + number, 0)
  console.log(result)
}

sumAll([1, 4])