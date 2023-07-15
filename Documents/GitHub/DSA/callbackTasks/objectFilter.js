
function objectFilter(cities,callback){
    let results = {};
    for(let key in cities){
        if(cities.hasOwnProperty(key) && callback(key)=== cities[key]){
            results[key] = cities[key];
        }
    }
    return results;
}


const cities = {
London: 'LONDON',
LA: 'Los Angeles',
Paris: 'PARIS',
};
console.log(objectFilter(cities, city => city.toUpperCase()))
 // Should log { London: 'LONDON', Paris: 'PARIS'}