function groupBy(array, callback) {
    let result = {};
       array.forEach((elem)=>{
           let key = callback(elem);
        // agar qaytgani qayerdadir mavjud bolsa
        // result[key] ning arrayiga arr.push(elem)
        if(result[key]){
result[key].push(elem);
        }else{
            result[key]=[elem];
        }
       })
       return result;
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }