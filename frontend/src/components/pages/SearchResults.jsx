import React from "react";
import {useLocation} from 'react-router-dom';
import SearchArea from "../SearchArea";

function SearchResults(){

    const location = useLocation();
    // console.log(location.state)
    let query = location.state ? location.state.searchQuery : "";
    const peses = location.state ? location.state.peses : [];

    console.log("state.query: ",query);

    console.log("state.pese: ",peses);

    
    return (
        <div className={"center"}>
            <h1>Search Results:</h1>
            
            <SearchArea 
                btnLabel="Search"
                barValue={query}
                barPlaceHolder={query}
                // barValue={query}
            />


            

        </div>
     

    )
}

export default SearchResults;