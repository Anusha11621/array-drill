


function each(element,cb){
  let array = []
  for (let elements of element){
    //console.log(cb(elements))
    array.push(cb(elements))
  }
 return array
}


module.exports = {each}