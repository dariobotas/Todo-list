const express = require('express');
const router = express.Router();

// Bring in Models
let Tarefa = require('../models/tarefa');
let Estado = require('../models/estados');
let Importancia = require('../models/importancia');
let Urgencia = require('../models/urgencia');
let Prioridade = require('../models/prioridade');
let Categoria = require('../models/categoria');

// Add Route
router.route('/')
.get((req, res) => {
    res.render('index',{
        titulo:'Adicionar tarefa'
    });
})
// Add Submit POST Route
.post((req, res) => {
    let tarefa = new Tarefa();
    tarefa.nome = req.body.nome;
    tarefa.estadoDaTarefa = req.body.estadoDaTarefa ? req.body.estadoDaTarefa : Estado.P;
    tarefa.descricaoDetalhada=req.body.descricaoDetalhada ? req.body.descricaoDetalhada : "";
    tarefa.importancia=req.body.importancia ? req.body.importancia : Importancia.N;
    tarefa.urgencia=req.body.urgencia ? req.body.urgencia : Urgencia.N;
    tarefa.prioridade=Prioridade(tarefa.importancia, tarefa.urgencia);
    tarefa.tempoMinimo=req.body.tempoMinimo ? req.body.tempoMinimo : 30;
    tarefa.tempoUtilizado=req.body.tempoUtilizado ? req.body.tempoUtilizado : 0;
    tarefa.categoria=req.body.categoria ? req.body.categoria : Categoria.T;
    tarefa.subcategoria=req.body.subcategoria ? req.body.subcategoria : "";

    tarefa.save(function(err){
        if(err){
            console.log(err);
            return;
        }else{
            res.redirect('/');
        }
    });
});

//delete task
router.delete('/:id', (req, res) => {
    let tarefa;
    let query = {_id:req.params.id}

    Tarefa.findById(req.params.id, (err, tarefa) => {
        Tarefa.remove(query, function(err) {
            if(err){
                console.log(err);
            }
            res.send('Success');
        });
    });
});

//Get Single To-do list Route
router.get('/add/:id', function (req, res){
    Tarefa.findById(req.params.id, function(err, tarefa){
        res.render('tarefa', {
            tarefa:tarefa
        });
    });
});

//.post();

module.exports = router;