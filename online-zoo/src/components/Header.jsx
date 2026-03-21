import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

export const Header = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const { pathname } = useLocation();
  const normalize = (path) => path.replace(/\/$/, "") || "/";
  const currentPath = normalize(pathname);
  const toggleBurgerMenu = () => setBurgerIsOpen((prev) => !prev);
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <img src="images/logo.svg" alt="logo" />
        </a>
        <div className="burger-menu" onClick={toggleBurgerMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${burgerIsOpen && "show-burger-modal"} burger-modal`}>
          <div className="close-modal" onClick={toggleBurgerMenu}>
            <div className="close-line-1"></div>
            <div className="close-line-2"></div>
          </div>
          <nav className="burger-nav">
            <Link
              to="/"
              className={`nav-link ${currentPath === "/" && "highlight"}`}
            >
              About
            </Link>
            <Link
              to="/map"
              className={`nav-link ${currentPath === "/map" && "highlight"}`}
            >
              Map
            </Link>
            <Link
              to="/zoos"
              className={`nav-link ${currentPath === "/zoos" && "highlight"}`}
            >
              Zoos
            </Link>
            <Link
              to="/contact-us"
              className={`nav-link ${currentPath === "/contact-us" && "highlight"}`}
            >
              Contact us
            </Link>
            <Link
              to="https://www.figma.com/design/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=21-4877&t=uVdleYXKyMAVDa9i-0"
              className="nav-link"
              target="_blank"
            >
              Design
            </Link>
          </nav>
        </div>
        <div className="navigations-container">
          <nav className="nav">
            <Link
              to="/"
              className={`nav-link ${currentPath === "/" && "highlight"}`}
            >
              About
            </Link>
            <Link
              to="/map"
              className={`nav-link ${currentPath === "/map" && "highlight"}`}
            >
              Map
            </Link>
            <Link
              to="/zoos"
              className={`nav-link ${currentPath === "/zoos" && "highlight"}`}
            >
              Zoos
            </Link>
            <Link
              to="/contact-us"
              className={`nav-link ${currentPath === "/contact-us" && "highlight"}`}
            >
              Contact us
            </Link>
            <Link
              to="https://www.figma.com/design/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=21-4877&t=uVdleYXKyMAVDa9i-0"
              className="nav-link"
              target="_blank"
            >
              Design
            </Link>
          </nav>
          <ul className="soc-media-container">
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <img src="icons/YouTube.svg" alt="YouTube" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <img src="icons/Instagram.svg" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <img src="icons/Facebook.svg" alt="Facebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
