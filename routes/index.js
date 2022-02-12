const express = require('express');
const res = require('express/lib/response');
const MovieModel = require('../models/Movie.model');
const router = express.Router();
const Movie = require('../models/Movie.model')



/* GET home page */
router.get('/movies/:id',(req,res)=>{    
    Movie.findById(req.params.id)
    .then((movie)=>{
        console.log("movie object", movie)
        res.render('movieDetails', movie)
    })
})



router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(movies=>{
        res.render("../views/movies", {movies})
    })
});



router.get('/', (req, res, next) => res.render('index'));

module.exports = router;
