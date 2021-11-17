import React from "react";

function App(){
    return(

        <div className={ "center" }>
            <h1>Pese ma Viiga</h1>
            <div className={ "search-bar"}>
                <div>
                <input type="text" placeholder="Find a Pese" spellCheck="false"/>
                </div>
                <div className={"btn-container"}>
                    <button className="button">Search</button>
                </div>
                
            </div>
            
        </div>
        
    )

}

export default App;