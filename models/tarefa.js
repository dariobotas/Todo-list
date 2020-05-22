let mongoose = require("mongoose");

// To-do Schema
let tarefaSchema = mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    estadoDaTarefa: {
        type: String,
        required: true
    },
    descricaoDetalhada:{
        type: String,
        required: false
    },
    importancia: {
        type: String,
        required: false
    },
    urgencia: {
        type: String,
        required: false
    },
    prioridade: {
        type: Number,
        required: false
    },
    tempoMinimo: {
        type: Number,
        required: false
    },
    tempoUtilizado: {
        type: Number,
        required: false
    },
    categoria: {
        type: String,
        required: false
    },
    subcategoria: {
        type: String,
        required: false
    }
});

let Tarefa = module.exports = mongoose.model('Tarefas', tarefaSchema);