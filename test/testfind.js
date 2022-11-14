const {items} = require ("../data.js");
const {find}  = require("../find");

let cb = (x) => x>4? true:false;

console.log(find(items,cb))