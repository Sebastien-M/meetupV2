let sendbutton = document.body.querySelector('#send');
sendbutton.addEventListener("click", function (e) {
    e.preventDefault();
    
    
    let event = document.querySelector('#name').value;
    let location = document.querySelector('#place').value;
    var params = "name="+event+"&location="+location;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/event/add', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
            }
        }
    }
    xhr.send(params);
    
});