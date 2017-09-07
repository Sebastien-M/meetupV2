let button = document.body.querySelector('#start');
let rm = document.body.querySelector('#rm');
let free = document.body.querySelector('#free')
let section = document.body.querySelector('#section');
let titre = document.body.querySelector('#titre');


button.addEventListener('click', function() {
    // titre.style.display = block;
    rm.style.opacity = 0;


    setTimeout(function() {
        titre.style.display = block;
        rm.style.display = none;
    }, 1000)
});

free.addEventListener('mouseover', function() {
    free.style.color = '#116cff';
})
free.addEventListener('mouseout', function() {
    free.style.color = 'white';
})