const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    urlEncurtada: {
        type: String,
        required: true
    },
    visitas: {
        type: Number,
        required: false,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    { timestamps: true }
);

const Url = mongoose.model('urls', urlSchema);

module.exports = Url;