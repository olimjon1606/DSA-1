function createSecretHolder(secret) {
    return {
        getSecret: function(){
            return secret;
        },
        setSecret: function(Newsecret){
            secret = Newsecret;
        }

    }

};

// /*** Uncomment these to check your work! ***/
obj = createSecretHolder(5)
console.log(obj.getSecret()) // => returns 5
obj.setSecret(2)
console.log(obj.getSecret()) // => returns 2
