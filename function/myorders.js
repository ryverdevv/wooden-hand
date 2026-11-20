// Buttons
const profileBtn = document.getElementById('profileBtn');
const paymentBtn = document.getElementById('paymentBtn');
const addressBtn = document.getElementById('addressBtn');
const cartsBtn = document.getElementById('cartsBtn');
const homeBtn = document.getElementById('homeBtn');
const ordersBtn = document.getElementById('ordersBtn');


// myorders Button
const allBtn = document.getElementById('allBtn');
const processBtn = document.getElementById('processBtn');
const shippBtn = document.getElementById('shippBtn');
const deliveredBtn = document.getElementById('deliveredBtn');


// Container
const allorders = document.getElementById('allorders');
const processing = document.getElementById('processing');
const shipped = document.getElementById('shipped');
const delivered = document.getElementById('delivered');
const deliveredd = document.getElementById('deliveredd');

allorders.addEventListener('click', () =>{
    allorders.style.display = "block";
    processing.style.display = "none";
    shipped.style.display = "none";
    delivered.style.display = "none";
    deliveredd.style.display = "none";
})

allBtn.addEventListener('click', () =>{
    allorders.style.display = "block";
    processing.style.display = "none";
    shipped.style.display = "none";
    delivered.style.display = "none";
    deliveredd.style.display = "none";
})

processBtn.addEventListener('click', () =>{
    allorders.style.display = "none";
    processing.style.display = "block";
    shipped.style.display = "none";
    delivered.style.display = "none";
    deliveredd.style.display = "none";
})

shippBtn.addEventListener('click', () =>{
    allorders.style.display = "none";
    processing.style.display = "none";
    shipped.style.display = "block";
    delivered.style.display = "none";
    deliveredd.style.display = "none";
})

deliveredBtn.addEventListener('click', () =>{
    allorders.style.display = "none";
    processing.style.display = "none";
    shipped.style.display = "none";
    delivered.style.display = "block";
    deliveredd.style.display = "none";
})

homeBtn.addEventListener('click', () =>{
    window.location.href = "../users/userLoggedIn.html";
})
