import React from "react";
import './styles/BrowserControls.css';

function BrowserControls({onNext, onPrev}) {
    return (
        <div id="prevNextButtons">
            <button onClick={onPrev} id="prevButton"><i className="fa fa-chevron-left"></i></button>
            <button onClick={onNext} id="nextButton"><i className="fa fa-chevron-right"></i></button>
        </div>
    )
}

export default BrowserControls;