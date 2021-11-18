const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({extended: true}));
// app.use((requestSet, responseSet, next) => {
//   // responseSet.header("Access-Control-Allow-Origin", "*")
//   responseSet.header('Access-Control-Allow-Origin: *');
//   requestSet.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
//   responseSet.header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// });

app.get("/", function(req,res){
  res.send("Backend API Working");
});

app.post("/search", function(req,res){
  console.log(req.body);
  // console.log(res);
  res.header({"Access-Control-Allow-Origin": "*"});
  res.send({response: "Hello"});
});

app.listen(2000,function(){
  console.log("Server Started on Port 2000");
});
