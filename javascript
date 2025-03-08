function togglePassword() {
    let passwordInput = document.getElementById("password");
    let toggleIcon = document.getElementById("toggle-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.innerHTML = "🙈"; // Change icon to hide
    } else {
        passwordInput.type = "password";
        toggleIcon.innerHTML = "👁️"; // Change icon to show
    }
}