const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});


document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

  });

});


const revealElements = document.querySelectorAll(
  ".section, .service-card, .work-grid img, .contact"
);

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.08
  }
);


revealElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition = "opacity .7s ease, transform .7s ease";

  observer.observe(element);

});
