const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Foods = new Schema({
    foodname: {
        type: String
    },
    price: {
        type: String
    },
    size: {
        type: String
    },
    station: {
        type: String
    }
}, {
    collation: 'foods'
});

module.exports = mongoose.model('Foods',Foods);