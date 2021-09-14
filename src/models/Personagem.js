const mongoose = require("mongoose");

const personagemSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    nascimento: {
        type: String,
        require: true,
    },
    genero: {
        type: String,
        require: true,
    },
    filmes: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("Personagens", personagemSchema);