/**
 * Created by Sindt on 06-03-2016.
 */
var random = require("random-js")();

var jokes = ["A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
];


function getRandom() {
    var value = random.integer(0, jokes.length-1);
    console.log(value)
    return jokes[value];
}

module.exports = {
    allJokes: jokes,
    getRandomJoke: getRandom()
};
