let email = document.querySelector("#email");
let password = document.querySelector("#pasword");

document.querySelector("#sendco").addEventListener("click", (e)=>{
    e.preventDefault();
    // console.log(`${email.value}\n${password.value}`);
    let params = `email=${email.value}&password=${password.value}`;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/checkuser', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            }
        }
    }
    xhr.send(params);
})