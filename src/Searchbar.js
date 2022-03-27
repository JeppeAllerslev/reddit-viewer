import React from "react";
import "./styles/Searchbar.css";

function Searchbar({submitFunction}) {

    function handleSubmit(event) {
        event.preventDefault();
        let value = document.getElementById("subInput").value;
        console.log("form value: ", value);
        submitFunction(value);
    }

    function enterHandler(event) {
        if (event.key === "Enter") {
            handleSubmit(event);
        }
    }

    return (
        <div id="searchbar">
            <div id="searchbox">
                <input id="subInput" type="text" placeholder="Search subreddits" onKeyDown={enterHandler}/>
                <button onClick={handleSubmit}><i className="fa fa-search"></i></button>
            </div>
        </div>
    )
}

export default Searchbar;