const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// set up express app
const app = express();

app.use(bodyParser.json());

// connect to mongodb
mongoose.connect('mongodb://localhost/movieDatabase');
mongoose.Promise = global.Promise;

mongoose.connection.once('open', () => {
    console.log('Connection has been made to MongoDB');
}).on('error', (error) => {
    console.log('Conneciton error: ' + error);
});

// needed to run single page applications a.k.a Angular
app.use(cors({
    origin: 'http://localhost:4200'
}));

// initialize routes
app.use(require('./routes/api'));

// listen for requests
app.listen(process.env.port || 4000, () => {
    console.log('now listening for requests');
});