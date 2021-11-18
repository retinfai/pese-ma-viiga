import React from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";




function SearchArea(props){
    
    // http://localhost:2000/search
    function getSearchResults(props){
        
        const userInput = {searchInput: document.getElementById("search-bar").value}

        console.log(userInput);
        
        const options = {
            mode: 'cors',
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(userInput), // body data type must match "Content-Type" header
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
          }

        fetch("http://localhost:2000/search", options)
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
       

    }

    return (
        <div>
            <iframe title="dummyframe" name="dummyframe" id="dummyframe"></iframe>

            <form action=""onSubmit={getSearchResults} target="dummyframe" autoComplete="off"> 
                <SearchBar 
                    name="searchBar"
                    placeholder="Find a Pese"
                    id="search-bar"
                />
                <Button 
                    label="Search"
                    type="submit"
                />
            </form>
           
            
        </div>
       
    )
}

export default SearchArea
