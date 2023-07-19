function rollCall(names) {
         let count = 0;
         function inner(){
            if(count == names.length){console.log("all printed")}else{
                count++;
                console.log(names[count-1]);
            }
            
         }
         return inner;
}

// /*** Uncomment these to check your work! ***/
 const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'