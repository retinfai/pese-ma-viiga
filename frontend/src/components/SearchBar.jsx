import React from "react";

function SearchBar(props){

    return (
        <span className={"whole-line"}>
            <input type="text" placeholder={props.placeholder} spellCheck="false"/>
        </span>
        )
}

export default SearchBar