import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="upper-footer">
          <div className="logos">
            <Link
              to="https://geolab.edu.ge/"
              className="logo-geolab"
              target="_blank"
            >
              <img src="images/geolab.svg" alt="logo-rs" />
            </Link>
            <div className="logo-zoo">
              <img src="images/logo-white.svg" alt="logo-white" />
            </div>
            <div href="/" className="logo-yem">
              <img src="images/yem.svg" alt="logo-yem" />
            </div>
          </div>
          <nav className="nav">
            <a href="/" className="nav-link">
              About
            </a>
            <a href="/map" className="nav-link">
              Map
            </a>
            <a href="/zoos" className="nav-link">
              Zoos
            </a>
            <a href="/contact-us" className="nav-link">
              Contact us
            </a>
          </nav>
          <button className="btn">
            <span>Donate for volunteers</span>
            <img src="icons/arrow.svg" alt="arrow" />
          </button>
        </div>
        <div className="separator"></div>
        <div className="down-footer">
          <div className="navigations-container">
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
          <ul className="copyright">
            <li>© 2021 DinaK</li>
            <li>© Yem Digital</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
