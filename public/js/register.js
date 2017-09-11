document.querySelector("#sendForm").addEventListener("click", function(e) {
    e.preventDefault();
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let age = document.getElementById("age").value;
    let adresse = document.getElementById("adresse").value;
    let date = document.getElementById("date").value;
    let genre = document.getElementById("genre").value;
    if (nom === "" ||
        prenom === "" ||
        age === "" ||
        adresse === "" ||
        date === "" ||
        genre === "") {
        console.log("All filds must be completed");
        // document.querySelector("#statut").textContent = "Error";
        document.querySelector("#result").textContent = "All filds must be completed!";


    } else {
        console.log("OK");
        // document.querySelector("#statut").textContent = "Complete";
        document.querySelector("#result").textContent = "You have successfully completed all steps.";

        //SENDING AJAX REQUEST TO THE PAGE /EVENT/ADD HANDLED BY EXPRESS SERVER
        let params = "nom=" + nom + "&prenom=" + prenom + "&age=" + age + "&adresse=" + adresse + "&date=" + date + "&genre=" + genre;
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