let mongoose = require("mongoose");

// Estados Schema
let estadoSchema = mongoose.Schema({
    tipo:{
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
});

let Estado = module.exports = mongoose.model('Estados', estadoSchema);