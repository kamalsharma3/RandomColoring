// document.body.style.padding = "100px";
// document.body.style.margin = "auto";
// document.body.style.textAlign = "50%";
document.body.style.fontWeight = "bold";
document.body.style.fontSize = "20px";
const bodycolor = (document.body.style.backgroundColor =
  "#" + Math.floor(Math.random() * 16777216).toString(16));
document.body.style.color =
  "#" + Math.floor(Math.random() * 16777216).toString(16);
// document.body.style.color = '#' + (0x1000000 + Math.floor(Math.random() * 0x1000000)).toString(16).substr(1);
// document.body.style.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

//codePoint & charCode
let code = "";
let codepoint = code.codePointAt(0);
// document.write(Math.floor(Math.random() * 16777216).toString(16));
let point = String.fromCharCode(codepoint);
document.write(bodycolor);
