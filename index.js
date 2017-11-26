var express = require('express');
var compression = require('compression');


var routes = require('./routes/router');



var app = express();
app.use(compression());
app.set('port', process.env.PORT || 3110);

// //For production testing
app.use(express.static(__dirname + "/dist")); //serves css files

app.use(routes);


app.listen(app.get('port'), function() {
    console.log(`Server is listening on localhost:${app.get('port')}`);
});