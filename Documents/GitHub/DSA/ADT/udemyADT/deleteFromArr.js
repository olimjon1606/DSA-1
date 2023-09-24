
function deleteArr(arr,index){
    if(index>=0 && index<arr.length){
        for(let i = index; i < arr.length-1; i++){

            arr[i] = arr[i+1]
            arr.length--
        }
        return arr
    } 
}
const arr = [1,2,3,4,5]
let res = deleteArr(arr,3)
console.log(res)

//  we can aslo delete using splice()
arr.splice(indextoDelete,1)