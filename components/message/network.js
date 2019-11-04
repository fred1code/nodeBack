const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function (req, res) {
    controller.getMessages().then((messageList) => {
        response.success(req, res, messageList, 200);
    }).catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e);
    })
});

router.post('/', function (req, res) {
    // console.log(req.body);

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, "error 1", 500, 'algo salio mal');
        });

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
