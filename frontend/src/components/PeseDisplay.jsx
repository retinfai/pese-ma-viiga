import React from "react";

function PeseDisplay(props){

    const pese = props.pese;

    pese.replace()

 

    return(
        <div className={"pese-display-area"}>
            {
                props.pese.split(":").map(
                    (verse, index) => {
                        console.log(verse)

                       return (  
                           <div key={index}>
                                {
                                    verse.split(";").map( (line,indexLine) => {
                                    console.log(line)
                                    return (<p key={indexLine}>{line}</p>)
                                    })

                                }
                            <br />
                           </div>
                          
                           
                        )
                    })
            }
            {/* <h1>hello</h1> */}
        </div>
    )

}

export default PeseDisplay;

