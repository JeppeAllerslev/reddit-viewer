import React, { useEffect,useState } from "react";
import Viewer from "./viewer";
import BrowserControls from "./browsercontrols";
import {useSwipeable} from 'react-swipeable';

function ImageBrowser(props) {
   const [url, setUrl] = useState("./loading.gif");

   const handler = props.handler;

   useEffect(() => {
      setUrl("./loading.gif")
      handler.setSubreddit(props.subreddit);
      handler.setGetOptions(props.getOptions);
      setTimeout(() => {setUrl(handler.post.url); props.postUpdateFunction()}, 3000);
   }, [props.subreddit, props.getOptions]);

   const handlers = useSwipeable({
      onSwipedLeft: () => {nextImage()},
      onSwipedRight: () => {prevImage()}
   });

   function nextImage() {
      handler.nextUrl();
      setUrl(handler.post.url);
      props.postUpdateFunction();
   }

   function prevImage() {
      handler.prevUrl();
      setUrl(handler.post.url);
      props.postUpdateFunction();
   }

   function handleKeyDown(event) {
      if (event.code === "ArrowRight") {
         nextImage();
      } else if (event.code === "ArrowLeft") {
         prevImage();
      }
   }

   return (
      <div {...handlers} style={{ outline: "none" }} onKeyDown={handleKeyDown} tabIndex={-1}>
         <BrowserControls onNext={nextImage} onPrev={prevImage} />
         <Viewer postUrl={url} />
      </div>
   );
}

export default ImageBrowser;
