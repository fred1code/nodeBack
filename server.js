const express = require('express');
//npm init
//npm i express
// sudo npm install -g nodemon
//npm i body-parser
const bodyParser = require('body-parser');

const response = require('./network/response');

const router = express.Router();

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

app.use(router);

router.get('/ruta1', function (req, res) {
    console.log(req.query);
    console.log(req.headers);
    res.header({
        "Autorisation": "Bearer aunt....",
    });
    // res.send('get response');
    response.success(req, res, 'primera respuesta', 200);

});

router.post('/ruta2', function (req, res) {
    console.log(req.body);
    if (req.query.error === "ok") {
        response.error(req, res, "error 1", 500, 'algo salio mal');
    } else {
        response.success(req, res, 'create post', 201)
    }
});

router.put('/', function (req, res) {
    response.success(req, res, 'create');
});

router.delete('/delete', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    //  res.status(201).send({error: '', body: 'eliminado correctamente'});
    response.success(req, res, 'delete');

});

app.use('/app', express.static('public'));


app.listen(3000);
console.log('aplicacion enable => http://localhost:3000');



