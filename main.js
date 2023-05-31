const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const iconHamburger = document.querySelector('.icon-hamburger');
const iconClose = document.querySelector('.icon-close');

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible')
        ? navToggle.setAttribute('aria-expanded', false)
        : navToggle.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute('data-visible');
    iconClose.classList.toggle('active');
    iconHamburger.classList.toggle('inactive');
});

