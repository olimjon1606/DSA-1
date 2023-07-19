function once(func) {
    let hasBeenCalled = false;
    let result;

    return function(...args){
        if(!hasBeenCalled){
            result = func(...args);
            hasBeenCalled = true;

        }
        return result;
    }
    
         
}
function addByTwo(x){
    return x+2;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6