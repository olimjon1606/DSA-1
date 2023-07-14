function mapWith(array, callback){
    let arr = [];
    array.forEach((elem)=>{
        arr.push(callback(elem));
    })
    return arr;
}
function doubleNum(elems){
    return elems * 2;
}

const numbers = [1,2,3,4];
let ans = mapWith(numbers,doubleNum);
console.log(ans);