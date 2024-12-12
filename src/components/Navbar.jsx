import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
//import { navLinks } from "../constants";
import closeIcon from "../assets/close.png";

export function Navbar() {
  const [active, setActive] = useState("");
  const navLinks = [{ id: "about", title: "About" }];

  const toggleResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1tw1sfT2nZ4vM1ohk2Jn4pmXY1HEwUmSJ/view?usp=sharing";
    window.open(resumeUrl);
  };


  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-7 fixed top-0 z-20 backdrop-blur`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-secondary text-[20px] font-bold cursor-pointer flex">
              CINDY&nbsp;
              <span className="sm:block hidden">ER</span>
            </p>
          </Link>
          <div
            className="flex list-none flex-row gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={`/${link.title}`}
                className={`${
                  active === link.title
                    ? "text-secondary"
                    : "text-white"
                } hover:text-white text-[20px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                {link.title}
              </Link>
            ))}
            <button
              className="text-secondary hover:text-white text-[20px] font-medium cursor-pointer"
              onClick={toggleResume}
            >
              Resume
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
