import React from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import {useNavigate} from "react-router-dom";

function SearchArea(props){
    
    const navigate = useNavigate();

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

            navigate('/search',{state:{id:1,name:'sabaoon'}});

    }

   
   


    return (
        <div>
                <SearchBar 
                    name="searchBar"
                    placeholder="Find a Pese"
                    id="search-bar"
                />
                {/* <NavLink to={{
                    pathname: '/search',
                    state: {id: 1, name: 'sabaoon', shirt: 'green'}
                    }} 
                    onClick={getSearchResults}> */}

                    <Button 
                        label="Search"
                        onClick={getSearchResults}
                    />
                {/* </NavLink> */}
        </div>
       
    )
}

export default SearchArea
