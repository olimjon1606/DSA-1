function linearSearch(arr,key){
    for(let i = 0; i<arr.length; i++){
        if(key == arr[i]){
            let temp = arr[0]
            arr[0] = arr[i]
            arr[i] = temp

            return i
        }
    }
}

const arr = [1,2,3,4,5,6,7,7,8]
let res = linearSearch(arr,4)
console.log(res)
console.log(arr)