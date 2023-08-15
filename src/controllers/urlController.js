const Url = require('../models/urlModel');

//  Função para gerar um código aleatorio
function generateCode() {
    let stringAleatoria = "";
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 6; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    };
    return stringAleatoria;
};

const urlController = {
    create: async (req, res) => {
        try {
            let customUrl = req.body.customUrl;
            let url = req.body.url;
            let urlEncurtada = customUrl || generateCode();
            const dados = {
                url,
                urlEncurtada
            };

            const resultado = await Url.create(dados);
            res.json({ message: 'URL criado com sucesso!', resultado });
        } catch (error) {
            console.log('Erro ao criar Url')
        }
    },

    read: async (req, res) => {
        try {
            const urls = await Url.find();
            res.json(urls);
        } catch (error) {
            console.log('Falha ao listar Urls', error);
        };
    },

    delete: async (req, res) => {
        try {
            const id = req.params._id;
            const resultado = await Url.findByIdAndDelete(id);
            res.json({ message: 'URL excluída com sucesso!' });
        } catch (error) {
            res.json({ message: 'Erro ao excluir URL', error })
        }
    },

    redirect: async (req, res) => {
        try {
            const urlEncurtada = req.params.urlEncurtada;
            const resultado = await Url.findOne({ urlEncurtada });
            if (!resultado) {
                res.status(404);
            };

            resultado.visitas++;
            await resultado.save();
            res.redirect(resultado.url);
        } catch (error) {
            console.log('Erro ao redirecionar URL encurtada!', error);
        };

    },
};

module.exports = urlController;