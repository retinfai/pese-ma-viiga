import React from "react";
import SearchBar from "../SearchBar";
import {useLocation} from 'react-router-dom';

function SearchResults(){

    const location = useLocation();
    console.log(location.state)
    
    return (
        
        <SearchBar
            // value={location.state}
        />
    )
}

export default SearchResults;