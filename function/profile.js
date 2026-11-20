// Buttons
const profileBtn = document.getElementById('profileBtn');
const paymentBtn = document.getElementById('paymentBtn');
const addressBtn = document.getElementById('addressBtn');
const cartsBtn = document.getElementById('cartsBtn');
const homeBtn = document.getElementById('homeBtn');
const ordersBtn = document.getElementById('ordersBtn');
const logoutBtn = document.getElementById('logoutBtn');

// Container
const myprofile = document.getElementById('myprofile');
const payment = document.getElementById('payment');
const myaddress = document.getElementById('myaddress');
const mycarts = document.getElementById('mycarts');


profileBtn.addEventListener('click', () =>{
    myprofile.style.display = "block";
    payment.style.display = "none";
    myaddress.style.display = "none";
})

paymentBtn.addEventListener('click', () =>{
    myprofile.style.display = "none";
    payment.style.display = "block";
    myaddress.style.display = "none";
})

addressBtn.addEventListener('click', () =>{
    myprofile.style.display = "none";
    payment.style.display = "none";
    myaddress.style.display = "block";
})

cartsBtn.addEventListener('click', () =>{
    myprofile.style.display = "none";
    payment.style.display = "none";
    myaddress.style.display = "none";
    mycarts.style.display = "block";
})

ordersBtn.addEventListener('click', () =>{
    window.location.href = '../src/myorders.html';
})

homeBtn.addEventListener('click', () =>{
    window.location.href = "../users/userLoggedIn.html";
})
