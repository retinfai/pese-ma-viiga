//--------------- IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//--------------- SET UP
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//--------------- SET UP == HTTP REQUESTS
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

//--------------- SET UP == DATABASE
mongoose.connect('mongodb://localhost:27017/peseMaViigaDB');

const peseSchema = new mongoose.Schema({
  number: String,
  pese: String
})

const peseModel = new mongoose.model("Pese", peseSchema);
peseSchema.index({"pese": 'text'});

// peseModel.find({$text: {$search: "i"}})
// console.log(peseModel.find({$text: {$search: "sauni"}}));






function getFromDB(searchQuery){
  // console.log("Search Query is: " + searchQuery);
  // // const searchResults =
  const results = peseModel.find({$text: {$search: searchQuery}}).exec()

  return results


}


app.get("/", function(req,res){
  res.send("Backend API Working");
});


app.get("/search", function(req,res){
  console.log("Successfully sent form");
  // res.render("../frontend/")
});

app.post("/search", function(req,res){
  console.log();
  console.log("Received request:");
  console.log(req.body);

  // finalSearchResults = {results: []}
    const databaseResults = getFromDB(req.body.searchInput)
      .then(function(peses){
          const finalSearchResults = {results: []}
          peses.forEach(pese => finalSearchResults.results.push(pese))
          res.json(finalSearchResults)
        })


    // console.log(finalSearchResults);
});












app.listen(2000,function(){
  console.log("\nServer Started on Port 2000");
});
