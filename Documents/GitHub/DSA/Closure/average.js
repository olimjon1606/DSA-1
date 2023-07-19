

function average() {

    let counter=0, sum=0;
    return function(num){
        if(typeof(num) === "number"){
            sum +=num;
            counter++;
        }
        if(counter === 0){
            return 0;
        }
        return sum/counter;
    }
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8