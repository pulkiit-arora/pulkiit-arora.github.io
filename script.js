// Small interactive bits: mobile nav toggle and footer year + active section highlight
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.main-nav');
const navList = document.getElementById('nav-list');

navToggle && navToggle.addEventListener('click', ()=>{
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  nav && nav.classList.toggle('open');
});

// set year
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// highlight active nav item on scroll (simple)
const sections = document.querySelectorAll('main .section');
const navLinks = document.querySelectorAll('.main-nav a');

function onScroll(){
  const scrollPos = window.scrollY + window.innerHeight/3;
  let currentId = '';
  sections.forEach(s=>{
    if(s.offsetTop <= scrollPos) currentId = s.id;
  });
  navLinks.forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href') === ('#'+currentId));
  });
}

window.addEventListener('scroll', onScroll);
window.addEventListener('resize', onScroll);
onScroll();
