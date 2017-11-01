var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var axios = require('axios');


var app = express();
app.use(compression());
app.use(morgan('combined'));
app.set('port', process.env.PORT || 3110);



app.get('/api/coins/top', function(req,res) {

    var currency = req.query.currency || 'USD';

    axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=10&convert=${currency}`)
        .then(function (response) {
            res.status(200).json(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
});


app.get('/', function(req, res) {
    res.status(200).json({message: "hello"});
});

app.get('/api/coins/:coin/history', function (req, res) {

    var apiURL = 'https://min-api.cryptocompare.com/data/';
    var coin = req.params.coin || 'BTC';
    var exchange = req.query.e || 'CCCAGG';
    var currency = req.query.currency || 'USD';
    var type = req.query.type;

    switch(type) {
        case '24h': {
            apiURL += `histohour?fsym=${coin}&tsym=${currency}&limit=24&e=${exchange}`;
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
        }

        default: {
            apiURL += `histoday?fsym=BTC&tsym=USD&limit=30&e=CCCAGG`;
            break;
        }
    }
    console.log(apiURL);

    axios.get(apiURL)
        .then(function (response) {
            res.status(200).json(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
});

app.listen(app.get('port'), function() {
    console.log(`Server is listening on localhost:${app.get('port')}`);
});