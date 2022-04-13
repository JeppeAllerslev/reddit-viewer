import React from "react";
import { useEffect } from "react";
import './styles/Viewer.css'
import getElement from "./reddit/urlHandler"

function Viewer({ postUrl }) {

    const [media, setMedia] = React.useState(<img src="" alt=""/>);

    useEffect(async () => {
        console.log("Viewer: ", postUrl);
        const element = await getElement(postUrl);
        setMedia(element);
    }, [postUrl]);

    return (
        <div className="viewer">
            <div id="mainMedia">
                {media}
            </div>
        </div>
    )
}

export default Viewer;
