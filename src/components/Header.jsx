import React, { useState } from "react";
import { FaBars, FaHeadSideMask } from "react-icons/fa";

const Header = () => {
  const [active, setActive] = useState("nav_menu");
  const [icon, setIcon] = useState("nav_toggler");

  const navToggle = () => {
    if (active === "nav_menu") {
      setActive("nav_menu nav_active");
    } else setActive("nav_menu");

    if (icon === "nav_toggler") {
      setIcon("nav_toggler");
    } else setIcon("nav_toggler");
  };
  return (
    <>
      <header>
        <div className="headerContainer flexSB">
          <div className="logo">
            <FaHeadSideMask />
          </div>
          <nav>
            <ul className={active} onClick={navToggle}>
              <li>
                <a href="/">Start</a>
              </li>
              <li>
                <a href="#tragedia">Tragedia</a>
              </li>
              <li>
                <a href="#dzieło">Dzieło</a>
              </li>
              <li>
                <a href="#problematyka">Problematyka</a>
              </li>
              <li>
                <a href="#exodos">Exodos</a>
              </li>
              <li>
                <a href="#sofokles">
                  <button className="outline-btn">Sofokles</button>
                </a>
              </li>
            </ul>
          </nav>
          <div onClick={navToggle} className={icon}>
            <FaBars />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
