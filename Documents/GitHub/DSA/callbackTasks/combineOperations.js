function combineOperations(startVal, arrOfFuncs) {
    let result = startVal;
    for(const func of arrOfFuncs){
        result += func(result);
    }    
    return result; 
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

// /*** Uncomment these to check your work! ***/
 console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
 console.log(combineOperations(0, [divByFive, multiplyByThree, add100])); // Should output 10

