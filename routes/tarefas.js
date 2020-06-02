const express = require('express');
const router = express.Router();

// Bring in Models
let Tarefa = require('../models/tarefa');
let Estado = require('../models/estados');
let Importancia = require('../models/importancia');
let Urgencia = require('../models/urgencia');
let Prioridade = require('../models/prioridade');

// Add Route
router.get('/tarefas/add', function(req, res){
    res.render('add_todo',{
        titulo:'Adicionar tarefa'
    });
});

// Add Submit POST Route
router.post('/tarefas/add', function(req, res){
    let tarefa = new Tarefa();
    tarefa.nome = req.body.nome;
    tarefa.estadoDaTarefa = req.body.estadoDaTarefa = "Pendente";
    tarefa.descricaoDetalhada=req.body.descricaoDetalhada;
    tarefa.importancia=req.body.importancia;
    tarefa.urgencia=req.body.urgencia;
    tarefa.prioridade=req.body.prioridade;
    tarefa.tempoMinimo=req.body.tempoMinimo;
    tarefa.tempoUtilizado=req.body.tempoUtilizado;
    tarefa.categoria=req.body.categoria;
    tarefa.subcategoria=req.body.subcategoria;

    tarefa.save(function(err){
        if(err){
            console.log(err);
            return;
        }else{
            res.redirect('/');
        }
    });
});

//Get Single To-do list Route
router.get('/tarefas/:id', function (req, res){
    Tarefa.findById(req.params.id, function(err, tarefa){
        res.render('tarefa', {
            tarefa:tarefa
        });
    });
});

//router.post();

module.exports = router;