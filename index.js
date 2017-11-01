var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var axios = require('axios');



var app = express();
app.use(compression());
app.use(morgan('combined'));



app.get('/api/coins/top', function(req,res) {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
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
    axios.get(`https://min-api.cryptocompare.com/data/histoday?fsym=${req.params.coin}&tsym=USD&limit=30&&e=CCCAGG`)
        .then(function (response) {
            res.status(200).json(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
});

app.listen(3110, function() {
    console.log('Server is listening on localhost:3110');
});