// with loop
function fibonacci(n){
    let t0=0,t1=1,s=0,i;
    if(n<=1)return n;
    for(i=2; i<=n; i++){
        s= t0 + t1;
        t0 = t1;
        t1 = s;
    }
    return s;
}

//with recursion

// function fibonacci(n){
//     if(n<=1)return n;
//     return fibonacci(n-1) + fibonacci(n-2)
// }

let res = fibonacci(10)
console.log(res)