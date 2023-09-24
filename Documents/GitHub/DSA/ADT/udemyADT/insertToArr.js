function insert(arr,elm,index){
      if(index>=0 && index <= arr.length ){
        for(let i = arr.length; i>index; i--)
        {
            arr[i]=arr[i-1]
            if(i == index+1)arr[index] = elm
            
        }
        return arr
      }

}
const arr = [1,2,3,4,5]
let res = insert(arr,10,2)
console.log(res)

// we can also use splice() to insert data
arr.splice(indexToInsert,0,elementToInsert)