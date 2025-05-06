



const mongoose = require('mongoose')





const url = 'mongodb://localhost:27017'


let connected = false


const connectDB = async () => {
    if (!connected) {

        try {
            await mongoose.connect(url)
            connected = true

            return true

        } catch (error) {

            return false
        }

    }

}


const disconnectDB = async () => {
    if (connected) {

        try {
            await mongoose.disconnect(url)
            connectDB = false


        } catch (error) {
            console.error(error)

        }


    }
}

module.exports = { connectDB, disconnectDB }