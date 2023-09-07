
function loginFunction() {
    let emailValue = document.querySelector("#EmailID").value; 
    let passwordValue = document.querySelector("#PasswordID").value; 
    if( emailValue== "admin@gmail.com" && passwordValue == "admin1234"){
        window.location.href = 'dashboard.html';
    }else {
        alert('Wrong Credentials!');
    }
}