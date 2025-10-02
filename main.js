const hamburgerMenu = document.querySelector(
  'button[aria-controls="primary-nav"]'
);
const primaryNav = document.getElementById("primary-nav");

hamburgerMenu.addEventListener("click", function handleHamburgerMenuClick() {
  const isExpanded = hamburgerMenu.getAttribute("aria-expanded") === "true";

  hamburgerMenu.setAttribute("aria-expanded", String(!isExpanded));
});
