var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var axios = require('axios');



var app = express();
app.use(morgan('combined'));
app.use(compression());

app.get('/api', function (req, res) {
    axios.get('https://coinbin.org/lbc')
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {

        });
})


app.listen(3005, function() {
    console.log('Server is listening on localhost:3005');
})