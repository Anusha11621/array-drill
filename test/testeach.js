const {items} = require ("../data.js");
const {each}  = require("../each");

function callback(cb1){
   
    return cb1*cb1
}

console.log(each(items,callback))