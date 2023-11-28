import React, { useState } from "react";
import burger from "../../assets/burger.svg";
export const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <div className="flex md:hidden">
            <button onClick={toggleMenu}>
              <img src={burger} alt="" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white py-2 px-4">
            {props.menuItems.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="block py-2 text-gray-800 hover:bg-gray-200"
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
