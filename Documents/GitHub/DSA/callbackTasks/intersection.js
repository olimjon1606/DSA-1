const arr = [[1,2,3,4],[2,3,5],[5,6,7,3]];
function intersection(arr){
    return arr.reduce((accum,elems)=>{
        return accum.filter((elem)=>{
            return elems.includes(elem);
        })
    })
}
let ans = intersection(arr);
console.log(ans);