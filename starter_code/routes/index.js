const express = require('express');
const router  = express.Router();
const movie    = require('../models/movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req,res,next) => {
  movie.find()
    .then((theMovieItemFreshFromDB)=>{
      res.render('moviesPage', {allTheMovies: theMovieItemFreshFromDB})
    })
    .catch((err)=> {
      next(err)
    })
});




module.exports = router;
