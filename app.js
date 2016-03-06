var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/calculator/:operation/:n1/:n2", function (req, res, next) {

    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
    };
    req.calculator = calculatorRequest;

    next();
});

app.get("/api/calculator/*", function (req, res) {
    var result = calc(req.calculator.operation, req.calculator.n1, req.calculator.n2);
    res.send("Result = " + result)
});

app.get('/', function(req, res, next) {
    res.send("Hello world");
});

function calc(operation, n1, n2) {
    if (operation === 'add') {
        return n1 + n2;
    }
    if (operation === 'sub') {
        return n1 - n2;
    }
    if (operation === 'mul') {
        return n1 * n2;
    }
    if (operation === 'div') {
        return n1 / n2;
    }
}

app.listen(3000, function () {
    console.log("Server started, listening on " + 3000);
});