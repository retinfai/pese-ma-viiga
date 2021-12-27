import React from "react";

function SearchBar(props){
    
    function onKeyPressed(e) {
        if (e.key === "Enter") {
          props.onClick();
        }
    }


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
                onKeyDown={onKeyPressed}
                />
                
        </span>
        )
}

export default SearchBar