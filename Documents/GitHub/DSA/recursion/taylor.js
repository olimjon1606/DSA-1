var p =1, f=1;
function taylor(n,m){
    
    let r;
    if(m==0){
        return 1
    }
    r=taylor(n,m-1)
    p = p*n;
    f = f*m;
    return r + p/f
}
let res = taylor(3,10)
console.log(res)