function createFunction() {
     function inner(){
        console.log("Hello")
     }
    return inner;
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');