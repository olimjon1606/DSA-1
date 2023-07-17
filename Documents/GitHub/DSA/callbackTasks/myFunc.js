// function myFunc(array, callback) {
//         for(let i = 0; i<array.length; i++){
//             if(array[i]%2 !== 0){
//                 break;   
//             }else{
//                 return 1
//             }
//         }
// }

// const numbers = [2, 3, 6, 64, 10, 8, 12];
// const evens = [2, 4, 6, 8, 10, 12, 64];

// function isOdd(num) {
//   return (num % 2 !== 0);
// }

// // /*** Uncomment these to check your work! ***/
//  console.log(myFunc(numbers, isOdd)); // Output should be 1
//  console.log(myFunc(evens, isOdd)); // Output should be -1


function outer(){
    let counter = 0;
    function inner(){
        return counter++;
    }
    return inner;

}

const result = outer();
result();
result();
result();
console.log(result())
const result2 = outer();
result2()
console.log(result2())
let result3 = result2();
console.log(result3)