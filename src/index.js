const express = require('express');
const port = process.env.PORT || 3000;
const routes = require('./routes/routes');
const Url = require('./models/urlModel');
const app = express();

//Permitindo acesso do VUE
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//  Usando JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Conectando com Banco de Dados
const connectDataBase = require('./db/db');
connectDataBase();

//  Definindo rota a ser usada
app.use('/', routes)

app.listen(port, () => {
    console.log('Server Rodando Com Sucesso!');
});