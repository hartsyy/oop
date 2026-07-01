/* signup form validation */

document.getElementById("signupForm").addEventListener("submit", function(e) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        e.preventDefault();
        alert("Passwords do not match!");
    }

    if (password.length < 6) {
        e.preventDefault();
        alert("Password must be at least 6 characters long!");
    }
});

/* dashboard navigation toggle */


// Notification click
document.querySelector(".notification").addEventListener("click", function () {
    alert("You have 4 new notifications.");
});

// Dashboard button
document.querySelector(".hero button").addEventListener("click", function () {
    alert("Welcome to Michigan Senior Dashboard!");
});

// Sidebar active effect
const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {
    item.addEventListener("click", function () {
        menuItems.forEach(i => i.classList.remove("active"));
        this.classList.add("active");
    });
});