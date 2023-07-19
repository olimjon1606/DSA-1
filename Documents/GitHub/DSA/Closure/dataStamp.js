function dateStamp(func) {
    
          return function(...args){
            const result = func(args);
            const dateR = new Date();
            return  {
                date: dateR,
                output: result
            }
          }
     
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }