// Login
function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email && password) {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Please enter email and password.");
    }
}

// Signup
function signupUser(event) {
    event.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (name && email && password) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);

        alert("Account Created Successfully!");
        window.location.href = "login.html";
    } else {
        alert("Please fill all fields.");
    }
}

// Add To Cart
function addToCart() {
    let count = localStorage.getItem("cartCount") || 0;
    count++;

    localStorage.setItem("cartCount", count);

    alert("Product Added To Cart!");
    window.location.href = "cart.html";
}