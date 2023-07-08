function factorial(n){
    if(n==0)return 1;
    return factorial(n-1)*n;
}
function nCr(n,r){
    let num,den;
    num = factorial(n);
    den = factorial(r) * factorial(n-r);
    return num/den;

}

function NCR(n,r){
    if(n==r || r==0)return 1;
    return NCR(n-1,r-1) + NCR(n-1,r)
}

let res = nCr(5,3);
let res2 = NCR(5,3);
console.log(res);
console.log(res2);