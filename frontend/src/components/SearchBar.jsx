import React, { useState } from 'react';

function SearchBar(props){
    
    const [value, setValue] = useState("");

    function onKeyPressed(e) {
        setValue(e.target.value);
        props.onClick();
    }


    return (
        <span className={props.styling}>
        
            <input 
                id="search-bar"
                name={props.name} 
                type="text" 
                placeholder={props.placeholder} 
                spellCheck="false"
                autoComplete="off"
                value={value}
                onChange={onKeyPressed}
                />
                
        </span>
        )
}

export default SearchBar