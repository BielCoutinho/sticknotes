/**
 * Modelos de dados das notas
 * Ciração da coleção
 */

//Importação do rescuros do mongoose
const { model, Schema } = require('mongoose')


//Criação da estrutura da coleção
const noteSchema = new Schema({
    texto: {
        type: String,
    },
    cor: {
        type: String
    }
}, { versionKey: false })

//exportar o modelo de dados para main
module.exports = model('Notas', noteSchema)