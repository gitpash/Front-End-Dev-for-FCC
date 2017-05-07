function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  let a = arr[0];
  let b = arr[1]
  let res = [];
  let cond = false
  while (a <= arr[1]) {
    res.push(a);
    a++;
  }
  let i = 1
  while(cond === false) {
    
    let sum = 0
    res.forEach(el => {
      b*i%el == 0 ? null : sum=sum+1 
      // console.log(el, sum)
    })
    if (sum === 0) {
      console.log(b*i)
      cond = true
    }
    i++
  }

  // console.log(res, multiple);
}

smallestCommons([23, 18]);
