/*let mongoose = require("mongoose");

// Prioridade Schema
let prioridadeSchema = mongoose.Schema({
    tipo:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: false
    }
});

let Prioridade = module.exports = mongoose.model('Prioridade', prioridadeSchema);*/
let Importancia = require('../models/importancia');
let Urgencia = require('../models/urgencia');
let Prioridade = module.exports = function getPrioridade(eImportante, eUrgente) {
    if(this.eImportante == Importancia.I && this.eUrgente == Urgencia.U){
            return 1;//Crítica - tarefas que devem ser feitas imediatamente
        }else if(this.eImportante == Importancia.I && this.eUrgente == Urgencia.N){
            return 2;//Alta - tarefas que você vai marcar para fazer depois
        }else if(this.eImportante == Importancia.N && this.eUrgente == Urgencia.U){
            return 3;//Média - tarefas que você vai delegar para outras pessoas ou pode fazer quando as que têm prioridade 1 e 2 forem concluídas
        }else
            return 4;//Baixa - tarefas que você vai riscar da sua lista ou pode considerar como projetos a fazer no tempo livre
};