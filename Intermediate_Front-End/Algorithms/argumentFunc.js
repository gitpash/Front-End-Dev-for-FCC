
function addTogether(a, b) {
  if (typeof a === "number") {
    if (arguments.length === 1) {
      return b => addTogether(a, b);
    } else if (typeof b == "number") {
      return a + b;
    } 
  }
}


addTogether(2)(3)