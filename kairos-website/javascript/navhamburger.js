function toggleMenu() {
    var navbarLinks = document.querySelector('.navbar-links');
    var heroSection = document.querySelector('.hero-section');
    navbarLinks.classList.toggle('active'); // Toggle the 'active' class
    heroSection.classList.toggle('active')
}