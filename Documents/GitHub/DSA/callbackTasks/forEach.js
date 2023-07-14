let alphabet = '';
const letters = ['a','b','c','d'];
function forEach(arr, callback){
    alphabet = callback(arr);
}
function addArr(arr){
    let sum = [];
    for(let i = 0; i < arr.length; i++){
          sum += arr[i];
    }
    return sum;
}
forEach(letters,addArr);
console.log(alphabet);