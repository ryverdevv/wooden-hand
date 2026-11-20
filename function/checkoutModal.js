const checkoutBtn = document.querySelector('.checkoutbtn input');
const processingModal = document.getElementById('processingModal');
const closeModal = document.getElementById('closeModal');
const viewOrder = document.getElementById('viewOrder');

// OPEN MODAL
checkoutBtn.addEventListener('click', () => {

    processingModal.classList.add('active');

});

// CLOSE MODAL
closeModal.addEventListener('click', () => {

    processingModal.classList.remove('active');

});

// VIEW ORDER
viewOrder.addEventListener('click', () => {

    window.location.href = '../src/userprofile.html';

});

// CLOSE
processingModal.addEventListener('click', (e) => {

    if (e.target === processingModal) {
        processingModal.classList.remove('active');
    }

});
