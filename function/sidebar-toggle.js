function toggleSidebar() {
    document.getElementById("sidebar-container")
        .classList.toggle("active");

    document.querySelector(".sidebar-overlay")
        .classList.toggle("active");
}