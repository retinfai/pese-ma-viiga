// ------------- SET UP
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));

// ------------- MAIN CODE

app.get("/", function(req,res){
  res.render("index");
});









app.listen(3000, function(){
  console.log("Server has started on PORT 3000");
});
