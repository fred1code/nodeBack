//npm init
//npm i express
// sudo npm install -g nodemon
//npm i body-parser

const express = require('express');
const bodyParser = require('body-parser');
//const router = require('./components/message/network');
const router = require('./network/routes');

var app = express();


// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);
router(app);
app.use('/app', express.static('public'));





app.listen(3000);
console.log('aplicacion enable => http://localhost:3000');



