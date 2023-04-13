import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.jpg";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Các dòng xe
              </Link>
            </li>

          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Trang chủ
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                Về chúng tôi
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/models">
                Các dòng xe
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
          
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
