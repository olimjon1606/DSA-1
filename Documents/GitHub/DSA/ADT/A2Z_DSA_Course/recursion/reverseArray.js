function reverseArray(start, end, arr){
    const reversed = [];
    if(start > end){
        return ;
    } else{
        reverseArray(start +1,end, arr);
        reversed[start] = arr[end];
    }
     
}
reverseArray(0,3,[1,2,3,4])