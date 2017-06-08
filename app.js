'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3977;

var http = require('http');
var path = require('path');

app.set('port', port);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');



app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //convierte a objetos json las peticiones

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Server escuchando en puerto---> " + app.get('port'));
})

module.exports = app;
