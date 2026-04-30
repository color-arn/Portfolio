// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Navbar shadow
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Mouse parallax (subtle)
document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".hero-bg");

  let x = (e.clientX / window.innerWidth - 0.5) * 20;
  let y = (e.clientY / window.innerHeight - 0.5) * 20;

  glow.style.transform = `translate(calc(-50% + ${x}px), ${y}px)`;
});
