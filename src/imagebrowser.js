import React, { useEffect,useState } from "react";
import Viewer from "./viewer";
import BrowserControls from "./browsercontrols";
import SubredditHandler from "./reddit/SubredditHandler.js";

const handler = new SubredditHandler();
document.handler = handler;

function ImageBrowser(props) {
   const [url, setUrl] = useState("./loading.gif");

   useEffect(() => {
      setUrl("./loading.gif")
      handler.setSubreddit(props.subreddit);
      handler.setGetOptions(props.getOptions);
      setTimeout(() => {setUrl(handler.url)}, 3000);
   }, [props.subreddit, props.getOptions]);

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
         <Viewer postUrl={url} />
      </div>
   );
}

export default ImageBrowser;
