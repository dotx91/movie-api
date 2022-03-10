const express = require("express");
const router = express.Router();

const movies = require("../data/movies");

// GET movie/{movie_id}
router.get("/:id", (req, res) => {
  const requestId = req.params.id;

  const result = movies.find((movie) => {
    return movie.id === Number(requestId);
  });

  if (!result) {
    res.json({});
  } else {
    res.json(result);
  }
});

// GET movie/top_rated
router.get("/topRated", (req, res) => {
  const result = movies.sort((a, b) => {
    return b.vote_average - a.vote_average;
  });

  console.log(result);
  res.json(result);
});

router.get('/www', (req, res) => {
    console.log('HELLLO')
})

// POST movie/{movie_id}/rating

// DELETE movie/{movie_id}/rating

module.exports = router;
