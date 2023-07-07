function sum(n){
    if(n<0){
        return 1
    }return sum(n-1)+n
}
let res = sum(5)
console.log(res)

// with loop
function sum2(n){
    let s = 0
    for(let i = 1; i<=n; i++){
        s = s + i
    }
    return s
}
let res2 = sum2(5)
console.log(res2)