
function flatten(element){
const arr=(elements)=>{
        for(let j=0 ;j<elements.length;j++){
            !Array.isArray(elements[j])?result.push(elements[j]):arr(elements[j])
          
        }
    }
let result = []

for (let i of element){
  !Array.isArray(i)?result.push(i):arr(i)
}
return result

}

module.exports = {flatten}