import React, { useState } from "react";
import counter from "../../assets/counter.svg";
import { WhiteButtonIcon } from "../button";
import { NormalButton } from "../button";
export const Portfolio = (props) => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const openModal = () => {
    setisModalOpen(!isModalOpen);
    console.log('s')
  };

  const closeModal = () => {
    setisModalOpen(false);
  };
  return (
    <>
      <div className="w-[327px] mx-auto bg-white rounded-2xl md:w-[756px] lg:w-[1156px] hover:cursor-pointer mt-[81px] md:mt-[142px]">
        <div className="flex flex-col py-4 mx-4 md:justify-between md:my-6 md:flex-row">
          <div className="lg:mr-6">
            <img
              src={props.projectImage}
              alt={props.projectImage}
              className="w-[295px] h-[220px] md:w-[364px] md:h-[348px] lg:w-[544px] lg:h-[448px]"
            />
          </div>

          <div className="flex flex-col space-y-3 lg:space-y-6">
            <div className="mt-3">
              <h1 className="font-bold text-[32px]">{props.projectName}</h1>
            </div>
            <div className="flex items-center text-[13px] space-x-3">
              <h1 className="text-text-dark  font-semibold">
                {props.projectTitle}
              </h1>
              <img src={counter} alt="" className="w-2 h-2" />
              <h1 className="font-semibold text-text-text-lighter">
                {props.projectRole}
              </h1>
              <img src={counter} alt="" className="w-2 h-2" />
              <h1 className="font-semibold text-text-text-lighter">
                {props.projectYear}
              </h1>
            </div>

            <div className="text-neutral md:w-[296px] lg:w-[496px]">
              <p>{props.projectDetails}</p>
            </div>

            <div className="flex space-x-3">
              {props.tagItems.map((tag, index) => (
                <div
                  className="text-xs text-primary px-4 py-1 bg-tag-blue rounded-lg"
                  key={index}
                >
                  {tag.lang}
                </div>
              ))}
              {/* <Tag tag="HTML"></Tag>
              <Tag tag="CSS"></Tag>
              <Tag tag="JavaScript"></Tag> */}
            </div>

            <div>
              <NormalButton hid={openModal} text="See project"></NormalButton>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="bg-overley fixed w-full h-screen -top-20">
          <div className="w-[343p] h-[713p] mx-4 p-4 flex flex-col bg-white rounded-2xl mt-[60px] mb-[50px] items-center">
            <div className="flex flex-col space-y-3 lg:space-y-6">
              <div className="mt-3 flex justify-between">
                <h1 className="font-bold text-[32px]">{props.projectName}</h1>
                <button onClick={closeModal} className="pr-2">
                  <i
                    className="fa fa-times fa-lg text-modal-grey"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
              <div className="flex items-center text-[13px] space-x-3">
                <h1 className="text-text-dark  font-semibold">
                  {props.projectTitle}
                </h1>
                <img src={counter} alt="" className="w-2 h-2" />
                <h1 className="font-semibold text-text-text-lighter">
                  {props.projectRole}
                </h1>
                <img src={counter} alt="" className="w-2 h-2" />
                <h1 className="font-semibold text-text-text-lighter">
                  {props.projectYear}
                </h1>
              </div>

              <div className="self-center">
                <img
                  src={props.projectImage}
                  alt={props.projectImage}
                  className="w-[295px] h-[220px] md:w-[364px] md:h-[348px] lg:w-[544px] lg:h-[448px]"
                />
              </div>

              <div className="text-neutral text-[15px] w-[311px] md:w-[296px] lg:w-[496px]">
                <p>{props.projectDetailsMobile}</p>
              </div>

              <div className="flex space-x-3">
                {props.tagItems.map((tag, index) => (
                  <div
                    className="text-xs text-primary px-4 py-1 bg-tag-blue rounded-lg"
                    key={index}
                  >
                    {tag.lang}
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-300 flex w-full justify-between">
                <WhiteButtonIcon
                  text="See live"
                  icon="ml-2 fa fa-twitter"
                ></WhiteButtonIcon>
                <WhiteButtonIcon
                  text="See source"
                  icon="ml-2 fa fa-github"
                ></WhiteButtonIcon>
              </div>
            </div>
          </div>
        </div>)}

    </>
  );
};
