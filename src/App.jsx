import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Map from "./components/Map";
import Zoos from "./components/Zoos";
import ContactUs from "./components/ContactUs";

function App() {
  async function loadComponent(selector, url) {
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
    const normalize = (path) => path.replace(/\/$/, "") || "/";

    const currentPath = normalize(window.location.pathname);

    const links = document.querySelectorAll(".nav-link");

    links.forEach((link) => {
      const linkPath = normalize(new URL(link.href).pathname);

      link.classList.toggle("highlight", linkPath === currentPath);
    });
  }

  loadComponent("#header", "/components/header.html");
  loadComponent("#footer", "/components/footer.html");

  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/zoos" element={<Zoos />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
