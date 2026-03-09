export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <img src="images/logo.svg" alt="logo" />
        </a>
        <div className="burger-menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="burger-modal">
          <div className="close-modal">
            <div className="close-line-1"></div>
            <div className="close-line-2"></div>
          </div>
          <nav className="burger-nav">
            <a href="/" className="nav-link">
              About
            </a>
            <a href="/map" className="nav-link">
              Map
            </a>
            <a href="/contact-us" className="nav-link">
              Contact us
            </a>
            <a
              href="https://www.figma.com/design/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=21-4877&t=uVdleYXKyMAVDa9i-0"
              className="nav-link"
              target="_blank"
            >
              Design
            </a>
          </nav>
        </div>
        <div className="navigations-container">
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
            <a
              href="https://www.figma.com/design/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=21-4877&t=uVdleYXKyMAVDa9i-0"
              className="nav-link"
              target="_blank"
            >
              Design
            </a>
          </nav>
          <ul className="soc-media-container">
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <img src="../assets/icons/YouTube.svg" alt="YouTube" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <img src="../assets/icons/Instagram.svg" alt="Instagram" />
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
