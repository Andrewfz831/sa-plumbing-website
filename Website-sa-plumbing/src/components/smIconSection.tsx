interface SectionProps {
  icon: string;
  number: string;
  text1: string;
  text2: string;
}

const SmIconSection: React.FC<SectionProps> = (props) => {
  return (
    <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:w-1/3 p-4">
      <img src={props.icon} alt="" className="h-10 mt-4 md:mt-0 md:ml-4" />
      <div className="text-white mt-4 md:mt-0 md:ml-4 flex items-center md:items-start flex-col">
        <span className="text-xl font-semibold">{props.number}</span>
        <div className="flex items-center flex-col">
          <span>{props.text1}</span>
          {props.text2 && <span>{props.text2}</span>}
        </div>
      </div>
    </div>
  );
};
export default SmIconSection;
