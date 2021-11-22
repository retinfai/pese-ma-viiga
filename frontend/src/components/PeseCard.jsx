import React from "react";
import {useNavigate} from "react-router-dom";
function PeseCard(props){
    
    // const peseNum = props.pese.number;
    // const pese = props.pese.pese;

    const navigate = useNavigate();

    function toPesePage(){
        navigate("/pese-" + props.peseNum, {state:{
                                                    peseNum: props.peseNum,
                                                    pese: props.pese
        }})
    }

    return (
              <div className={"card"} onClick={toPesePage}>
                
                <div className={"card-top"}>
                    <h1 className={"card-header"}>Pese {props.peseNum}</h1>
                    
                </div>
                <div className={"card-bottom"}>

                    <p className={"pese-preview"}> {props.pese.substring(0,45).replace(new RegExp(";", 'g'),", ").replace(new RegExp(":", 'g'), " ").concat("...")}</p>

                </div>
                
            
            </div>
           


        
    )

}

export default PeseCard;