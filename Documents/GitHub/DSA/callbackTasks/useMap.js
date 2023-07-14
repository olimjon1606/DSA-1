function map(array, callback){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        newArr.push(callback(array[i]));
    }
    return newArr;
}
function doubleNum(num){
    return num * 2;
}

const numbers = [1,2,3,4,5];;
let result = map(numbers, doubleNum);
console.log(result);


