const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// get a list of movies from db
router.get('/movies/:title', (req, res) => {
    // var n = req.body.n;
    //  Movie.find().skip(2*(n-1)).limit(2).then(
    //      (movies) => {
    //             res.send(movies);
    //      });
    let paramTitle = req.params.title;
    Movie.findOne({title:paramTitle}, (err, movie) => {
        if (err) return res.status(500).send(err);
            console.log(movie);
            return res.send(movie);
    });
    // res.send('get request HEARD');
    // console.log('GET request');
});

// the number skipped should be the number total/retrieved in the array
router.post('/pagemovies', (req, res) => {
    var n = req.body.n;
    Movie.find().skip(n).limit(2).then((movies) => {
                    // res.send(movies.map(movies => movies.title));
                    res.send(movies);
                    console.log(movies);
             });
});


// add a new movie to the db
router.post('/movies', (req, res) => {
    req.body.title = req.body.title.toLowerCase();
    Movie.create(req.body).then((movie) => {
         res.send(movie);
        console.log(movie);
    });
});


// update a movie in the db
router.put('/movies/:title', (req, res) => {
    let paramTitle = req.params.title;
    for (const char in paramTitle) {
        if (paramTitle[char] === '_') {
          paramTitle = paramTitle.replace('_', ' ');
        }
      }
    Movie.findOneAndUpdate(
        // the id of the item to find
        {title:paramTitle},
        // {_id:paramTitle},

        // the change to be made. Mongoose will smartly combine your existing 
        // document with this change, which allows for partial updates too
        req.body,
        
        // an option that asks mongoose to return the updated version 
        // of the document instead of the pre-updated one.
        {new: true},
        
        // the callback function
        (err, movie) => {
        // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(movie);
        }
    )
});


// delete a movie from the db
router.delete('/movies/:title', (req, res) => {
    console.log('DELETE request');
    console.log(req.params.title);
    let paramTitle = req.params.title;
    for (const char in paramTitle) {
        if (paramTitle[char] === '_') {
          paramTitle = paramTitle.replace('_', ' ');
        }
      }
    Movie.findOneAndRemove(
        {title:paramTitle}, 
        (err, movie) => {
        // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(movie);
        })
});


// sort by First character only
router.post('/movies/filterchar', (req, res) => {
    console.log(req.body);
    let char = req.body.char;
    let n = req.body.n;
    Movie.find({title: new RegExp('^' + char , 'i')}).sort({title:1}).skip(n).limit(1).then((movies) => {
            res.send(movies);
        });
});

// sort by genre only
router.post('/movies/filtergenre', (req, res) => {
    console.log(req.body);
    let genre = req.body.genre;
    let n = req.body.n;
    Movie.find({genre: new RegExp('^' + genre , 'i')}).sort({title:1}).skip(n).limit(1).then((movies) => {
            res.send(movies);
        });
});

// sort by Both genre and first character
router.post('/movies/filterboth', (req, res) => {
    console.log(req.body);
    let char = req.body.char;
    let genre = req.body.genre;
    let n = req.body.n;
    Movie.find({title:new RegExp('^' + char , 'i'), genre:genre}).sort({title:1}).skip(n).limit(1).then((movies) => {
            res.send(movies);
        });
});

module.exports = router;