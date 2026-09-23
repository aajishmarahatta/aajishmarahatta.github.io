// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Light/dark theme toggle
const themeToggle = document.getElementById("theme-toggle");
const rootEl = document.documentElement;

function applyTheme(theme) {
  rootEl.setAttribute("data-theme", theme);
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
  );
}

// Sync the button's label/state with whatever the inline head script
// already applied (stored choice, or the system preference as a fallback),
// without writing anything to localStorage yet.
applyTheme(rootEl.getAttribute("data-theme") || "light");

themeToggle.addEventListener("click", () => {
  const next = rootEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {
    // localStorage unavailable (e.g. private browsing); the choice just won't persist.
  }
});
