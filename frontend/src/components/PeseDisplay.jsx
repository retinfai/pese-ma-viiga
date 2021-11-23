import React from "react";

function PeseDisplay(props){

    const pese = props.pese;

    pese.replace()

 

    return(
        <div className={"pese-display-area"}>
            {
                props.pese.split(":").map(
                    (verse, index) => {
                       return (  
                           <div key={index}>
                                {
                                    verse.split(";").map( (line,indexLine) => {
                                    
                                    return (<p key={indexLine}>{line}</p>)
                                    })

                                }
                            <br />
                           </div>
                          
                           
                        )
                    })
            }
            
        </div>
    )

}

export default PeseDisplay;

