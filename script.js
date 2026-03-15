const header = document.getElementById('site-header');
const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.getElementById('site-nav');
const yearNode = document.getElementById('current-year');

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 20);
};

window.addEventListener('scroll', setHeaderState);
setHeaderState();

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!siteNav.classList.contains('open')) return;

    const clickedInsideNav = siteNav.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);
    if (clickedInsideNav || clickedToggle) return;

    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
