1)Why would you consider a Scripting Language as JavaScript as your Backend Platform.

Where Node really shines is in building fast, scalable network applications, as it’s capable of handling a huge number of simultaneous connections. Example, Chat programs.
You definitely don’t want to use Node.js for CPU-intensive operations

2)Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using for example Java/JAX-RS/Tomcat

Pros:
You can write code that works on both server and in the browser.
Node being single-threaded means that one does not need to care about the problems of synchronising between threads.
Javascript is the most popular programming language at the moment. This means that a lot of people have knowledge about it.

Cons:
Programmers themselves have to decide how to deal with concurrency, with the default being no concurrency at all.

4)Explain, using relevant examples, concepts related to the testing a REST-API using Node/JavaScript + relevant packages

App.js file:
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var router = express.Router();

router.get('/',function(req,res){
  res.json({"error" : false, "message" : "Hello !"});
});


Test access to homepage:
var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("SAMPLE unit test",function(){

  it("should return home page",function(done){

    // calling home page api
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.error.should.equal(false);
      done();
    });
  });

});

5)Explain, using relevant examples, the Express concept; middleware.

See calc.js

6)Explain, using relevant examples, how to implement sessions, and the legal implications of doing this.


router.get("/",function(req, res, next) {
  var newSession = req.session
  var name= req.query.name;

    newSession.name =  name.length > 10 ? name.substr(0,name.length-1): name;
    res.redirect("/session")
    return;

  res.setHeader('Content-Type', 'text/html');
  if (newSession.name) {
    newSession.views++
    res.write('<p>Welcome: ' + newSession.name + '</p>');
    res.end('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
  } else {
    newSession.views = 1
    res.end('<form ><input placeholder="Enter Your Name:" name="name" ><input type="submit"></form>');
  }
})
//-----------------------------------------------------------

//Another way of dealing with sessions:
//Import library to your app
var session = require('client-sessions');

//Next, add session handler middleware to your app.js file and set these basic configuration options:
app.use(session({
    cookieName: 'session',
    secret: 'random_string_goes_here',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
}));


7)Explain, using a relevant examples, your strategy for implementing a REST-API with Node/Express and show
how you can "test" all the four CRUD operations programmatically using for example the Request package.

Implementation:
var express = require('express');
var router = express.Router();

router.all("/",function(req,res,next){})

router.get("/",function(req,res, next){
  res.end(JSON.stringify(persons));
});

router.get("/:id",function(req,res, next){
  res.end(JSON.stringify(findPerson(req.params.id)));
});
router.put("/",function(req,res, next){});
router.delete("/",function(req,res, next){});
router.post("/",function(req,res, next){});

module.exports = router;


8)Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code.

See testModule.js
