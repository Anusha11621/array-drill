
  function map(element,cb){
    let array = []
    for (let elements of element){
      array.push(cb(elements))
    }
    return array;
  }

module.exports = {map}