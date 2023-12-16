// import Plumber from "../assets/technician.svg";
import Pipe from "../assets/pipe.svg";

interface SectionProps {
  number: string;
  text: string;
}

const NumbersSpeak: React.FC<SectionProps> = (props) => {
  return (
    <>
      <div
        className=" w-56 h-56 flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${Pipe})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="text-7xl text-blue-600 font-semibold">
          {props.number}
        </span>
        <span className="text-center text-lg text-gray-900">{props.text}</span>
      </div>
    </>
  );
};
export default NumbersSpeak;
