import React from "react";
import Header from "./Header"
import SearchArea from "./SearchArea";


function HomePage(){
    return(
        <div className={ "center" }>
            <Header />
            <SearchArea />
        </div>
        
    )

}

export default HomePage;