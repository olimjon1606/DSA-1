function countBy(array, callback) {
       let obj = {};
       let countEven = 0;
       let countOdd = 0;
       array.forEach((elem)=>{
        if(callback(elem)==='even'){
             countEven++;
        }else{
            countOdd++;
        }
       })
      return obj = {
        odd: countOdd,
        even: countEven
       };

}

// /*** Uncomment these to check your work! ***/
console.log(countBy([1, 2, 3, 4, 5], function(num) {
if (num % 2 === 0) return 'even';
else return 'odd';
})); // should log: { odd: 3, even: 2 }