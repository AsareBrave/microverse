import { WhiteButton } from "../button";

export const Contact = () => {
  return (
    <>
      <div className="bg-white">
        <div className="text-center px-6 py-[115px] bg-primary text-tag-blue rounded-tl-[100px] flex justify-center ">
          <div>
            <div className="text-[40px] font-bold">Contact me</div>
            <div className="text-xl md:w-[568px] text-center">
              If you have an application you are interested in developing, a
              feature that you need built or a project that needs coding. I’d
              love to help with it!
            </div>
            <div className="items-center flex flex-col">
              <div className="space-y-5 mt-[52px] box-border text-text-dark md:flex md:flex-col w-full">
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
                  cols="22"
                  rows="10"
                  className="p-4 bg-white rounded-md outline-none box-border"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
            </div>
            <div className="mt-6 md: flex justify-center">
              <WhiteButton text="Get in touch"></WhiteButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
