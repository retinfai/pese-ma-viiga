import React from "react";
import {useLocation} from "react-router-dom"
import PeseDisplay from "../PeseDisplay";
import Button from "../Button";
function PesePage(props){
    const location = useLocation();

    console.log("State Object: ",location.state);
    const peseObject = location.state;
    const peseClipboard = peseObject.pese.replace(new RegExp(";", 'g'),", \n").replace(new RegExp(":", 'g'), "\n\n");

    // console.log(peseClipboard);



    function onClick(){
        navigator.clipboard.writeText(peseClipboard);
        document.getElementById("copy-message").style.visibility = "visible";
    }

    return (
        <div className={"center"}>
            <div className={"pese-page-header"}>
                <h1>Pese {peseObject.peseNum}</h1>
            </div>

            <div>   
                <Button 
                    label="Copy to clipboard"
                    id="clipboard"
                    onClick={onClick}
                />
                <Button 
                    label="Present"
                    id="clipboard"
                />
            </div>
            <div>
                <p id ="copy-message">Copied Successfully!</p>
            </div>
            
            <PeseDisplay 
                pese={peseObject.pese}
            />

            
        </div>
    )
}

export default PesePage;