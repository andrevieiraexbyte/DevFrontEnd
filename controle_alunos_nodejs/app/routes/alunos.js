var express = require('express');
var router = express.Router();

var db = require('../db');

router.get('/', (req, res, next) => {
    db("alunos").then((alunos) => {
        res.render('index', {
            alunos: alunos
        });
    }, next);
});

router.get('/add', (req, res, next) =>{
    res.render('add');
});

router.post('/', (req, res, next) =>{
    db("alunos").insert(req.body).then((ids) => {
        res.redirect('/');
    },next)
});

router.get('/edit/:id', (req, res, next) =>{
});

router.put('/edit/:id', (req, res, next) =>{
    const {id} = req.params;

    db("alunos").where('id', id).update(req.body).then((result) => {
        if (result === 0) {
            return res.send(400);
        }
        res.redirect('/')
    },next)
});

router.delete('/delete/:id', (req, res, next)=>{
    const {id} = req.params;

    db("alunos").where('id', id).delete().then((result) =>  {
        if(result === 0){
            return res.send(400);
        }
        res.redirect('/');
    },next)
});

module.exports = router;