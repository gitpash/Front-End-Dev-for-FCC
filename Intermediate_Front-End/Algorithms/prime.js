function sumPrimes(num) {
  const arr = [];
  let i = 2;
  let res=0;
  while (i <= num) {
    arr.push(i);
    i++;
  }
  arr.forEach((el, i) => {
    let sum = 0;
    while (i >= 0) {
      el % arr[i] == 0 ? (sum = sum + 1) : null;
      i--;
    }
    sum == 1 ? res=res+el : null;
    // console.log(i)
  });
  console.log(arr, res);
}

sumPrimes(10);
