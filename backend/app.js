const express = require('express');
const bodyParser = require('body-parser');

const app = express()


app.get("/", function(req,res){
  res.send("Backend API Working");
});

app.post("/search", function(req,res){
  res.render("../frontend/public/search.html");
  app.use(express.static(path.join("frontend", 'public')));
  // res.send({hi: "hello"});


});

app.listen(2000,function(){
  console.log("Server Started on Port 2000");
});
