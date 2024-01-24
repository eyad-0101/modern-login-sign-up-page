function sign_up() {
    const registerEmail = document.getElementById("registerEmail").value;
    const registerPassword = document.getElementById("registerPassword").value;

    // Retrieve existing accounts from localStorage
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    const accountInfo = {
        email: registerEmail,
        password: registerPassword
    };

    // Add the new account to the array
    accounts.push(accountInfo);

    // Store the updated accounts back in localStorage
    localStorage.setItem("accounts", JSON.stringify(accounts));
}


function log_in() {
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Retrieve existing accounts from localStorage
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    if (accounts.find(account => account.email === loginEmail && account.password === loginPassword) && validateLoginForm()) {
        // Successful login
        alert("Login successful!");
    } else {
        // Failed login
        alert("Invalid email or password. Please try again. note (you must register first)");
    }
}

function forgot_password() {
    const forgotEmail = document.getElementById("forgotPasswordEmail").value;

    // Retrieve existing accounts from localStorage
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Check if there is an account with the provided email
    const foundAccount = accounts.find(account => account.email === forgotEmail);

    if (foundAccount) {
        // Display the password in a disabled input field
        const passwordField = document.getElementById("forgotPassword");
        passwordField.value = foundAccount.password;
        passwordField.disabled = true;
    } else {
        // Email not found
        alert("No account found with the provided email.");
    }
}
