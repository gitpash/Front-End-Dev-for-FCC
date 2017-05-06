function fearNotLetter(str) {
  let a = str.charCodeAt(0);
  let z = str.charCodeAt(str.length - 1);
  let c = [];
  // console.log(str.indexOf('b'))
  while (a <= z) {
    c.push(a);
    a++;
  }
  let r = [];
  c.forEach(el => {
    if (str.indexOf(String.fromCharCode(el)) == -1) r.push(el);
  });

  // console.log(undefined)

  // else
console.log(String.fromCharCode(r))
  // console.log(String.fromCharCode(97101
}

fearNotLetter("bcd");
