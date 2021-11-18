const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');

    next();
});


app.get("/", function(req,res){
  res.send("Backend API Working");
});


app.get("/search", function(req,res){
  console.log("Successfully sent form");
  // res.render("../frontend/")
});


app.post("/search", function(req,res){
  console.log("Received request:");
  console.log(req.body);
  res.json(req.body);
});

app.listen(2000,function(){
  console.log("Server Started on Port 2000");
});
