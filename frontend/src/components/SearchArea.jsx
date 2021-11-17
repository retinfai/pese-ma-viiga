import React from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";

function SearchArea(props){

    return (
        <div>
            <form action="/" method="post">
                <SearchBar 
                    placeholder="Find a Pese"
                />
                <Button 
                    name="Search"
                    type="submit"
                />
            </form>
             
        </div>
       
    )
}

export default SearchArea