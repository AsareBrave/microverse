import React, { useState } from "react";
import burger from "../../assets/burger.svg";
export const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div className="fixed w-full">
        <div className="flex flex-row justify-between items-center mx-6 my-4 lg:mx-[143px] lg:my-4 bg-transparent">
          <div>
            <a href="#" className="font-extrabold text-primary text-lg">
              {props.logoText}
            </a>
          </div>
          <div className="hidden text-base flex-row text-text-light space-x-8 md:flex">
            {props.menuItems.map((item, index) => (
              <a href={item.link} key={index}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex md:hidden items-center">
            {!isMenuOpen && (
              <button onClick={openMenu}>
                <img src={burger} alt="" />
              </button>
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-primary w-full h-screen space-y-10 pt-5 px-4 fixed top-0 left-0 opacity-90 backdrop-blur-sm">
            <div className="flex justify-end">
              <button onClick={closeMenu} className="pr-2">
                <i
                  className="fa fa-times fa-lg text-white"
                  aria-hidden="true"
                ></i>
              </button>
            </div>

            {props.menuItems.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="block py-2 font-semibold text-3xl text-white hover:bg-tag-blue hover:text-charcole"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
