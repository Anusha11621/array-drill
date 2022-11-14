

function reduce(element,cb,Startingvalue){
  let start = element[Startingvalue]
  let first = start
  for (let i = Startingvalue+1 ; i <element.length; i++){
    first=cb(first,element[i])
  }
  return first;
}

module.exports = {reduce}