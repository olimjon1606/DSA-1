// in js we can use reverse()
const arr = [1,2,3,4]
console.log(arr.reverse())
// with loop 
const arr2 = [1,2,3,4]
function reverseArr(arr2){
    let arr = [];
    for(let i = arr2.length - 1, j=0; i>=0; i--,j++){

        arr[j] = arr2[i];
    }
    for(let i = 0; i<arr.length; i++){
        arr2[i] = arr[i]
    }
    return arr2
}
// second way
function ReverseArr(arr2){
    let temp;
    for(let i = 0, j = arr2.length-1;i<j;i++,j--){
        temp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp;
    }
    return arr2;
}

let ans = reverseArr(arr2);
console.log(ans);
let ans2 = ReverseArr(arr2);
console.log(ans2);