const container = document.querySelector('#container')
const toggle = document.querySelector('.toggle')
const form = document.querySelector('form')
const form2 = document.querySelector('.form')
const registerBtn = document.querySelector('#register');
const loginBtn = document.querySelector("#login")
const forgotBtn = document.querySelector("#password_forgot")
const acceptBtn = document.querySelector("#accept")
const returnBtn = document.querySelector("#return")

const signup = document.querySelector(".sign-up")
const login = document.querySelector(".log-in")
const togglecont = document.querySelector(".toggle-container")
const forgotPasswordError = document.querySelector('#forgotPasswordEmailError').innerHTML;

registerBtn.addEventListener("click", _ => {
    container.classList.add("active")
});

loginBtn.addEventListener("click", _ => {
    container.classList.remove("active")
});

const forgotPassword = document.querySelector('#forgotPasswordEmail');
forgotBtn.addEventListener("click", () => {
    toggle.classList.add("active");
    form.classList.add("active");
    form2.classList.add("active");
    signup.classList.add("hidden");
    login.classList.add("hidden");
    togglecont.classList.add("hidden");
});

function validateLoginForm() {
    // Reset error messages
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    // Validate email
    let email = document.getElementById('loginEmail').value;
    if (!email || !isValidEmail(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        return false;
    }

    // Validate password
    let password = document.getElementById('loginPassword').value;
    if (!password) {
        document.getElementById('passwordError').innerText = 'Please enter your password.';
        return false;
    }

    return true;
}


function validateForgotPasswordForm() {
    // Reset error message
    document.getElementById('forgotPasswordEmailError').innerText = '';
    returnBtn.addEventListener("click", () => {
        document.getElementById('forgotPasswordEmailError').innerText = '';
    })

    // Validate email
    let email = document.getElementById('forgotPasswordEmail').value;
    if (!email || !isValidEmail(email)) {
        document.getElementById('forgotPasswordEmailError').innerText = 'Please enter a valid email address.';
        return false;
    }


    // Successful validation
    acceptBtn.addEventListener("click", () => {
        return forgot_password();
    });
}
returnBtn.addEventListener("click", () => {
    toggle.classList.remove("active");
    form.classList.remove("active");
    form2.classList.remove("active");
    signup.classList.remove("hidden");
    login.classList.remove("hidden");
    togglecont.classList.remove("hidden");
})


function validateRegisterForm() {
    // Reset error messages
    document.getElementById('registerEmailError').innerText = '';
    document.getElementById('registerPasswordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';

    // Validate email
    let email = document.getElementById('registerEmail').value;
    if (!email || !isValidEmail(email)) {
        document.getElementById('registerEmailError').innerText = 'Please enter a valid email address.';
        return false;
    }

    // Validate password
    let password = document.getElementById('registerPassword').value;
    if (!password) {
        document.getElementById('registerPasswordError').innerText = 'Please enter a password.';
        return false;
    }

    // Validate confirm password
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        return false;
    }

    // Successful validation
    alert('Registration successful!');
    return true;
}

function isValidEmail(email) {
    // Basic email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}