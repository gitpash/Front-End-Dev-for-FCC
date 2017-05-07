function steamrollArray(arr) {
  let r = [];
  function getEl(array) {
    array.forEach(el => {
      if (Array.isArray(el)) {
        getEl(el);
      } else r.push(el);
    });
  }
  getEl(arr)
  console.log(r);
}
steamrollArray([1, [2], [3, [[4]]]]);
