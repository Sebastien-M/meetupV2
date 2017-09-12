let conect = document.querySelector('#formCo')
let sign = document.querySelector('#cobtn')
let welcom = document.querySelector('#rm');
let send = document.querySelector('#sendco');





conect.style.display = "none";


sign.addEventListener('click', function() {
    conect.style.display = "block";
    welcom.style.display = "none";

});

send.addEventListener('click', function() {
    let params = "nom=" + nom + "&prenom=" + prenom + "&password=" + password + "&adresse=" + adresse + "&date=" + date + "&mail=" + mail;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/register/add', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("Form sent");
                window.location = "/";
            }
        }
    }
    xhr.send(params);


})