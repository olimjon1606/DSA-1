function recursiveNamePrint(i,nTimes){
    let name = "Jack";
    if(i > nTimes){
        return 0;
    } else{
        console.log(name);
    }

    recursiveNamePrint(i+1, nTimes);
}
recursiveNamePrint(1,5);