function initializeAnimations() {
    document.querySelector('.logo-text')?.classList.add('slide-in-left', 'delay-logo-text');
    document.querySelector('.logo-icon')?.classList.add('fade-in', 'delay-logo-icon');
    document.querySelector('.item1')?.classList.add('fade-in', 'delay-navbar-menu-item');
    document.querySelector('.item2')?.classList.add('fade-in', 'delay-navbar-menu-item');
    document.querySelector('.item3')?.classList.add('fade-in', 'delay-navbar-menu-item');
    document.querySelector('.item4')?.classList.add('fade-in', 'delay-navbar-menu-item');
}
  
document.addEventListener('DOMContentLoaded', initializeAnimations);

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector('#navbar-menu');

    hamburger.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
});