import counter from "../../assets/counter.svg";
import { NormalButton } from "../button";
export const Portfolio = (props) => {
  return (
    <>
      <div className="w-[327px] mx-auto bg-white rounded-2xl md:w-[756px] lg:w-[1156px] hover:cursor-pointer">
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
                <div className="text-xs text-primary px-4 py-1 bg-tag-blue rounded-lg" key={index}>
                  {tag.lang}
                </div>
              ))}
              {/* <Tag tag="HTML"></Tag>
              <Tag tag="CSS"></Tag>
              <Tag tag="JavaScript"></Tag> */}
            </div>

            <div>
              <NormalButton text="See project"></NormalButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
