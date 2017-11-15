var express = require('express');
var router = express.Router();
var axios = require('axios');

var coinIds = require('../constants/coinIds.json');
var coinSymbolToName = require('../constants/coinSymbols.json');

router.get('/api/coins/top', function(req,res) {

    var currency = req.query.currency || 'USD';

    axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=10&convert=${currency}`)
        .then(function (response) {
            res.status(200).json(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
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
        })
});

router.get('/api/coins/:coin/details', function(req, res) {
    var { coin } = req.params;
    coin = coin === "MIOTA" ? "IOT" : coin;
    var id = coinIds[coin];
    if(id) {
        axios.get(`https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=${id}`)
            .then(response => {
                res.status(200).json(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    res.status(404);

});

module.exports = router;
