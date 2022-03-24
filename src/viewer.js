import React from "react";
import './styles/Viewer.css'

function Viewer({post}) {
    return (
        <div className="viewer">
            <img id="mainImage" src={post} alt=""/>
            <img id="bgImage" src={post} alt=""/>
        </div>
    )
}

export default Viewer;