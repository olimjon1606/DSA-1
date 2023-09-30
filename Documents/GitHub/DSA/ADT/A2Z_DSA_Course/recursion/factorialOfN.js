function factorialOfN(num){
    if(num === 0)
    {
        return 1;
    } 
   return num * factorialOfN(num-1);
}

console.log(factorialOfN(5));