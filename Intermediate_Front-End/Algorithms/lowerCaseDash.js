function spinalCase(str) {
 console.log(str.replace(/ /gi, '-').replace(/_/g,'-').replace(/\B([A-Z][a-z])/g, "-$1").toLowerCase())
//  .replace(/([A-Z]+)/g, ",$1").replace(/^,/, "")
//  .replace(/,/gi, ' ').replace(/_/g, '').replace(/  /g, ' '))
//  .join('-').toLowerCase().replace(/_/ig, '').replace(/ /ig, ''))
 
}


spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things")
