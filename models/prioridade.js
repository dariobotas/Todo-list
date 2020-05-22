let mongoose = require("mongoose");

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

let Prioridade = module.exports = mongoose.model('Prioridade', prioridadeSchema);