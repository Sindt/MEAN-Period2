var express = require('express');
var router = express.Router();
var jokes = require("./../model/jokes");

/* GET home page. */
router.get('/jokes', function (req, res, next) {
    res.render('index', {jokes: jokes.allJokes});
});

router.get('/joke', function (req, res, next) {
    res.render('index', {jokes: jokes.getRandomJoke});
});

module.exports = router;
