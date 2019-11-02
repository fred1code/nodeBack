const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

app.use(router);

router.get('/ruta1', function (req, res) {
    console.log(req.query);
    res.send('get response');
});

router.post('/ruta2', function (req, res) {
    console.log(req.body);
    res.send('post response');
});

router.put('/', function (req, res) {
    res.send('put response');
});


app.listen(3000);
console.log('aplicacion enable => http://localhost:3000');



