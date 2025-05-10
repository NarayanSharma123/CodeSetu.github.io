// signup logic
document.querySelector("#signupForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    // regular expressions
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    if (localStorage.getItem(email)) {
        alert("User already exists with this email");
        return;
    }
    if (!strongPasswordRegex.test(password)) {
        alert("Password must be at least 6 characters long and include uppercase, lowercase, digit, and special character.");
        return;
    }
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit Indian phone number.");
        return;
    }

    const user = {
        name: name,
        email: email,
        phone: phone,
        password: password,
    };

    localStorage.setItem(email, JSON.stringify(user));
    alert("Signup successful!");
    window.location.href = "login.html"; // Redirect to login page
});

// toggle password visibility for main password
const passwordField = document.querySelector("#password");
const togglePassword = document.querySelector("#togglePassword");
togglePassword?.addEventListener("click", () => {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.style.color = "#00CFFF";
    } else {
        passwordField.type = "password";
        togglePassword.style.color = "#000";
    }
});

// toggle password visibility for confirm password
const confirmPasswordField = document.querySelector("#confirmPassword");
const togglePassword2 = document.querySelector("#togglePassword2");
togglePassword2?.addEventListener("click", () => {
    if (confirmPasswordField.type === "password") {
        confirmPasswordField.type = "text";
        togglePassword2.style.color = "#00CFFF";
    } else {
        confirmPasswordField.type = "password";
        togglePassword2.style.color = "#000";
    }
});

// login logic
document.querySelector("#loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const loginEmail = document.querySelector("#lgn-email").value.trim();
    const loginPassword = document.querySelector("#lgn-password").value.trim();

    const storedUser = localStorage.getItem(loginEmail);
    if (!storedUser) {
        alert("User not found. Please sign up first.");
        return;
    }

    const userData = JSON.parse(storedUser);
    if (userData.password !== loginPassword) {
        alert("Incorrect password.");
        return;
    }

    alert("Login successful!");
    localStorage.setItem("currentUser", JSON.stringify(userData));
    window.location.href = "profile.html"; // Redirect to homepage
});

// UI update based on login status
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const logoutBtn = document.querySelector(".logout-btn");
const profileLink = document.querySelector(".profile-link");
const profileFooterLink = document.querySelector(".profile-footer-link");

if (currentUser) {
    loginBtn?.classList.add("d-none");
    signupBtn?.classList.add("d-none");
    logoutBtn?.classList.remove("d-none");
    profileLink?.classList.remove("d-none");
    profileFooterLink?.classList.remove("d-none");

    logoutBtn?.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        location.reload(); // Reload the page to update the UI
    });
} else {
    loginBtn?.classList.remove("d-none");
    signupBtn?.classList.remove("d-none");
    logoutBtn?.classList.add("d-none");
    profileLink?.classList.add("d-none");
    profileFooterLink?.classList.add("d-none");
}
