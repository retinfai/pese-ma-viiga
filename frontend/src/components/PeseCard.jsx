import React from "react";

function PeseCard(props){
    
    // const peseNum = props.pese.number;
    // const pese = props.pese.pese;

    function hello(){
        console.log(props.peseNum);
    }

    return (
              <div className={"card"} onClick={hello}>
                
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