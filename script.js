const loginform = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e)=>{
    e.preventDefault();
    let username = loginform.username.value;
    let password = loginform.password.value;
    if(username ==="2023" && password ==="2023"){

    alert("Sucesso");
    location.reload();
    window.location.href="parallax/index.html";

}else{
    loginErrorMsg.style.opacity =1;
}


});