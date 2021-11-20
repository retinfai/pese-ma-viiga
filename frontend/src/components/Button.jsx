import React from "react";


function Button(props){
    return (
        <span className={props.styling}>
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