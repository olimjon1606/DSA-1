const arr = ['hi','howdy','bye'];
const arr2 = ['HI','Howdy','BYE'];
let callback =(str)=>{return str.toUpperCase()};
function objOfMatches(arr,arr2,callback){
    const accum = {};
    for(let i = 0; i<arr.length; i++){
        if(callback(arr[i])=== arr2[i]){
            accum[arr[i]] = arr2[i];
        }
    }
    return accum;
}
let res = objOfMatches(arr,arr2,callback);
console.log(res);