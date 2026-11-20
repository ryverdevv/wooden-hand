const userName = document.getElementById('userName');
const passWord = document.getElementById('passWord');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {

    console.log('Username:', userName.value);
    console.log('Password:', passWord.value);

    if (userName.value.trim() === '' || passWord.value.trim() === '') {
        alert('Please fill up all fields');
    } else if (
        userName.value.trim() === 'adminaccount' &&
        passWord.value.trim() === 'admin123'
    ) {
        alert('Welcome back admin');
        window.location.href = '../admin/admin-dashboard.html';
    } else {
        alert('Successfully Login');
        window.location.href = '../users/userLoggedIn.html';
    }

});

const signupLink = document.getElementById('SignupLink');
signupLink.addEventListener('click', () =>{
    window.location.href = '../src/signup.html';
})