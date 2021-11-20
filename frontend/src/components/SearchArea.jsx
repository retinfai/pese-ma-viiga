import React from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function SearchArea(props){
    
    function getSearchResults(props){
        
        const userInput = {searchInput: document.getElementById("search-bar").value}
        console.log(userInput);
        
        const options = {
            mode: 'cors',
            method: 'POST', 
            body: JSON.stringify(userInput), 
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

            {/* <form onSubmit={getSearchResults} target="dummyframe" autoComplete="off">  */}
                <SearchBar 
                    name="searchBar"
                    placeholder="Find a Pese"
                    id="search-bar"
                />
                <NavLink to="/search" onClick={getSearchResults}>
                    <Button 
                        label="Search"
                        type="submit"
                    />
                </NavLink>
            {/* </form> */}
           
        </div>
       
    )
}

export default SearchArea
