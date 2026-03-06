const links = Array.from(document.querySelectorAll(".nav-link"));
const sections = links
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  {
    root: null,
    threshold: 0.3
  }
);

sections.forEach(section => observer.observe(section));
links[0].classList.add("active");
