let mongoose = require("mongoose");

// Urgência Schema
let urgenciaSchema = mongoose.Schema({
    tipo:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: false
    }
});

let Urgencia = module.exports = mongoose.model('Urgencia', urgenciaSchema);