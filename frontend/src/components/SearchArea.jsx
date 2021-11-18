import React from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";



function SearchArea(props){
    
    return (
        <div>
            <iframe name="dummyframe" id="dummyframe"></iframe>

            <form action="http://localhost:2000/search" method="post" target="dummyframe"> 
                <SearchBar 
                    name="searchBar"
                    placeholder="Find a Pese"
                />
                <Button 
                    label="Search"
                    type="submit"
                    // onClick={postSearch}
                />
            </form>
           
            
        </div>
       
    )
}

export default SearchArea


// function postSearch(){
//     userInput = document.getElementById("search-bar").value;
//     const data = {
//         searchValue: userInput
//     }
//     console.log(data);
//     fetch('http://localhost:2000/search', {
//         method: 'POST',
//         headers: {},
//         body: data
//     })
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(rejected => {
//         console.log(rejected);
//     });

// }