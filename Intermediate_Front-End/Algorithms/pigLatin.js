function translatePigLatin(str) {
  let a = "";
  let index
  if (/[aeiou]$/i.test(str[0])) {
    a = str + "way";
    console.log(a);
  } else {
    str.split("").every((el) => {
      index = str.indexOf(el)
      if (/[aeiou]$/i.test(el)) {
        return false
        // console.log(index)
     } 
     else return true  
    });
    // console.log(index)
    let b = str.substr(index)+str.substr(0,index)+"ay"
    console.log(b);
  }
}

translatePigLatin("glove");
