function palindrome(arr){
    let left = 0;
    let right = arr.length -1;
    let boolType = true;
    while(left<=right && boolType){
        if(arr[left] === arr[right]){
            left ++;
            right--;
        }else{
            boolType = false;
        }
    }
    return boolType;
}

const numbers = [1,2,3,3,2,1];
const result = palindrome(numbers);
console.log(result);