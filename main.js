// this works on live server and on github
// https://jeffureta.github.io/access-json/
// link below to google apps script 
// https://drive.google.com/drive/folders/1ESPmLO1AIgiccEd-7is9TSdR70zaksus
function testGetJSON() {

    // version 0.1 url get-json-google-script
    const url = "https://script.google.com/macros/s/AKfycbzUO8tOvGWfJHomGBanHYL2UJLXEozXAeBJ6TH8GMSzM-3WpjZeTmPZMRwxkFy8XzXZ/exec";

fetch(url)
    .then(data => data.json()).then()
    .then(data => {
        document.querySelector("#app").textContent = data[0].status;
    })
}


function addJSON() {

    // version 0.3 url get-json-google-script
    // everytime doPost() is changed you need to get the new url
    const url = "https://script.google.com/macros/s/AKfycbyMf4r8qm5r0xHuncRlXTvbxyF4XRrbSgFMEEfTpXxTuc5uWx58Plp7pyqvCtPbCC4l/exec";

    // fetch documentation below
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name: "JEFF"}), // body data type must match "Content-Type" header
    });
}
document.querySelector("#get-json-data").addEventListener("click", testGetJSON);

document.querySelector("#add-json-data").addEventListener("click", addJSON);
