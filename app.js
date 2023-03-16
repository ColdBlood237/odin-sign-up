const error_mess = document.querySelector(".dont-match")
const password = document.getElementById("password");
const confirm_pwd = document.getElementById("confirm-pwd");

let password_value = "";
let confirm_pwd_value = "";
let same_pwd = false;

password.addEventListener("input", (e) => {
    password_value = password.value;
    console.log(password_value)
    if (password_value === confirm_pwd_value) {
        password.style.border = "1px solid green";
        confirm_pwd.style.border = "1px solid green";
        error_mess.style.display = "none";
    } else {
        password.style.border = "2px solid red";
        confirm_pwd.style.border = "2px solid red";
        error_mess.style.display = "block";
    }
})

confirm_pwd.addEventListener("input", e => {
    confirm_pwd_value = confirm_pwd.value;
    if (password_value === confirm_pwd_value) {
        password.style.border = "1px solid green";
        confirm_pwd.style.border = "1px solid green";
        error_mess.style.display = "none";
    } else {
        password.style.border = "2px solid red";
        confirm_pwd.style.border = "2px solid red";
        error_mess.style.display = "block";
    }
})