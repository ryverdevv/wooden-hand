const nxtBtn = document.getElementById('nextBtn');
const signupContainer = document.getElementById('signup');
const verificationContainer = document.getElementById('verification');
nxtBtn.addEventListener('click', () => {
    signupContainer.style.display = "none";
    verificationContainer.style.display = "block";

});

const cancelBtn = document.getElementById('cancelBtn');
const verifyBtn = document.getElementById('verifyBtn');

cancelBtn.addEventListener('click', () => {
    verificationContainer.style.display = "none";
    signupContainer.style.display = "block";
});

verifyBtn.addEventListener('click', () => {
    const createContainer = document.getElementById('create');

    verificationContainer.style.display = "none";
    createContainer.style.display = "block"
});

// Create Account

const createBtn = document.getElementById('createBtn');

createBtn.addEventListener('click', () => {
    window.location.href = '../users/userLoggedIn.html';
})