/**
 * Módulo de conexão com o banco de dados //
 * Uso do framework mongoose
 */

// importação do mongoose
//Não esquecer de instalar o módulo (npm i mongoose)
const mongoose = require('mongoose')

// configuração do banco de dados 
// ip/linkd do servidor, autenticação, 
// ao final da url o nome do banco de dados
// exemplo: /dbnotes
const url = 'mongodb+srv://admin:123Senac@cluster0.ytd5t.mongodb.net/dbnotes'

// validação (evitar a abertura de varias  conexões)
let connected = false

// método o para conectar com o banco de dados
const connectDB = async () => {
    if (!connected) {
        // conectar com o banco de dados
        try {
            await mongoose.connect(url)
            connected = true // setar a variavel 
            console.log('MongoDB Conectado')
            return true //verificação para o main
            
        } catch (error) {
            console.log(error)
            return false
        }

    }

}

// método o para desconectar com o banco de dados
const disconnectDB = async () => {
    if (connected) {
        // desconectado
        try {
            await mongoose.disconnect(url)
            connectDB = false // setar a variavel 
            console.log('MongoDB Desconectado')
            
        } catch (error) {
            console.error(error)
            
        }


    }
}
// exportar para o main os métodos conectar e desconectar
module.exports = {connectDB, disconnectDB}