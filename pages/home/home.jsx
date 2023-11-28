import { Header } from "../../src/components/header";
import { Portfolio } from "../../src/components/portfolio";
import image from "../../src/assets/image.jpg";
import image1 from "../../src/assets/image1.jpg";
import image2 from "../../src/assets/image2.jpg";
import image3 from "../../src/assets/image3.jpg";
import { About } from "../../src/components/about/";
import { Contact } from "../../src/components/contact";
export const Home = () => {
  const logoText = "My Logo";
  const menuItems = [
    { label: "Portfolio", link: "#" },
    { label: "About", link: "#" },
    { label: "Contact", link: "#" },
  ];
  return (
    <>
      <div>
        <div className="">
          <Header logoText={logoText} menuItems={menuItems}></Header>
        </div>
        <div className="lg:h-[846px] w-full bg-white rounded-bl-[100px]">
          <div className="px-6 py-[114px] md:px-[260px] md:py-[289px] space-y-5">
            <div className="w-[327px] text-[40px] text-text-dark font-bold lg:w-[920px] leading-[60px]">
              <h1 className="">I’m Alexandra.</h1>
              <h1 className="">Glad to see you!</h1>
            </div>
            <p className="w-[327px] text-base text-text-light leading-7 lg:w-[920px] lg:text-xl">
              I’m a software developer! I can help you build a product , feature
              or website Look through some of my work and experience! If you
              like what you see and have a project you need coded, don’t
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
          </div>
        </div>
        <div className="flex flex-col-reverse md:block space-y-[81px] lg:space-y-[142px] mt-[81px] md:mt-[142px]">
          <Portfolio
            projectImage={image}
            projectName="Tonic"
            projectTitle="CANOPY"
            projectRole="Back End Dev"
            projectYear="2015"
            projectDetails="A daily selection of privately personalized reads; no accounts or sign-ups required."
            tagItems={[{ lang: "HTML" }]}
          ></Portfolio>
          <Portfolio
            projectImage={image1}
            projectName="Sportlight"
            projectTitle="CANOPY"
            projectRole="Back End Dev"
            projectYear="2015"
            projectDetails="A daily selection of privately personalized reads; no accounts or sign-ups required."
            tagItems={[{ lang: "HTML" }]}
          ></Portfolio>
          <Portfolio
            projectImage={image2}
            projectName="Tonic"
            projectTitle="CANOPY"
            projectRole="Back End Dev"
            projectYear="2015"
            projectDetails="A daily selection of privately personalized reads; no accounts or sign-ups required."
            tagItems={[
              { lang: "HTML" },
              { lang: "CSS" },
              { lang: "JavaScript" },
            ]}
          ></Portfolio>
          <Portfolio
            projectImage={image3}
            projectName="Tonic"
            projectTitle="CANOPY"
            projectRole="Back End Dev"
            projectYear="2015"
            projectDetails="A daily selection of privately personalized reads; no accounts or sign-ups required."
            tagItems={[
              { lang: "HTML" },
              { lang: "CSS" },
              { lang: "JavaScript" },
            ]}
          ></Portfolio>
        </div>

        <div>
          <About></About>
        </div>
        <div>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
};
