import { FaCircleCheck } from "react-icons/fa6";

interface SectionProps {
  text: string;
}

const WhyChooseUs: React.FC<SectionProps> = (props) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <div>
          <FaCircleCheck className="text-blue-600" />
        </div>
        <div>
          <p className="px-5 py-1">{props.text}</p>
        </div>
      </div>
    </>
  );
};
export default WhyChooseUs;
