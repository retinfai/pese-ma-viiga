import React from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import {useNavigate} from "react-router-dom";

function SearchArea(props){
    
    const navigate = useNavigate();

    function getSearchResults(props){
        const rawInput = document.getElementById("search-bar").value;
        const userInput = {searchInput: rawInput}
        // console.log(userInput);
        
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
                // console.log('Success:', data);
                navigate('/search',{state:{
                    searchQuery: rawInput,
                    peses: data
                }});
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });

            

    }

   
    return (
        <div className={"search-container"}>
                <SearchBar 
                    name={props.barName}
                    placeholder={props.barPlaceHolder}
                    styling={props.barStyling}
                    value={props.barValue}

                />
             
                <Button 
                    label={props.btnLabel}
                    onClick={getSearchResults}
                    styling={props.btnStyling}
                />

        </div>
       
    )
}

export default SearchArea
