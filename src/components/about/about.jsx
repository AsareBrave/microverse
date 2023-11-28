import { Accordion } from "../about accordion";
import { NormalButton } from "../button";

export const About = () => {
  const accordionItems = [
    {
      title: "Languages",
      content: "Content for 1",
    },
    {
      title: "Frameworks",
      content: "Content for section 2",
    },
    {
      title: "Skills",
      content: "Content for section 3",
    },
  ];
  return (
    <>
      <div className="px-6 bg-white mt-[144px] rounded-tr-[100px] py-[144px] lg:p-[142px] flex flex-col md:flex-row lg:justify-between">
        <div className="space-y-4 md:space-y-6">
          <div className="text-[40px] font-bold lg:mt-3">About Myself</div>
          <p className="text-base leading-6 md:w-[347px] lg:w-[447px]">
            Hello I’m a software developer! I can help you build a product ,
            feature or website. Look through some of my work and experience! If
            you like what you see and have a project you need coded, don’t
            hesitate to contact me.
          </p>
          <div>
            <a href="#" className="text-base text-primary">
              LET’S CONNECT
            </a>
          </div>
          <div className="flex space-x-4 items-cente fa-lg">
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-twitch" aria-hidden="true"></i>
          </div>

          <NormalButton text="Get my resume"></NormalButton>
        </div>
        <div>
          <Accordion items={accordionItems}></Accordion>
        </div>
      </div>
    </>
  );
};
