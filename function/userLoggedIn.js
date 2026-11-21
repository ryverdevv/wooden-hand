const profileBtn = document.getElementById('profileBtn');

profileBtn.addEventListener('click', () =>{
    window.location.href = '../src/userprofile.html';
})

const cartBtn = document.getElementById('cartBtn');
cartBtn.addEventListener('click', () =>{
    window.location.href = '../src/addCart.html'
})

const allReviews = document.getElementById('allReviews');

allReviews.addEventListener('click', () => {
    window.location.href = '../src/reviewpage.html';
})

// products
const product1 = document.getElementById('product1');
const product2 = document.getElementById('product2');
const product3 = document.getElementById('product3');
product1.addEventListener('click', () =>{
    window.location.href = '../src/productpage.html';
})
product2.addEventListener('click', () =>{
    window.location.href = '../src/productpage.html';
})
product3.addEventListener('click', () =>{
    window.location.href = '../src/productpage.html';
})

const ViewAll = document.getElementById('ViewAllProducts');
const shopwNow = document.getElementById('shopNow');


ViewAll.addEventListener('click', () =>{
    window.location.href = '../src/allproductpage.html';
})
shopwNow.addEventListener('click', () =>{
    window.location.href = '../src/allproductpage.html';
})

