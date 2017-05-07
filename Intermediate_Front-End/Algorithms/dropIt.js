function dropElements(arr, func) {
  let a = [...arr];
  let r = [];
  a.every(function(el, index) {
    r = a.slice(index);
    if (func(el)) {
      return false;
    } else {
      r = [];
      return true;
    }
  });
  console.log(r);
}

dropElements([1, 2, 3, 4], function(n) {
  return n > 5;
});
