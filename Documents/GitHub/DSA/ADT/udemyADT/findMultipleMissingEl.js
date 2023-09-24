function findArr(arr){
     let diff = 6-0;
     for(let i=0; i < arr.length; i++){
        if(arr[i]-i != diff){
            while(diff<arr[i]-i){
                console.log(i+diff);
                diff++;                 
            }
        }
     }
}

const arr = [6,7,8,9,11,12,13,15,16];
findArr(arr);