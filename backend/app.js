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

function getFromDB(searchQuery){

  const results = (searchQuery === "") ? peseModel.find() : peseModel.find({$text: {$search: `\"${searchQuery}\"`}}).sort({number: 1});

  return results;
}

function search(query){

}

//--------------- MAIN FUNCTIONALITY

app.post("/search", function(req,res){
  console.log();
  console.log("Received request:");
  console.log(req.body);

    const databaseResults = getFromDB(req.body.searchInput)
      .then(function(peses){
          const finalSearchResults = {results: []}
          peses.forEach(pese => finalSearchResults.results.push(pese))
          res.json(finalSearchResults)
        })

});


app.listen(2000,function(){
  console.log("\nServer Started on Port 2000");
});
