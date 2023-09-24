function ReverseFun(num){
    
    if(num === undefined){
        return 0;
    }else{
        let reverse = 0;
        while(Math.floor(num)!==0){
          reverse = reverse * 10 + num%10;
          num = Math.floor(num/10);
        }
        console.log(reverse);
    }
    
}

ReverseFun(123);