function findDuplicate(arr){
    // let lastDuplicate = 0;
    // for(let i=0; i<arr.length; i++){
    //    if(arr[i]==arr[i+1] && lastDuplicate !=arr[i]){
    //     console.log(arr[i]);
    //     lastDuplicate = arr[i];
    //    }
        
    // }
    for(let i=0; i<arr.length - 1; i++){
        if(arr[i]==arr[i+1]){
            j = i+1;
            while(arr[j]==arr[i]){
                j++;
            }
            console.log(arr[i],j-i);
            i=j-1;
        }
    }
}
const arr = [2,3,4,5,5,6,7,8,8,8,9];
findDuplicate(arr);
