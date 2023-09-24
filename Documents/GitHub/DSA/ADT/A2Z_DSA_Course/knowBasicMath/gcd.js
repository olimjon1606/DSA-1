function GCD(num1, num2){
    let ans=0;
    for(let i = 1; i<= Math.min(num1,num2); i++){
            if(num1%i === 0 && num2%i === 0){
                ans = i;
            }
    }
    console.log(ans);
}
GCD(18, 27);

// second approach

function gcd(num1, num2){
    if(num2 === 0){
        return num1;
    }
    return gcd(num2, num1%num2);

}

const result = gcd(18, 27);
console.log(result);