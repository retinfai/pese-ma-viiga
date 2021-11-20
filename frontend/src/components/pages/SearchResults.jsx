import React from "react";
// import SearchBar from "../SearchBar";
// import Button from "../Button"
import {useLocation} from 'react-router-dom';
import SearchArea from "../SearchArea";

function SearchResults(){

    const location = useLocation();
    console.log(location.state)
    
    return (
        <div className={"center"}>
            <h1>Search Results:</h1>
            <div>
                <SearchArea 
                    btnLabel="Search"
                    barValue={location.state.searchQuery}
                    barPlaceHolder={location.state.searchQuery}
                />
            </div>

        </div>
     

    )
}

export default SearchResults;