const {items} = require ("../data.js");
const {map}  = require("../map");

function callback(cb2){
    return cb2*2
}
console.log(map(items,callback));