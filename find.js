
function find(element,cb){
    for(let i of element){
        if(cb(i)){ return i}
    }
    return "undefined"
}

module.exports = {find}