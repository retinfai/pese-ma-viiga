import React from "react";

function Button(props){

    return (
        <span className={"whole-line"}>
            <button className={"button"}><span>{props.name}</span></button>
        </span>
    )
}

export default Button