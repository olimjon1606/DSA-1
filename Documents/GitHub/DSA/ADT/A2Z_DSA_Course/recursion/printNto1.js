function printNto1(start, end){
      if(start>end){
        return;
      }else{
        printNto1(start+1, end)
        console.log(start);
      }
    
}

printNto1(1,5);