document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const header = document.querySelector("header");
  const backToTop = document.getElementById("backToTop");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector("#lightbox img");
  let lastScrollY = window.scrollY;

  /* Toggle dropdown */
  if (dropdown) {
    const button = dropdown.querySelector(".portfolio-link");
    button.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle("active");
    });

    document.addEventListener("click", e => {
      if (!dropdown.contains(e.target)) dropdown.classList.remove("active");
    });
  }

  /* Header fade */
  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    if (current > lastScrollY && current > 160) header.classList.add("fade-out");
    else header.classList.remove("fade-out");
    lastScrollY = current;
  });

  /* Lightbox */
  document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});
