// let buton1 = document.querySelector("#send1");
// let buton2 = document.querySelector("#send2");
// buton1.addEventListener("click", (e)=>{e.preventDefault();})
// buton2.addEventListener("click", (e)=>{e.preventDefault();})



let step1 = document.getElementById("step1")
let step2 = document.getElementById("step2")
let step3 = document.getElementById("step3")
let send1 = document.getElementById("send1")
let send2 = document.getElementById("send2")
let finalsend = document.getElementById("finalsend")
let titre1 = document.getElementById('titre1');
let titre2 = document.getElementById('titre2');
let titre3 = document.getElementById('titre3');
let back1 = document.getElementById('back1');
let back2 = document.getElementById('back2');
let back3 = document.getElementById('back3');



send1.addEventListener('click', function(e) {
    step1.style.opacity = 0;
    step1.style.display = 'none';
    titre1.style.display = "none";
    titre2.style.display = "block";
    step2.style.display = 'block';

    setTimeout(function() {

        step2.style.opacity = 1;
    }, 10);
    e.preventDefault();

})
send2.addEventListener('click', function(e) {
    step2.style.opacity = 0;
    step2.style.display = 'none';
    titre2.style.display = "none";
    titre3.style.display = "block";
    step3.style.display = 'block';

    setTimeout(function() {

        step3.style.opacity = 1;
    }, 10);
    e.preventDefault();

})
back2.addEventListener('click', function(e) {
    titre2.style.display = "none";
    step2.style.display = 'none';
    step1.style.display = 'block';
    titre1.style.display = "block";


    setTimeout(function() {

        step1.style.opacity = 1;
    }, 10);

    e.preventDefault();

})
back3.addEventListener('click', function(e) {
    titre3.style.display = "none";
    step3.style.display = 'none';
    step2.style.display = 'block';
    titre2.style.display = "block";

    setTimeout(function() {

        step2.style.opacity = 1;
    }, 10);

    e.preventDefault();

})






document.querySelector("#sendForm").addEventListener("click", function(e) {
    e.preventDefault();
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let password = document.getElementById("pass").value;
    let adresse = document.getElementById("adresse").value;
    let date = document.getElementById("date").value;
    let mail = document.getElementById("mail").value;
    if (nom === "" ||
        prenom === "" ||
        pass === "" ||
        adresse === "" ||
        date === "" ||
        mail === "") {
        console.log("All filds must be completed");
        // document.querySelector("#statut").textContent = "Error";
        document.querySelector("#result").textContent = "All filds must be completed!";


    } else {
        console.log("OK");
        // document.querySelector("#statut").textContent = "Complete";
        document.querySelector("#result").textContent = "You have successfully completed all steps.";

        //SENDING AJAX REQUEST TO THE PAGE /EVENT/ADD HANDLED BY EXPRESS SERVER
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

    }
});