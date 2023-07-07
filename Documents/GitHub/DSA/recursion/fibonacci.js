// with loop
function fibonacci(n){
    let t0=0,t1=0,s=0,i;
    if(n<=1)return n;
    for(i=2; i<=n; i++){
        s= t0 + t1;
        t0 = t1;
        t1 = s;
    }
    return s;
}
let res = fibonacci(10)
console.log(res)