import React, { useState } from "react";
import Viewer from "./viewer";
import BrowserControls from "./browsercontrols";
import SubredditHandler from "./reddit/SubredditHandler.js";

const handler = new SubredditHandler("me_irl");

function ImageBrowser() {
   const [url, setUrl] = useState("");

   function nextImage() {
      handler.nextUrl();
      setUrl(handler.url);
   }

   function prevImage() {
      handler.prevUrl();
      setUrl(handler.url);
   }

   function handleKeyDown(event) {
      if (event.code === "ArrowRight") {
         nextImage();
      } else if (event.code === "ArrowLeft") {
         prevImage();
      }
   }

   return (
      <div style={{ outline: "none" }} onKeyDown={handleKeyDown} tabIndex={-1}>
         <BrowserControls onNext={nextImage} onPrev={prevImage} />
         <Viewer post={url} />
      </div>
   );
}

export default ImageBrowser;
