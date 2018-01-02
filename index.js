var express = require('express');
var compression = require('compression');
var morgan = require('morgan');


var routes = require('./routes/router');



var app = express();
app.use(compression());
app.use(morgan('combined'));
app.set('port', 3110);
app.use(routes);


app.listen(app.get('port'), function() {
    console.log(`Server is listening on localhost:${app.get('port')}`);
});