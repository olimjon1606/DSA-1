function power(n,m){
    if(m<1){
        return 1
    }return power(n,m-1) * n
}
let res = power(2,5)
console.log(res)