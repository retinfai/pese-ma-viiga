import React from "react";


function Button(props){
    return (
        <span className={"whole-line"}>
            <button onClick= {props.onClick} type={props.type} className={"button"}>{props.name}</button>
        </span>
    )
}

export default Button