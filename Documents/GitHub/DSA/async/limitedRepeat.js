function limitedRepeat() {
    // ADD CODE HERE
    let counter = 0;
    
    
        let myFunc = setInterval(function(){
            console.log("hi"); 
            counter++;
            if(counter === 5){
                clearInterval(myFunc);
            }
       
    },1000);
        
   

  }
  // Uncomment the following line to check your work!
  limitedRepeat(); // should log (every second, for 5 seconds): hi for now