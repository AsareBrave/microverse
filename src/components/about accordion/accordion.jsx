import React, { useState } from "react";

export const Accordion = ({ items }, props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full mt-4 lg:mt-0 lg:px-6">
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className={`border-b p-3 cursor-pointer ${
              index === activeIndex ? "border-none" : ""
            }`}
            onClick={() => handleItemClick(index)}
          >
            <div className="flex justify-between items-center md:w-[384px] lg:w-[484px] box-border">
              <p className="text-xl">{item.title}</p>
              <span className="text-gray-600 fa-lg">
                {index === activeIndex ? (
                  <i className="fa fa-angle-up" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                )}
              </span>
            </div>
          </div>

          {index === activeIndex && (
            <div className="mt-2 p-3">
              <div className="w-full p-3 bg-accordion-grey rounded-lg">
                <p className="text-gray-700">{item.content}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
