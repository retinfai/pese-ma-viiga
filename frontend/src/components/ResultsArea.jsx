import React from "react";
import PeseCard from "./PeseCard";

function ResultsArea(props){

    const results = props.results.results;
    console.log(results);

    if (results.length === 0){
        return (
            <div className="results-area">
                <h2 className={"no-results"}>Sorry no peses match your search</h2> 
            </div>
        )
    }

    return(
        <div className={"results-area"}>

            {
                results.map((item)=>{
                return (
                    
                    <PeseCard
                        peseNum = {item.number}
                        pese = {item.pese}
                    />
             
                )
                })
            }
            
        </div>
    )
}

export default ResultsArea;