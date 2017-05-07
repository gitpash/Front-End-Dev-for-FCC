
function convertHTML(str) {
let res = str.replace(/&/ig, "&amp;").replace(/"/ig, '&quot;').replace(/>/ig,'&gt;').replace(/</ig,'&lt;').replace(/'/ig, '&apos;')
console.log(res)
}

convertHTML("Dolce &' Gabbana");