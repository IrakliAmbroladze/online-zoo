export async function loadComponent(selector: string, url: string) {
  const el = document.querySelector(selector);
  const res = await fetch(url);
  if (el !== null) {
    el.innerHTML = await res.text();
    el.querySelector(".burger-menu")?.addEventListener("click", toggleMenu);
    el.querySelector(".close-modal")?.addEventListener("click", toggleMenu);
  }
  setActiveNavLink();
}

function toggleMenu() {
  const modal = document.querySelector("#header .burger-modal");
  modal?.classList.toggle("show-burger-modal");
}
function setActiveNavLink() {
  const normalize = (path: string) => path.replace(/\/$/, "") || "/";

  const currentPath = normalize(window.location.pathname);

  const links: NodeListOf<Element> = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    const linkPath = normalize(new URL(link.href).pathname);

    link.classList.toggle("highlight", linkPath === currentPath);
  });
}
