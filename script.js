document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const header = document.querySelector("header");
  const contactBtn = document.querySelector("#contactBtn");
  const homeBtn = document.querySelector('a[href="#home"]');
  const backToTop = document.getElementById("backToTop");
  let lastScrollY = window.scrollY;

  /* Back to Top */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) backToTop?.classList.add("show");
    else backToTop?.classList.remove("show");
  });

  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* Dropdown */
  if (dropdown) {
    const dropdownBtn = dropdown.querySelector(".portfolio-link");
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");

    dropdownBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) dropdown.classList.remove("active");
    });

    dropdownMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => dropdown.classList.remove("active"));
    });
  }

  /* Header Fade */
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScrollY && currentScroll > 150) header.classList.add("fade-out");
    else header.classList.remove("fade-out");
    lastScrollY = currentScroll;
  });

  /* Smooth Scroll */
  homeBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  contactBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  });
});
