import React from "react";


function Button(props){
    return (
        <span className={props.styling}>
            <button 
                name = {props.name}
                onClick= {props.onClick} 
                type={props.type} 
                className={"button"}
                id={props.id}
            >{props.label}</button>
        </span>
      
    )
}

export default Button