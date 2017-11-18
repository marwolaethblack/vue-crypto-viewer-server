var express = require('express');
var compression = require('compression');
var morgan = require('morgan');


var routes = require('./routes/router');



var app = express();
app.use(compression());
app.use(morgan('combined'));
app.set('port', process.env.PORT || 3110);
app.use(routes);

//For production testing
// app.use(express.static(__dirname + "/dist")); //serves css files
//
// app.get('*', function(req,res) {
//     res.render(',/dist/index.html');
// });

app.listen(app.get('port'), function() {
    console.log(`Server is listening on localhost:${app.get('port')}`);
});