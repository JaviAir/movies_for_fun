const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// get a list of movies from db
router.get('/movie', (req, res) => {
    var n = req.body.n;
     Movie.find().skip(2*(n-1)).limit(2).then(
         (movies) => {
                res.send(movies);
                
         });


    console.log('GET request');
    // res.send([{title: 'Titanic'},
    //          {title: 'Spider-Man', description: 'PlaceHolder description here.'},
    //          {title: 'Harry Potter', description: ''},
    //          {title: 'Star-Wars', description: 'A long time ago in a galaxy far, far, away.'}]);
});


router.post('/pagemovies', (req, res) => {
    var n = req.body.n;
     Movie.find().skip(2*(n-1)).limit(2).then(
         (movies) => {
                // res.send(movies.map(movies => movies.title));
                res.send(movies);
                console.log(movies);
         });
});


// add a new movie to the db
router.post('/movies', (req, res) => {
    Movie.create(req.body).then((movie) => {
         res.send(movie);
        console.log(movie);
    });
});


// update a movie in the db
router.put('/movies', (req, res) => {
    console.log('PUT request');
    res.send(
             {title: 'Spider-Man', description: 'PlaceHolder description here.'});
});


// delete a movie from the db
router.delete('/movies', (req, res) => {
    console.log('DELETE request');
    res.send(
             {title: 'Spider-Man', description: 'PlaceHolder description here.'});
});


module.exports = router;