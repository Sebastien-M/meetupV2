let button = document.body.querySelector('#start');
let rm = document.body.querySelector('#rm');
let free = document.body.querySelector('#free')
let eventsList = document.body.querySelector('.eventsList');
let eventsListInside = document.body.querySelector('#evlistinside');
let section = document.body.querySelector('#section');

button.addEventListener('click', function() {
    setTimeout(function() {
        rm.style.opacity = 0;
        // rm.style.display = none;
        rm.remove();
        eventsList.style.display = "flex";
        setTimeout(function() {
            eventsListInside.style.opacity = 1;
        }, 50);

    }, 1000)
});

free.addEventListener('mouseover', function() {
    free.style.color = '#116cff';
})
free.addEventListener('mouseout', function() {
    free.style.color = 'white';
})