const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create movie schema and model

const MovieSchema = new Schema({
    title: {
        type: String,
        required: [true,'Name field is required']
    },
    description: {
        type: String
    }
});

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;