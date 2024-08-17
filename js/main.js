/*const navLinks = document.querySelectorAll('.nav__link a');
function updateActiveLink() {
    let currentSection = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - sectionHeight / 1) {
            currentSection = section.getAttribute('id');
        }
    });
navLinks.forEach(link => {
    link.parentElement.classList.remove('current__page');
    if (link.getAttribute('href') === `#${currentSection}`) {
        link.parentElement.classList.add('current__page');
    }
});
}
window.addEventListener('scroll', updateActiveLink);*/