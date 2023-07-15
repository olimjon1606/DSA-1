

function prioritize(array, callback) {
    let result = [];
      for(let i = 0; i<array.length; i++){
        if(callback(array[i])){
        result.unshift(array[i]);      
        }else{
            result.push(array[i]);
        }
      }
      return result;
}

// /*** Uncomment these to check your work! ***/
const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
//['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']