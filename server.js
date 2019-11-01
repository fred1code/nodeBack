const express = require('express');

var app = express();

app.use('/', function (req, res) {

    res.send('hello word');


});

app.listen(3000);
console.log('aplicacion enable');
