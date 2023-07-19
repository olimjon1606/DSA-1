function delay(func, wait,...args) {
     setTimeout(func,wait,...args);
}

function great(name){
    console.log(name)
}
delay(great,2000,"John");