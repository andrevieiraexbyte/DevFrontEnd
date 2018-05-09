var express = require('express');
var router = express.Router();

var db = require('../db');

router.get('/', (req, res, next) => {
    db("cad_alunos").then((alunos) => {
        res.render('index', {
            alunos: alunos
        });
    }, next);
});

router.get('/add', (req, res, next) =>{
    res.render('add');
});

router.post('/', (req, res, next) =>{
    db("cad_alunos").insert(req.body).then((ids) => {
        res.redirect('/');
    },next)
});

router.get('/edit/:id', (req, res, next) =>{
    const {id} = req.params;

    db("cad_alunos").where("id", id).first().then((aluno) => {
        if (!aluno) {
            return res.render(400);
        }
        res.render("edit.njk", {
            aluno: aluno
        });
    },next)
});

router.put('/edit/:id', (req, res, next) =>{
    const {id} = req.params;

    db("cad_alunos").where('id', id).update(req.body).then((result) => {
        if (result === 0) {
            return res.send(400);
        }
        res.redirect('/')
    },next)
});

router.delete('/delete/:id', (req, res, next)=>{
    const {id} = req.params;

    db("cad_alunos").where('id', id).delete().then((result) =>  {
        if(result === 0){
            return res.send(400);
        }
        res.redirect('/');
    },next)
});

module.exports = router;