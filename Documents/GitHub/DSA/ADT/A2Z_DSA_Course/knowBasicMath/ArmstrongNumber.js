function Armstrong(num){
    if(num === undefined){
        return ;
    }
    let stringNum = num + '';
    let count = stringNum.length;
    let sum = 0;
    for(let i = 0; i < stringNum.split('').length; i++){
        sum+= Math.pow(Number(stringNum.split('')[i]),count);
    }
    return (num === sum);
    

}

console.log(Armstrong(153));

// another way

function ArmstrongNum(num){
    let count = num.length;
    let sumOfPower = 0;
    while(Math.floor(num ) !=0){
        let digit = Math.floor(num )%10;
        sumOfPower += Math.pow(digit,count);
       num= Math.floor(num)/10;
    }
    // return (sumOfPower === num);
    console.log(sumOfPower)
}
ArmstrongNum(153)
//console.log(ArmstrongNum(153));