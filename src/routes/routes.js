const express = require('express');
const router = express.Router();

const urlController = require('../controllers/urlController');

// Rota principal 
router.get('/', (req, res) => {
    res.send('Bem vindo a API');
});

//  Cria a URL encurtada
router.post('/new', urlController.create);

//  Listando URLS
router.get('/links', urlController.read);

//removendo URLS
router.delete('/links/:_id', urlController.delete);

//  Redirecionando a URL encurtada
router.get('/:urlEncurtada', urlController.redirect);

module.exports = router;