interface SectionProps {
  icon: string;
  text: string;
  description: string;
}

const IconSection: React.FC<SectionProps> = (props) => {
  return (
    <>
      <div className=" min-h-full h-80 flex flex-col justify-center max-w-lg bg-white border shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-10 rounded-lg hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] m-2 duration-100">
        <div className="flex flex-col items-center">
          <img src={props.icon} alt="SA Icon" className="w-12 h-12" />
          <div className=" text-center text-xl m-5 font-semibold">
            {props.text}
          </div>
          <p className="text-center text-sm text-gray-500">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};
export default IconSection;
