import React from "react";

function Button(props){

    return (
        <span className={"whole-line"}>
            <button type={props.type} className={"button"}>{props.name}</button>
        </span>
    )
}

export default Button