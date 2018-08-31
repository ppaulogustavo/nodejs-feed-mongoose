const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

module.exports = () => {    

    const usuario = Schema({
        nome: String,
        imagePath: String,
        id: Number
    }, {_id: false});

    const comentario = Schema({
        descricao: String,
        autor: usuario,
        criado: {
            type: Date,
            default: Date.now
        }
    });

    const time = Schema({
        nome: String,
        placar: Number
    }, {_id: false});

    const resultadoJogo = Schema({
        timeA: time,
        timeB: time
    }, {_id: false});

    const jogo = Schema({
        nomeJogo: String,
        estado: String,
        cidade: String,
        campo: String,
        resultadoJogo: resultadoJogo
    }, {_id: false});

    const feed = Schema({
        tipo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: false
        },
        data: {
            type: Date,
            required: true,
            default: Date.now
        },
        comentarios: [comentario],
        curtidas: Number,
        usuarios: [usuario],
        autor: usuario,
        post: Schema.Types.Mixed
    });

    return mongoose.model('feeds', feed);
};