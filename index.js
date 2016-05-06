var express = require('express');
var app = express();

var port = process.env.NODE_PORT || 1337;
app.use(express.static('web'));

app.listen(port);
console.log('App is serving on' + port);
