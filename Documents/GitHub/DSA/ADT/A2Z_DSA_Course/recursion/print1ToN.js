function print1ToN(start,end){
     if(start>end){
        return ;
     }
     console.log(start);
     print1ToN(start+1,end);
}

print1ToN(1,5);