const nums = [4,1,3];
const add = function(a,b){return a+b};
function reduce(elems,fun){
     let n = 0; 
      elems.forEach((elem)=>{
          n = add(n,elem);
      })
      return n;
}
// function reduce(array,callback, initialValue){
//     let accum = initialValue;
//     array.forEach((elem)=>{
//         accum = callback(accum,elem);
//     })
//     return accum;
// }
let ans = reduce(nums, add,0);
console.log(ans);
