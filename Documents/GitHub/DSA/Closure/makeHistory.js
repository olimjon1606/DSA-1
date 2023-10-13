function makeHistory(limit) {
       const history = [];
       return function(str){
        if(str === "undo"){
          if(history.length === 0){
            return "nothing to undo";
          }else{
            const LastAction = history.pop();
            return `${LastAction} undo`
          }
        }else{
            history.push(str);
            if(history.length > limit){
                history.shift();
            }
            return `${str} done`;
        }
       }
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'
