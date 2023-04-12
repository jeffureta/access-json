// this works on live server and on github
// https://jeffureta.github.io/access-json/
// link below to google apps script 
// https://drive.google.com/drive/folders/1ESPmLO1AIgiccEd-7is9TSdR70zaksus
function testGetJSON() {

    // version 0.1 url get-json-google-script
    const url = "https://script.google.com/macros/s/AKfycbzUO8tOvGWfJHomGBanHYL2UJLXEozXAeBJ6TH8GMSzM-3WpjZeTmPZMRwxkFy8XzXZ/exec"

fetch(url)
    .then(data => data.json()).then()
    .then(data => {
        document.querySelector("#app").textContent = data[0].status;
    })
}

document.querySelector("#get-json-data").addEventListener("click", testGetJSON);
