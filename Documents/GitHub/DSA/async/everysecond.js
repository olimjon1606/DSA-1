function everyXsecsForYsecs(func, dur, times) {
    // ADD CODE HERE
    const intervalId = setInterval(func,dur * 1000);
    setTimeout(function(){
        clearInterval(intervalId);
    },times*1000);
  }
  // Uncomment the following lines to check your work!
  function theEnd() {
    console.log('This is the end!');
  }
  everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!