function pairElement(str) {
  let a = str.split("");
  let r = [];
  a.forEach(el => {
    // r.push([el])
    el === "G" ? r.push([el, "C"]) : null;
    el === "C" ? r.push([el, "G"]) : null;
    el === "A" ? r.push([el, "T"]) : null;
    el === "T" ? r.push([el, "A"]) : null;
  });
  console.log(r);
}

pairElement("GCG");
