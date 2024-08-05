function check() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let error = document.getElementById("error");

    if (username.value === "" || password.value === "") {
        error.textContent = "Please fill in both fields.";
        error.style.display = "block";
        return false;
    }

    if (username.value !== "admin" || password.value !== "123") {
        error.textContent = "Wrong login info.";
        error.style.display = "block";
        return false;
    }

    if (username.value === "admin" && password.value === "123") {
        window.location.href = "index.html";
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    check();
});

var menuIsOpen
function menu(){
    if(menuIsOpen){
        document.getElementById("Head").style.marginRight = 60 + "%" 
    }
    else{
        document.getElementById("Head").style.margin = 0 + "px" 
    }
    menuIsOpen=!menuIsOpen
}