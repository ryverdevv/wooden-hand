
fetch('../components/sidebar.html')
    .then(response => response.text())
    .then(data => {

        // Display Sidebar
        document.getElementById('sidebar-container').innerHTML = data;

        // Dashboard
        document.getElementById('Dashboard').addEventListener('click', () => {
            window.location.href = 'admin-dashboard.html';
        });

        // Products
        document.getElementById('Products').addEventListener('click', () => {
            window.location.href = 'products.html';
        });

        // Orders
        document.getElementById('Orders').addEventListener('click', () => {
            window.location.href = 'orders.html';
        });

        // Users
        document.getElementById('Users').addEventListener('click', () => {
            window.location.href = 'users.html';
        });

        // Custom Orders
        document.getElementById('Custom').addEventListener('click', () => {
            window.location.href = 'custom-orders.html';
        });

        // Logout
        document.getElementById('logoutButton').addEventListener('click', () => {
            window.location.href = '/src/login.html';
        });

        // Active Button
        let currentPage = window.location.pathname.split('/').pop();

        if (currentPage === 'admin-dashboard.html') {
            document.getElementById('Dashboard').classList.add('active');
        }

        if (currentPage === 'products.html') {
            document.getElementById('Products').classList.add('active');
        }

        if (currentPage === 'orders.html') {
            document.getElementById('Orders').classList.add('active');
        }

        if (currentPage === 'users.html') {
            document.getElementById('Users').classList.add('active');
        }

        if (currentPage === 'custom-orders.html') {
            document.getElementById('Custom').classList.add('active');
        }
    })

