import React from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";

function SearchArea(props){

    return (
        <div>
            <SearchBar 
                placeholder="Find a Pese"
            />

            <Button 
                name="Search"
            />
        </div>
       
    )
}

export default SearchArea