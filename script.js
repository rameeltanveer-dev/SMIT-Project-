const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', function(e) {
    e.preventDefault(); // To prevent the default link behavior
    mainNav.classList.toggle('active');
    // Optionally change icon from bars to close (x)
    const icon = menuToggle.querySelector('i');
    if (mainNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});
