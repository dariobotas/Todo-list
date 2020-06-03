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

/*Tarefa.getPrioridade = function (eImportante, eUrgente) {
    if(eImportante == Importancia.I && eUrgente == Urgencia.U){
            return 1;//Crítica - tarefas que devem ser feitas imediatamente
        }else if(eImportante == Importancia.I && eUrgente == Urgencia.N){
            return 2;//Alta - tarefas que você vai marcar para fazer depois
        }else if(eImportante == Importancia.N && eUrgente == Urgencia.U){
            return 3;//Média - tarefas que você vai delegar para outras pessoas ou pode fazer quando as que têm prioridade 1 e 2 forem concluídas
        }else
            return 4;//Baixa - tarefas que você vai riscar da sua lista ou pode considerar como projetos a fazer no tempo livre
    }
};*/

//Tarefa ;