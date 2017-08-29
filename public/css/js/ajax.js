let sendbutton = document.body.querySelector('#send');

sendbutton.addEventListener("click", function (e) {
    e.preventDefault();
    let event = document.body.querySelector('#name').value;
    let location = document.body.querySelector('#place').value;
    let params = "name="+event+"&location="+location;
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
    window.location.reload();
});