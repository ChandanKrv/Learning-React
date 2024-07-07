/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";

function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        Mode
      </div>
      <header className="p-3 shadow-xl">
        <div className="max-w-[1200px] mx-auto border border-[#fc8019] flex items-center">
          <div className="w-[80px]">
            <img src="images/swiggy-logo.png" alt="" className="w-full" />
          </div>
          <div className="text-xl">
            <span className="font-bold border-b-[3px] border-[black]">
              Sector 2
            </span>
            Kolkata, India
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="inline text-[#fc8019] cursor-pointer"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
