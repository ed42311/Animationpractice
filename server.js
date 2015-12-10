var http    = require('http');
var express = require('express');
var port = process.env.PORT || 8090;
var app = express();



app.use(express.static('public'));

app.listen(port);
console.log('Magic happens on port ' + port);