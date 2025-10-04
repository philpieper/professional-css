const hamburgerMenu = document.querySelector(
  'button[aria-controls="primary-nav"]'
);
const primaryNav = document.getElementById("primary-nav");

hamburgerMenu.addEventListener("click", function handleHamburgerMenuClick() {
  const isExpanded = hamburgerMenu.getAttribute("aria-expanded") === "true";

  hamburgerMenu.setAttribute("aria-expanded", String(!isExpanded));
});

const resizeObserver = new ResizeObserver(() => {
  document.body.classList.add("resizing");

  requestAnimationFrame(() => {
    document.body.classList.remove("resizing");
  });
});

resizeObserver.observe(document.body);
