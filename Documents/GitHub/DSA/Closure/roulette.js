function roulette(num) {
      let counter = null;
      return function(){
        counter++;
        if(counter<num){
            return 'spin';
        }else if(num === counter){
            return 'win' ;
        }else{
            return 'pick number';
        }
      }
}

// /*** Uncomment these to check your work! ***/
const play = roulette(3);
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'win'
console.log(play()); // => should log 'pick a number to play again'
console.log(play()); // => should log 'pick a number to play again'