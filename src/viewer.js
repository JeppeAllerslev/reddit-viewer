import React from "react";
import './styles/Viewer.css'

function Viewer({postUrl}) {
    return (
        <div className="viewer">
            <img id="mainImage" src={postUrl} alt=""/>
            <img id="bgImage" src={postUrl} alt=""/>
        </div>
    )
}

export default Viewer;