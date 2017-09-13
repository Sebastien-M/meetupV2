let email = document.querySelector("#email");
let password = document.querySelector("#pasword");
let result = document.querySelector("#connectResult");

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
                if (connected(xhr) == "true"){
                result.textContent = "Email and password okay";
                }
                else if(connected(xhr) == "false"){
                    result.textContent = "Invalid email or password";
                }
            }
        }
    }
    xhr.send(params);
});

function connected(xhr) {
    return xhr.responseText;
}