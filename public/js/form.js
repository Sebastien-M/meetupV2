window.alert = function() {};
var defaultCSS = document.getElementById('bootstrap-css');

function changeCSS(css) {
    if (css) $('head > link').filter(':first').replaceWith('<link rel="stylesheet" href="' + css + '" type="text/css" />');
    else $('head > link').filter(':first').replaceWith(defaultCSS);
}
$(document).ready(function() {
    var iframe_height = parseInt($('html').height());
    window.parent.postMessage(iframe_height, 'https://bootsnipp.com');
});

//



$(document).ready(function() {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function(e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function(e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}

function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


let title = document.getElementById("title").value;
let orga = document.getElementById("orga").value;
let cat = document.getElementById("cat").value;
let loca = document.getElementById("location").value;
let date = document.getElementById("date").value;
let text = document.getElementById("text").value;