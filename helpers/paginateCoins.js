//Transforms object whose every property is a coin to an array of objects
//each orray element contains 30 properties maximum, each property is a coin


module.exports = function(coins) {
    var paginatedCoins = [];
    var thirtyCoins = {};
    var coinKeys = Object.keys(coins).sort();
    coinKeys.forEach((key, index) => {

        if(index % 29 != 0 || index === 0) {
            thirtyCoins[key] = coins[key];
        }

        if(index % 29 === 0 && index != 0) {
            paginatedCoins.push(thirtyCoins);
            thirtyCoins = {};
        }

        if(index + 1 === coinKeys.length) {
            paginatedCoins.push(thirtyCoins)
        }

    });

    return paginatedCoins;
}