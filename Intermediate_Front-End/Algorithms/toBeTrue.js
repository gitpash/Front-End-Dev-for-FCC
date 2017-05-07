function truthCheck(collection, pre) {
  let check = true
  collection.map(el => {
    el[pre] ? null : check = false 
  })
  console.log(check)
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")