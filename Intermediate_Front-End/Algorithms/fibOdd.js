function sumFibs(num) {
  let fib = [1, 1];
  let i = 0;
  while (i < num - 2) {
    fib.push(fib[i] + fib[i + 1]);
    i++;
  }
  let r = fib.reduce((sum, el) => {
    return el % 2 !== 0 && el <= num ? sum + el : sum;
  }, 0);
  console.log(r);
}

sumFibs(75024);
