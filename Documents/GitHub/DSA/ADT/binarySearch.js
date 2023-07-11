function binarySearch(arr,key){
let l = 0, mid, h=arr.length-1;
while(l<=h){
    mid = Math.floor((l+h)/2);
    if(key == arr[mid]){
        return mid;
    }else if(key < arr[mid]){
        h = mid - 1;
    }else{
        l = mid + 1;
    }
    return -1;
}
}
// with recursion
function RbinarSearch(arr,l,h,key){
    let mid = 0;
    if(l<=h){
        mid = (l+h)/2;
        if(key == arr[mid]){
            return mid;
        }else if(key<arr[mid]){
            return RbinarSearch(arr,l,mid-1,key);
        }else{
            return RbinarSearch(arr,mid+1,h,key);
        }
        
    }
    
}
const arr = [2,5,3,4,7,9,7,6,2];
let ans = binarySearch(arr,7);
let ans2 = RbinarSearch(arr,0,arr.length-1,4)
console.log(ans2);