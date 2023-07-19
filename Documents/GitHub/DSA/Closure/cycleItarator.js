function cycleIterator(array) {
          let counter = -1;
     function inner(){
        let res;
            counter++;
            
            if(counter === array.length){
                counter = 0;
            }
        res = array[counter];
        return res;
    }
    return inner;

}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'