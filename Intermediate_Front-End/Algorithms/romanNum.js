function convertToRoman(num) {
  let r = []
  let obj = Array.from(num.toString());
  obj.reverse();
  let len = obj.length;
  let index = ["I", "V", "X", "L", "C", "D", "M"];

  for (let i = 0; i < len; i++) {    
      if (obj[i] === '9') {
        
        r.push(index[i+i] + index[i+i + 2]);
      }
      if (obj[i] === '8') {
        r.push(index[i+i+ 1] + index[i+i]+index[i+i]+index[i+i]);
        console.log(i)
      }
      if (obj[i] === '7') {
        r.push(index[i +i + 1] + index[i+i] + index[i+i]);
      }
      if (obj[i] === '6') {
        r.push(index[i+i + 1] + index[i+i]);
      }
      if (obj[i] === '5') {
        r.push(index[i+i + 1]);
      }
      if (obj[i] === '4') {
        r.push(index[i+i] + index[i+i + 1]);
      }
      if (obj[i] === '3') {
        r.push(index[i+i] + index[i+i] + index[i+i]);
      }
      if (obj[i] === '2') {
        r.push(index[i+i] + index[i+i]);
      }
      if (obj[i] === '1') {
        r.push(index[i+i]);
      }

    }
  r = r.reverse().join('')
  console.log(r, obj)  
}



convertToRoman(649);
