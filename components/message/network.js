const express = require('express');
const response = require('../../network/response');
const router = express.Router();

router.get('/', function (req, res) {
    console.log(req.query);
    console.log(req.headers);
    res.header({
        "Autorisation": "Bearer aunt....",
    });
    // res.send('get response');
    response.success(req, res, 'primera respuesta', 200);
});

router.post('/', function (req, res) {
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

router.delete('/', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    //  res.status(201).send({error: '', body: 'eliminado correctamente'});
    response.success(req, res, 'delete');
});

module.exports = router;
