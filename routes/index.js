const express = require("express");
const router = express.Router();

const apiKey = "123";
const apiBaseUrl = "http://localhost:3030";
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = "http://image.tmdb.org/t/p/w300";

const movies = require("../data/movies");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/most_popular", (req, res) => {
  
  let page = req.query.page;
  if (page === undefined) {page = 0}
  if (req.query.api_key !== '123') {
    res.json("APIKEY  is wrong....");
  } else {
    let results = movies.filter((item) => (item.most_popular = true));
    const indexToStart = (page-1)*20
    results = results.slice(indexToStart,indexToStart+19)
    res.json({page , results})

  }
});

module.exports = router;
