import React from "react";

function SearchBar(props){
    


    return (
        <span className={props.styling}>
        
            <input 
                id="search-bar"
                name={props.name} 
                type="text" 
                placeholder={props.placeholder} 
                spellCheck="false"
                value={props.barValue}
                autoComplete="off"
                />
                
        </span>
        )
}

export default SearchBar