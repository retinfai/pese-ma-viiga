import React from "react";
import {useLocation} from "react-router-dom"
import PeseDisplay from "../PeseDisplay";
import Button from "../Button";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function PesePage(props){
    const location = useLocation();

    console.log("State Object: ",location.state);
    const peseObject = location.state;
    const peseClipboard = peseObject.pese.replace(new RegExp(";", 'g'),", \n").replace(new RegExp(":", 'g'), "\n\n");




    function copyOnClick(){
        navigator.clipboard.writeText(peseClipboard);
        document.getElementById("copy-message").style.visibility = "visible";
    }

    const handle = useFullScreenHandle();


    return (
        <div className={"center"}>
            <div className={"pese-page-header"}>
                <h1>Pese {peseObject.peseNum}</h1>
            </div>

            <div>   
                <Button 
                    label="Copy to clipboard"
                    id="clipboard"
                    onClick={copyOnClick}
                />
                <Button 
                    label="Present"
                    id="clipboard"
                    onClick={handle.enter}
                />
            </div>
            <div>
                <p id ="copy-message">Copied Successfully!</p>
            </div>
            
            <PeseDisplay 
                pese={peseObject.pese}
            />

            <FullScreen handle={handle}>
                <body>
                <PeseDisplay 
                    pese={peseObject.pese}
                />
                </body>
               
            </FullScreen>
            
        </div>
    )
}

export default PesePage;