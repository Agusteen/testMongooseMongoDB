'use strict'

var mongoose = require('mongoose'); //cargamos el módulo
var app = require('./app');
mongoose.Promise = global.Promise;


var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

app.connect = function connect(opts) {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://admin1:admin1@ds161931.mlab.com:61931/test-mlab');
  console.log("connect");
  return mongoose.connection;
};


var Schema = new mongoose.Schema({
  name: String,
  age: String
});

var user = mongoose.model('empleados', Schema);
app.connect(options);

app.post('/new', function(req, res) {
  new user({
    name: req.body.name,
    age: req.body.age
  }).save(function(err, doc){
    if(err) res.json(err);
    else res.send('El usuario se registro correctamente');
  });

});
