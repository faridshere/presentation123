/* script.js */

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const sectionId = this.getAttribute('href');
    const section = document.querySelector(sectionId);

    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  });
});
