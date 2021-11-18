import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";



function SearchArea(props){
    
    // const [searchResults, setSearchResults] = useState({});

    function postSearch(){

        fetch('http://localhost:2000/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
              firstParam: 'yourValue',
              secondParam: 'yourOtherValue',
            })
          })
            .then(res => res.json())
            .then(res => console.log(res));
    }

    return (
        <div>
            
            <SearchBar 
                placeholder="Find a Pese"
            />
            <Button 
                name="Search"
                type="button"
                onClick={postSearch}
            />
            
        </div>
       
    )
}

export default SearchArea