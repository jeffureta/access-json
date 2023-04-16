const customerForm = document.querySelector("#customer-form");
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const mobile = document.querySelector('#mobile');
const submitButton = document.querySelector('#submit-button');

function afterSubmit(e) {
    e.preventDefault();

    let data = {
        "first name": firstName.value,
        "last name": lastName.value,
        "email address": email.value,
        "mobile": mobile.value
    };

    const url = "https://script.google.com/macros/s/AKfycbyPuOt8OCQsXvrCWqhT-2wp7iici3BbYKBfwZpimcS5h6dMaML4J_LkBbVZA00VinI/exec"

    fetch(url, {
        // basic post request
        method: "POST", 
        cache: "no-cache", 
        redirect: "follow", 
        referrerPolicy: "no-referrer", 
        body: JSON.stringify(data), 
    })
    .then(response => response.json())
    .then(response => {console.log(response)});
}

customerForm.addEventListener("submit", afterSubmit);
