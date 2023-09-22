// using filter
// function findDuplicates(arr){
//     return arr.filter((item,index,self)=> self.indexOf(item) !== index).length > 0
// }
// const arr = [2,3,4,5]
// console.log(findDuplicates(arr));

// with set
// function findDuplicates(arr){
//       const set = new Set();
//       for(const item of arr){
//         if(set.has(item)){
//             return true;
//         }else{
//             set.add(item);
//         }
//       }
//       return false;
// }

// const arr = [2,3,4,4,5]
// console.log(findDuplicates(arr));

// function sortedArr(arr){
//      const newArr = arr.sort((a,b)=> a-b);
//      for(let i=0; i<newArr.length; i++){
//         if(newArr[i]=== newArr[i+1]){
//             return true;
//         }
//      }
//      return false;
// }

// const arr = [2,7,6,4,5,6]
// console.log(sortedArr(arr));



