function sumOfFirst_N_Numbers(n){
    if(n === 0){
        return 0;
    }
    return n + sumOfFirst_N_Numbers(n-1);
    
}
//const result = sumOfFirst_N_Numbers(5);
console.log(sumOfFirst_N_Numbers(7))
//console.log(result);