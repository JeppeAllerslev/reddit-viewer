import * as filters from "./urlFilter";

export default async function getElement(urlArg) {
    let url = urlArg.split("?")[0];
    if (filters.isImage(url)) return imageHandler(url);
    if (filters.isVideo(url)) return <video src={url} autoPlay controls loop muted />;
    if (filters.isGifv(url)) return <video src={url.replace(".gifv", ".mp4")} autoPlay controls loop muted />;
    if (filters.isGfycat(url)) return await gfycatHandler(url);
    if (filters.isRedgifs(url)) return await redgifsHandler(url);
}

function imageHandler(urlArg) {
    let url = urlArg;
    if (url.includes("preview.redd.it")) {
        url.replace("preview.redd.it", "i.redd.it");
    }
    return <img src={url} alt="" />;
}

async function gfycatHandler(url) {
    let gfycatId = url.split("/")[3];
    return fetch("https://api.gfycat.com/v1/gfycats/" + gfycatId.toLowerCase())
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(data =>  <video src={data.gfyItem.webmUrl} autoPlay controls loop muted />)
        .catch(error => {
            console.log("No gfycat found, trying redgifs");
            return redgifsHandler(url);
        });
}

async function redgifsHandler(url) {
    let redgifsId = url.split("/")[3] === "watch" ? url.split("/")[4] : url.split("/")[3];
    return fetch("https://api.redgifs.com/v2/gifs/" + redgifsId.toLowerCase())
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(data => <video src={data.gif.urls.hd} autoPlay controls loop muted />)
        .catch(error => <h1 style={{color: "red", fontSize: "100px"}}>404</h1>);
}

