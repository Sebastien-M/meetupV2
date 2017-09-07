"use strict";

// let title = document.getElementById("title").value;
// let orga = document.getElementById("orga").value;
// let cat = document.getElementById("cat").value;
// let loca = document.getElementById("location").value;
// let date = document.getElementById("date").value;
// let text = document.getElementById("text").value;



let step1 = document.getElementById("step1")
let step2 = document.getElementById("step2")
let step3 = document.getElementById("step3")
let send1 = document.getElementById("send1")
let send2 = document.getElementById("send2")
let finalsend = document.getElementById("finalsend")



send1.addEventListener('click', function(e) {
    step1.style.display = 'none';
    step2.style.display = 'block';
    e.preventDefault();

})
send2.addEventListener('click', function(e) {
    step2.style.display = 'none';
    step3.style.display = 'block';
    e.preventDefault();

})









// document.querySelector("#endForm").addEventListener("click", function(e) {
//     if (title === "" ||
//         orga === "" ||
//         cat === "" ||
//         loca === "" ||
//         date === "" ||
//         text === "") {
//         console.log("All filds must be completed");
//         document.querySelector("#statut").textContent = "Error";
//         document.querySelector("#result").textContent = "All filds must be completed!";

//     } else {
//         console.log("OK");
//         document.querySelector("#statut").textContent = "Complete";
//         document.querySelector("#result").textContent = "You have successfully completed all steps.";

//         //SENDING AJAX REQUEST TO THE PAGE /EVENT/ADD HANDLED BY EXPRESS SERVER
//         let params = "name=" + title + "&location=" + loca + "&orga=" + orga + "&cat=" + cat + "&date=" + date + "&desc=" + text;
//         let xhr = new XMLHttpRequest();
//         xhr.open('POST', '/event/add', true);
//         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === XMLHttpRequest.DONE) {
//                 if (xhr.status === 200) {
//                     console.log("Form sent");
//                 }
//             }
//         }
//         xhr.send(params);

//     }
// })
