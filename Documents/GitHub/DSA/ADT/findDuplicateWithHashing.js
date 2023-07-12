function usingHash(arr){
    const Hash = [];
    for(let i = 0; i < arr.length; i++){
       Hash[arr[i]] + 1;
       console.log(Hash[i])
    };
    for(let i = 0; i <= 10; i++){
        if(Hash[i] > 1)
        console.log(i,Hash[i]);
    };
}
const arr = [2,3,4,5,6,7,7,8,9,9,10];
usingHash(arr);
//console.log(Math.max(...arr)); find max from an array 