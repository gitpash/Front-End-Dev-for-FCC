function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  let a = Object.keys(source);
  let len = a.length
  collection.map(item => { 
    let i = 0
    let c = true
    while (i < len ) {
    if ( item.hasOwnProperty(a[i]) && item[a[i]] === source[a[i]])
      { }   //console.log(item)
    else {
      c = false}
    i++
  }
  if(c)
    arr.push(item)
})
  console.log(arr);
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })
