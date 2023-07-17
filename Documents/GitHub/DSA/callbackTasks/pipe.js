
function pipe(arrOfFuncs, value) {
    let arr = value;
    arrOfFuncs.forEach(element => {
        arr = element(arr)
    });
    return arr;

}

// /*** Uncomment these to check your work! ***/
 const capitalize = str => str.toUpperCase();
 const addLowerCase = str => str + str.toLowerCase();
 const repeat = str => str + str;
 const capAddlowRepeat = [capitalize, addLowerCase, repeat];
 console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'