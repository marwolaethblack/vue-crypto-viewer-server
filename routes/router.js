var express = require('express');
var router = express.Router();
var axios = require('axios');
var path = require('path');

var coinIds = require('../constants/coinIds.json');
var coinSymbolToName = require('../constants/coinSymbols.json');

var paginateCoins = require('../helpers/paginateCoins');

//Global variable to cache the result of the TopCoins route so it retrieves new data only once every 3 minutes
var topCoins = {
    coins: {},
    date: Date.now(),
    prevCurrency: "USD"
};



//Route to fetch the top 10 coins or cryptocurrencies from the remote API
router.get('/api/coins/top', function(req,res) {

    var areCoinsEmpty = !Object.keys(topCoins.coins).length;
    var isDataOld = topCoins.date - Date.now() > 180000 ? true : false; //fetch new data from API every 3 minutes
    var isCurrencyNew = topCoins.prevCurrency != req.query.currency;



    if(areCoinsEmpty || isDataOld || isCurrencyNew) {

        var currency = req.query.currency || 'USD';

        axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=10&convert=${currency}`)
            .then(function (response) {
                topCoins.coins = response.data;
                topCoins.date = Date.now();
                topCoins.prevCurrency = currency;

                res.status(200).json(response.data);
            })
            .catch(function (error) {
                console.log(error.request);
                res.status(502).json({Response: "Error", Message: "The server encountered an error"});
            });
    } else {
        res.status(200).json(topCoins.coins);
    }

});


//Global variable to cache the result of the AllCoins route so it retrieves new data only once every hour
var allCoins = {
    coins: {},
    date: Date.now(),
};

//Route to fetch the list of all known coins or cryptocurrencies from remote API
router.get('/api/coins/all', function(req, res) {

    var areCoinsEmpty = !Object.keys(allCoins.coins).length;
    var isDataOld = allCoins.date - Date.now() > 3600000 ? true : false; //fetch new data from API every hour only

    if( areCoinsEmpty || isDataOld ) {
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
            .then(function(response) {

                var paginatedCoins = paginateCoins(response.data.Data);

                allCoins.coins = paginatedCoins;
                allCoins.date = Date.now();

                res.status(200).json(paginatedCoins);
            })
            .catch(function(error) {
                console.log(error);
                res.status(502).json({Response: "Error", Message: "The server encountered an error"});
            });
    } else {
        res.status(200).json(allCoins.coins);
    }


});




router.get('/api/coins/:coin/history', function (req, res) {

    var apiURL = 'https://min-api.cryptocompare.com/data/';
    var coin = req.params.coin || 'BTC';
    var exchange = req.query.e || 'CCCAGG';
    var currency = req.query.currency || 'USD';
    var type = req.query.type;

    //Changes BCC coin to BCCOIN because of different symbols for different APIs
    //Bitconnect has a symbol of BCC in the coinmarket cap API but in the cryptocompare API it has a symbol BCCOIN
    coin = coin === 'BCC' ? "BCCOIN" : coin;
    coin = coin === 'MIOTA' ? 'IOT' : coin;

    switch(type) {
        case '24h': {
            apiURL += `histohour?fsym=${coin}&tsym=${currency}&limit=24&e=${exchange}`
            break;
        }

        case 'month': {
            apiURL += `histoday?fsym=${coin}&tsym=${currency}&limit=30&e=${exchange}`;
            break;
        }

        case '6months': {
            apiURL += `histoday?fsym=${coin}&tsym=${currency}&aggregate=7&limit=27&e=${exchange}`;
            break;
        }

        case 'year': {
            apiURL += `histoday?fsym=${coin}&tsym=${currency}&aggregate=10&limit=37&e=${exchange}`;
            break;
        }

        case 'all': {
            apiURL += `histoday?fsym=${coin}&tsym=${currency}&aggregate=30&e=${exchange}&allData=true`;
            break;
        }

        default: {
            apiURL += `histoday?fsym=BTC&tsym=USD&limit=30&e=CCCAGG`;
            break;
        }
    }

    axios.get(apiURL)
        .then(function (response) {
            var dataWithCoinName = response.data;
            dataWithCoinName.CoinName = coinSymbolToName[coin];
            res.status(200).json(dataWithCoinName);
        })
        .catch(function (error) {
            console.log(error);
            res.status(502).json({Response: "Error", Message: "The server encountered an error"});
        })
});

router.get('/api/coins/:coin/details', function(req, res) {
    var { coin } = req.params;
    coin = coin === "MIOTA" ? "IOT" : coin;
    var id = coinIds[coin];
    if(id) {
        axios.get(`https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=${id}`)
            .then(function(response) {
                res.status(200).json(response.data)
            })
            .catch(function(error) {
                console.log(error);
                res.status(502).json({Response: "Error", Message: "The server encountered an error"});
            })
    } else {
        res.status(404).json({Response: "Error", Message: "The requested coin was not found"});
    }


});



router.get('/api/coins/:coin/social', function(req, res) {
    var { coin } = req.params;
    coin = coin === "MIOTA" ? "IOT" : coin;
    var id = coinIds[coin];

    axios.get(`https://www.cryptocompare.com/api/data/socialstats/?id=${id}`)
        .then(function(response) {
            res.status(200).json(response.data);
        })
        .catch(function(error) {
            console.log(error);
            res.status(504);
        })

});


router.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname, '..', 'dist/index.html'));

});

module.exports = router;
