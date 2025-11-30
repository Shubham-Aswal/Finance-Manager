console.log("🔥 login.js loaded");

let isLogin = true;

// Toggle screen (login/signup)
function toggleMode() {
    isLogin = !isLogin;

    document.getElementById("form-title").innerText =
        isLogin ? "Welcome back to Spendly." : "Join the Club.";

    document.getElementById("form-subtitle").innerText =
        isLogin ? "Enter your details to access your dashboard." : "Start mastering your money flow today.";

    document.getElementById("submit-btn").innerText =
        isLogin ? "Log In" : "Create Account";

    document.getElementById("toggle-text").innerText =
        isLogin ? "Don't have an account?" : "Already have an account?";

    document.getElementById("toggle-btn").innerText =
        isLogin ? "Sign Up" : "Log In";

    document.getElementById("name-field").style.display =
        isLogin ? "none" : "block";

    document.getElementById("login-extras").style.display =
        isLogin ? "flex" : "none";
}

document.getElementById("toggle-btn").addEventListener("click", toggleMode);


// -------------------------
// EMAIL LOGIN / SIGNUP
// -------------------------
document.getElementById("authForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("inputEmail").value;
    const pass = document.getElementById("inputPassword").value;

    if (!email || !pass) {
        alert("Please fill all fields");
        return;
    }

    try {
        if (isLogin) {
            await window.emailLogin(email, pass);
        } else {
            await window.emailSignup(email, pass);
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
});


// -------------------------
// GOOGLE LOGIN
// -------------------------
document.getElementById("googleBtn").addEventListener("click", async () => {
    try {
        await window.googleLogin();
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
});
