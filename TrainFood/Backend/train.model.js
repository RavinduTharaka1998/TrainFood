const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Trains = new Schema({
    name: {
        type: String
    },
    arrival: {
        type: String
    },
    deparcher: {
        type: String
    },
    station: {
        type: String
    }
}, {
    collation: 'trains'
});

module.exports = mongoose.model('Trains',Trains);