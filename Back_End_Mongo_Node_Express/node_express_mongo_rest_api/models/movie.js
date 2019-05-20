const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create movie schema and model

const MovieSchema = new Schema({
    title: {
        type: String,
        required: [true,'YO title field is required']
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    genre: {
        type: String
    },
    rating: {
        type: Number
    }
});



const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;