//import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import closeIcon from "../assets/close.png";

export function Navbar() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Aimtrainer">Aim Trainer</Link>
        <Link to="/BrainyBees">BrainyBees</Link>
        <Link to="/Heritage">Heritage</Link>
        <Link to="/Quiz">Quiz</Link>
      </div>
    </>
  );
}

/*
const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1tw1sfT2nZ4vM1ohk2Jn4pmXY1HEwUmSJ/view?usp=sharing";
    window.open(resumeUrl);
  };

  useEffect(() => {
    if (toggle) {
      setActive("");
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul
      className={`list-none ${
        isSecondary ? "flex sm:hidden" : "hidden sm:flex"
      } flex-row gap-6`}
    >
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title
              ? "text-secondary"
              : isSecondary
              ? "text-white"
              : "text-secondary"
          } hover:text-white text-[20px] font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) {
              setToggle(false);
            }
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <li
        className={`text-${
          isSecondary ? "secondary" : "white"
        } hover:text-white text-[20px] font-medium cursor-pointer`}
      >
        <button onClick={toggleResume}>Resume</button>
      </li>
    </ul>
  );

    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-7 fixed top-0 z-20 backdrop-blur`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/Home"
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
          {renderNavLinks(false)}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={
                toggle
                  ? closeIcon
                  : "https://lohitcdn.blob.core.windows.net/portfoliocdn/Etc/menu.svg"
              }
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${
                toggle ? "flex" : "hidden"
              }`}
            >
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </nav>
    </>
    */
