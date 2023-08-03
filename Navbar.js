// Navbar
var navbarCollapse = document.querySelector('#navbarCollapse');
var navbarToggle = document.querySelector('.navbar-toggle');

navbarToggle.addEventListener('click', function () {
  navbarCollapse.classList.toggle('show');
});
