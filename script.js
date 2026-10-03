const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const slides = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dots i');
let current = 0;

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.style.display = i === current ? 'block' : '');
  dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
}

document.querySelector('.next')?.addEventListener('click', () => showSlide(current + 1));
document.querySelector('.prev')?.addEventListener('click', () => showSlide(current - 1));
dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));

if (window.innerWidth <= 850) showSlide(0);
