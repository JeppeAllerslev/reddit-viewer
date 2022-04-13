export default function urlFilter(urlArg) {
   let url = urlArg.split("?")[0];
   return isGfycat(url) || isImage(url) || isRedgifs(url) || isVideo(url) || isGifv(url);
}

export function isImage(url) {
   return url.endsWith(".jpg") || url.endsWith(".png") || url.endsWith(".gif") || url.endsWith(".jpeg");
}

export function isVideo(url) {
   return url.endsWith(".mp4") || url.endsWith(".webm");
}

export function isGifv(url) {
   return url.endsWith(".gifv");
}

export function isGfycat(url) {
   return url.includes("gfycat.com");
}

export function isRedgifs(url) {
   return url.includes("redgifs.com");
}
