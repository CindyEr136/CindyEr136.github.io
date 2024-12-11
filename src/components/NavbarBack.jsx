import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import closeIcon from "../assets/close.png";

const NavbarBack = () => {
  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-7 fixed top-0 z-20 backdrop-blur`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <a href="javascript:window.history.back();">
            <img src={closeIcon} alt="back_button" className="w-[28px] h-[18px] object-contain cursor-pointer"/>
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavbarBack;
