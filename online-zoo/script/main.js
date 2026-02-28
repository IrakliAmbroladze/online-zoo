async function loadComponent(selector, url) {
  const el = document.querySelector(selector);
  const res = await fetch(url);
  el.innerHTML = await res.text();

  el.querySelector(".burger-menu").addEventListener("click", toggleMenu);
  el.querySelector(".close-modal").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  const modal = document.querySelector(".burger-modal");
  if (modal) {
    modal.classList.toggle("show-burger-modal");
  }
}

loadComponent("#header", "/components/header.html");
