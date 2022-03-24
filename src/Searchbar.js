import React from "react";
import "./styles/Searchbar.css";

function Searchbar() {
    return (
        <div id="searchbar">
            <div id="searchbox">
                <input type="text" placeholder="Search subreddits" />
                <button><i className="fa fa-search"></i></button>
            </div>
        </div>
    )
}

export default Searchbar;