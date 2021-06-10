const loginForm = document.getElementById ("form-holder");
const  loginButton = document.getElementById("submit-btn") 

loginButton.addEventListener('click', (e) =>{
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        alert ("Invalid username and/or password");
    }
   
})