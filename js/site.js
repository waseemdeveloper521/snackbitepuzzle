const SITE = {
  name: "Snake Bite: Mind Puzzle",
  short: "Snake Bite",
  package: "com.snakebitepuzzle.app",
  version: "1.0.0",
  email: "waseemdeveloper521@gmail.com",
  updated: "17 October 2026",
};

const PAGES = [
  ["index.html", "Home"],
  ["privacy.html", "Privacy"],
  ["terms.html", "Terms"],
  ["support.html", "Support"],
  ["delete-data.html", "Delete data"],
  ["children.html", "Children"],
  ["about.html", "About"],
];

function currentFile() {
  const path = location.pathname.split("/").pop();
  return path && path.endsWith(".html") ? path : "index.html";
}

function header() {
  const here = currentFile();
  return `
    <header class="nav">
      <a class="brand" href="index.html">
        <img src="images/icon.png" alt="Snake Bite icon" width="44" height="44">
        <span class="display">${SITE.short}</span>
      </a>
      <button class="menu-btn" type="button" aria-label="Open menu">Menu</button>
      <nav class="nav-links">
        ${PAGES.map(
          ([href, label]) =>
            `<a href="${href}" class="${href === here ? "active" : ""}">${label}</a>`
        ).join("")}
      </nav>
    </header>`;
}

function footer() {
  return `
    <footer class="footer">
      <div class="footer-grid">
        <div>
          <p class="display" style="color:#fff;font-size:22px;margin-bottom:8px">${SITE.name}</p>
          <p>A calm snake-sliding puzzle. Package <code>${SITE.package}</code>.</p>
        </div>
        <div>
          <p style="color:#fff;font-weight:800;margin-bottom:8px">Play Store pages</p>
          <p><a href="privacy.html">Privacy Policy</a></p>
          <p><a href="terms.html">Terms of Service</a></p>
          <p><a href="support.html">Support</a></p>
          <p><a href="delete-data.html">Delete your data</a></p>
          <p><a href="app-ads.txt">app-ads.txt</a></p>
        </div>
        <div>
          <p style="color:#fff;font-weight:800;margin-bottom:8px">Contact</p>
          <p><a href="mailto:${SITE.email}">${SITE.email}</a></p>
          <p><a href="children.html">Children's privacy</a></p>
          <p><a href="about.html">About the developer</a></p>
        </div>
      </div>
      <p class="tiny">© ${new Date().getFullYear()} ${SITE.short}. Version ${SITE.version}. Last updated ${SITE.updated}.</p>
    </footer>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.outerHTML = header();
  if (f) f.outerHTML = footer();
  const btn = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  if (btn && links) {
    btn.addEventListener("click", () => links.classList.toggle("open"));
  }
});
