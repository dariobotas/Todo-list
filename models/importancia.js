let mongoose = require("mongoose");

// Importância Schema
let importanciaSchema = mongoose.Schema({
    tipo:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: false
    }
});

let Importancia = module.exports = mongoose.model('Importancia', importanciaSchema);