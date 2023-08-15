const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

async function connectDataBase(){
    try {
        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.3hxu715.mongodb.net/?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB conectado com sucesso!');
    } catch (error) {
        console.log(`Falha ao conectar com MongoDB ${error}`);
    };
};

module.exports = connectDataBase;