document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    login();
});
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "22446") {
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
      check.style.color = "red"
      //  alert("Incorrect username or password");
        document.getElementById("check").innerHTML =
          "Incorrect details";
    }
}

      
