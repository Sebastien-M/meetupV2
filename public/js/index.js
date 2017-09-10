"use strict" ;
let button = document.body.querySelector('#start');
let rm = document.body.querySelector('#rm');
let free = document.body.querySelector('#free')
let eventsList = document.body.querySelector('.eventsList');
let eventsListInside = document.body.querySelector('#evlistinside');
let section = document.body.querySelector('#section');
let titre = document.body.querySelector('#titre');
let delet = document.body.querySelectorAll(".delbtn");
let eventdel = document.body.querySelector("#stilevent");
let mainEventContainer = document.querySelector(".evenements");
let eventid;
let eventscreen = document.querySelector(".evenements");

eventscreen.style.display = "none";
eventscreen.style.opacity = 1;

for (let i = 0; i< delet.length; i++) {
    delet[i].addEventListener("click", function (params) {
        console.log("clicked");
        eventid = delet[i].id;
        console.log(eventid)
        let paramsql = "id=" + eventid;
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/event/del', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log(`event with id ${eventid} deleted from database`);
                }
            }
        }
        xhr.send(paramsql);
        location.reload();
    });
}
// delet.addEventListener('click', function (e) {
//     eventid = document.querySelector("#event-id").value;
//     console.log(eventid);
//     e.preventDefault();

// })

button.addEventListener('click', function () {
    eventscreen.style.display = "block";
    scrollTo(".evenements");
});

free.addEventListener('mouseover', function () {
    free.style.color = '#116cff';
})
free.addEventListener('mouseout', function () {
    free.style.color = 'white';
})


function scrollTo(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 'slow');
    return false;
}