import React, { useState } from "react";

function SearchBar(props){

    const [userInput, setUserInput] = useState("");

    function onChange(event){
        setUserInput(event.target.value);
    }
    
    return (
        <span className={props.styling}>
        
            <input 
                id="search-bar"
                name={props.name} 
                type="text" 
                placeholder={props.placeholder} 
                spellCheck="false"
                value={userInput}
                onChange={onChange}
                autoComplete="off"
                />
                
        </span>
        )
}

export default SearchBar