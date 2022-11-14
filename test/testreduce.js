const {items} = require("../data");
const {reduce} = require("../reduce")

function callback(total,sum){
    return sum = sum+total
  }

  console.log(reduce(items,callback,0))