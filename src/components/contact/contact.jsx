import { WhiteButton } from "../button";

export const Contact = () => {
  return (
    <>
      <div className="bg-white">
        <div className="text-center px-6 py-[115px] bg-primary text-tag-blue rounded-tl-[100px]">
          <div className="text-[40px] font-bold">Contact me</div>
          <div className="text-xl">
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding. I’d love
            to help with it!
          </div>
          <div className="items-center flex flex-col">
            <div className="space-y-5 mt-[52px] box-border text-text-dark">
              <input
                type="text"
                className="px-4 py-4 text-base bg-white rounded-md outline-none box-border"
                placeholder="John Ojamahama"
              />
              <input
                type="text"
                className="px-4 py-4 text-base bg-white rounded-md outline-none box-border"
                placeholder="JohnOjamahama@gmail.com"
              />
              <textarea
                name=""
                id=""
                cols="20"
                rows="10"
                className="p-4 bg-white rounded-md outline-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
          </div>
          <div className="mt-6">
            <WhiteButton text="Get in touch"></WhiteButton>
          </div>
        </div>
      </div>
    </>
  );
};
