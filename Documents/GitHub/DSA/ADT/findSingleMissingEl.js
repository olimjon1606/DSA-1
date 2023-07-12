// first way if it is ascending by +1

function findArr(arr){
let sum = 0,s=0, n = 9;
for(let i=0; i<arr.length; i++){
    sum = sum + arr[i];
}
console.log(sum)
s = sum - n*(n-1)/2;
return s;
}

const arr = [1,2,3,4,6,7,8,9];
let ans = findArr(arr);
console.log(ans);
// second way
function findArr2(arr){
    let dif=0, l=1;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]-i != dif){
            console.log(i+dif);
            break;
        }
    }
}
findArr2(arr);