function promised (val) {
    // ADD CODE HERE
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(val);
        },2000)
    })
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  const createPromise = promised('wait for it...');
  createPromise.then((val) => console.log(val)); 
  // will log "wait for it..." to the console after 2 seconds