
function myReplace(str, before, after) {
  if(before[0].toUpperCase() == before[0]) {
    let a = after.split('')
    a.splice(0,1, after[0].toUpperCase())
    a = a.join('')
    let res = str.replace(before, a)
  }
  else {
  let res = str.replace(before, after)
}
return res
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
