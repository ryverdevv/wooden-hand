const addtocart = document.getElementById('addtocart');
const buy = document.getElementById('buy');
const customize = document.getElementById('customize');

buy.addEventListener('click', () =>{
    window.location.href = '../src/checkout.html';
})

customize.addEventListener('click', () =>{
    window.location.href = '../src/customizepage.html';
})


