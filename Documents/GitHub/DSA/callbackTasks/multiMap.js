
function multiMap(arr,callbacks){
     const newObj = {};
     arr.forEach((elem)=>{
        newObj[elem] = callbacks.map((callback)=>{
            return callback(elem);
        })
     })
    return newObj;
}

const arr = ['catfood','glue','beer'];
let ans = multiMap(arr,callbacks = [function(str){return str.toUpperCase()},
    function(str){return str[0].toUpperCase()+str.slice(1).toLowerCase()},
    function(str){return str + str}])
console.log(ans)