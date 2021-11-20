import React from "react";
import Header from "../Header";
import SearchArea from "../SearchArea";




function HomePage(){
    return(
        <div className={ "absolute-center" }>
            <Header />
            <SearchArea 
                barName="searchBar"
                barStyling="whole-line"
                btnLabel="Search"
                btnStyling={"whole-line"}
                barPlaceHolder="Find a Pese"
            />
        </div>
    )

}

export default HomePage;