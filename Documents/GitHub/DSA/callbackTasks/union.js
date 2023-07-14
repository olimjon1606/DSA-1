const arr = [[1,2,3,4],[2,3,5],[5,6,7,3]];
function union(arr){
    return arr.reduce((accum, elements)=>{
        elements.forEach((elem)=>{
            if(!accum.includes(elem)){
                accum.push(elem);
            }
        })
        return accum;
    })

}
let ans = union(arr);
console.log(ans);