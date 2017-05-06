
function uniteUnique(arr) {
const args = [...arguments]
let res = []
  args.forEach(el => {
    el.forEach(num => {
      if (res.indexOf(num) == -1)
      res.push(num)
    })
  });
  console.log(res)
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);