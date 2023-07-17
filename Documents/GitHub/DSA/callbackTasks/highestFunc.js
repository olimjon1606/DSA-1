function highestFunc(objOfFuncs, subject) {
     let highestResult = Number.NEGATIVE_INFINITY;
     let highestKey = null;

     for(const key in objOfFuncs){
        if(objOfFuncs.hasOwnProperty(key) && typeof objOfFuncs[key] === 'function'){
            const result = objOfFuncs[key](subject);
            if(typeof result === 'number' && result > highestResult){
                highestResult = result;
                highestKey = key;
            } 
        }
     }
       return highestKey;
}

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
 groupOfFuncs.inverse = n => n * -1;
 console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
 console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
 console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'