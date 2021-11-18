const express = require('express');
const bodyParser = require('body-parser');

const app = express()

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.send("Backend API Working");
});


app.get("/search", function(req,res){
  console.log("Successfully sent form");
  // res.render("../frontend/")
});


app.post("/search", function(req,res){
  console.log(req.body);
  res.header({
    "Access-Control-Allow-Origin": "*"
});

  res.send({response: req.body});
});

app.listen(2000,function(){
  console.log("Server Started on Port 2000");
});
