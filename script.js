/* ==========================
   SIGNUP VALIDATION
========================== */

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(e){

        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        const passwordError = document.getElementById("passwordError");
        const confirmPasswordError = document.getElementById("confirmPasswordError");

        // Clear previous errors
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        let valid = true;

        if(password.length < 6){
            passwordError.textContent = "Password must be at least 6 characters.";
            valid = false;
        }

        if(password !== confirmPassword){
            confirmPasswordError.textContent = "Passwords do not match.";
            valid = false;
        }

        if(!valid){
            e.preventDefault();
        }

    });

}


/* ==========================
   LOGIN VALIDATION
========================== */

const password = loginForm.querySelector('input[type="password"]').value;

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        const password = document.getElementById("loginPassword").value;
        const loginPasswordError = document.getElementById("loginPasswordError");

        loginPasswordError.textContent = "";

        if(password.length < 6){

            e.preventDefault();
            loginPasswordError.textContent = "Password must be at least 6 characters.";

        }

    });

}


/* ==========================
   DASHBOARD
========================== */

const notification = document.querySelector(".notification");

if(notification){

    notification.addEventListener("click", function(){

        alert("You have 4 new notifications.");

    });

}

const heroButton = document.querySelector(".hero button");

if(heroButton){

    heroButton.addEventListener("click", function(){

        alert("Welcome to Michigan Senior Dashboard!");

    });

}

const menuItems = document.querySelectorAll(".sidebar ul li");

if(menuItems.length > 0){

    menuItems.forEach(item => {

        item.addEventListener("click", function(){

            menuItems.forEach(i => i.classList.remove("active"));

            this.classList.add("active");

        });

    });

}