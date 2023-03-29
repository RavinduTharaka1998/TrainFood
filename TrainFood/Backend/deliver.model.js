const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Delivers = new Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    nic: {
        type: String
    },
    station: {
        type: String
    }
}, {
    collation: 'delivers'
});

module.exports = mongoose.model('Delivers',Delivers);