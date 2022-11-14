const {items} = require ("../data.js");
const {filter}  = require("../filter");

let cb = (x) => x ==3;

console.log(filter(items,cb))
