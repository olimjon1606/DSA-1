function factorial(n){
    if(n<1){
        return 1
    }return factorial(n-1)*n
}

let res = factorial(5)
console.log(res)

// with loop

function factorialLoop(n){
    let sum = 1
    for(let i = 1; i<=n; i++){
        sum = sum*i
    }
    return sum
}
let res2 = factorialLoop(5)
console.log(res2)