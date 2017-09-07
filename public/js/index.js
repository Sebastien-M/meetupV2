let button = document.body.querySelector('#start');
let rm = document.body.querySelector('#rm');
let free = document.body.querySelector('#free')
let eventsList = document.body.querySelector('.eventsList');
let eventsListInside = document.body.querySelector('#evlistinside');
let section = document.body.querySelector('#section');
let titre = document.body.querySelector('#titre');
let delet = document.body.querySelector("#delet");
let eventdel = document.body.querySelector("#stilevent");
let mainEventContainer = document.querySelector(".evenements");


delet.addEventListener('click', function () {


})

button.addEventListener('click', function () {
    titre.style.display = "block";
    eventsList.style.display = "flex";
    mainEventContainer.style.display = "block";
    scrollTo(".evenements");
    titre.style.display = "block";
    eventsList.style.display = "flex";
    mainEventContainer.style.display = "block";
    scrollTo(".evenements");
    eventsListInside.style.opacity = 1;
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