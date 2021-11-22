import React from "react";
import {useLocation} from "react-router-dom"
import PeseDisplay from "../PeseDisplay";

function PesePage(props){
    const location = useLocation();

    console.log("State Object: ",location.state);
    const peseObject = location.state;

    return (
        <div>
            <div className={"pese-page-header"}>
                <h1>Pese {peseObject.peseNum}</h1>
            </div>

            <PeseDisplay 
                pese={peseObject.pese}
            />



        </div>
    )
}

export default PesePage;