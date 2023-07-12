function findDuplicate(arr){
    let lastDuplicate = 0;
    for(let i=0; i<arr.length; i++){
       if(arr[i]==arr[i+1] && lastDuplicate !=arr[i]){
        console.log(arr[i]);
        lastDuplicate = arr[i];
       }
        
    }
}
const arr = [2,3,4,5,5,6,7,8,8,9];
findDuplicate(arr);
