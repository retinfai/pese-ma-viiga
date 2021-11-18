import React from "react";


function Button(props){
    return (
        <span className={"whole-line"}>
            <button 
                name = {props.name}
                onClick= {props.onClick} 
                type={props.type} 
                className={"button"}
            >{props.label}</button>
        </span>
      
    )
}

export default Button