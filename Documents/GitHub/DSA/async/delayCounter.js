function delayCounter(target, wait) {
     return function(){
        for(let i = 1; i<=target; i++){
            setTimeout(function(){
                console.log(i);
            }, i*wait);
        }
     }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000)
countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3