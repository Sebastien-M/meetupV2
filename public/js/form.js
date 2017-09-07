

document.querySelector("#endForm").addEventListener("click", function (e) {
    let title = document.getElementById("title").value;
    let orga = document.getElementById("orga").value;
    let cat = document.getElementById("cat").value;
    let loca = document.getElementById("location").value;
    let date = document.getElementById("date").value;
    let text = document.getElementById("text").value;
    if (title === "" ||
        orga === "" ||
        cat === "" ||
        loca === "" ||
        date === "" ||
        text === "") {
        console.log("All filds must be completed");
        document.querySelector("#statut").textContent = "Error";
        document.querySelector("#result").textContent = "All filds must be completed!";

    } else {
        console.log("OK");
        document.querySelector("#statut").textContent = "Complete";
        document.querySelector("#result").textContent = "You have successfully completed all steps.";

        //SENDING AJAX REQUEST TO THE PAGE /EVENT/ADD HANDLED BY EXPRESS SERVER
        let params = "name=" + title + "&location=" + loca + "&orga=" + orga + "&cat=" + cat + "&date=" + date + "&desc=" + text;
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/event/add', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log("Form sent");
                }
            }
        }
        xhr.send(params);
        
    }
})