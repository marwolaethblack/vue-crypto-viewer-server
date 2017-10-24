var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var axios = require('axios');



var app = express();
app.use(morgan('combined'));
app.use(compression());

app.get('/api', function (req, res) {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {

        });
});


app.get('/', function(req, res) {
    res.json({message: "hello"});
});


app.listen(3005, function() {
    console.log('Server is listening on localhost:3005');
})