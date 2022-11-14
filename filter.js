



function filter(element,cb){
    let array = []
    for (let i of element){
        if (cb(i)){
            array.push(i)
        }
        
    }
    return array
}

module.exports  = {filter}