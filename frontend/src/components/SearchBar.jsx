import React, { useState } from "react";

function SearchBar(props){

    const [userInput, setUserInput] = useState("");

    function onChange(event){
        setUserInput(event.target.value);
    }
    
    return (
        <span className={"whole-line"}>
        
            <input 
                id={props.id}
                name={props.name} 
                type="text" 
                placeholder={props.placeholder} 
                spellCheck="false"
                value={userInput}
                onChange={onChange}
                />
                
        </span>
        )
}

export default SearchBar