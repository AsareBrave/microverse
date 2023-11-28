export const NormalButton = (props) => {
  return (
    <>
      <div className="my-3">
        <button className="p-4 text-[17px] text-primary border border-primary rounded-lg">
          {props.text}
        </button>
      </div>
    </>
  );
};

export const WhiteButton = (props) => {
  return (
    <>
      <div className="my-3 flex items-start">
        <button className="p-4 text-[17px] text-primary border bg-white rounded-lg">
          {props.text}
        </button>
      </div>
    </>
  );
};
