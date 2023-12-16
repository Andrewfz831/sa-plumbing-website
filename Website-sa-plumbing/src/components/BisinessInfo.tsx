import SmIconSection from "../components/smIconSection";
import Location from "../assets/location.svg";
import Clock from "../assets/clock.svg";
import Email from "../assets/mail.svg";

const BusinessInfo = () => {
  return (
    <div className="">
      <div className=" flex flex-col md:flex-row justify-center items-center md:items-stretch ">
        <SmIconSection
          icon={Location}
          number="Location"
          text1="11 Richardson Ave."
          text2="Freedom, CA 95019"
        />

        <SmIconSection
          icon={Email}
          number="Email"
          text1="S.Aplumbing@yahoo.com"
          text2=""
        />

        <SmIconSection
          icon={Clock}
          number="Open Hours"
          text1="Monday - Friday 8:00am - 8:00pm"
          text2="Saturday & Sunday 8:00am - 5:00pm"
        />
      </div>
    </div>
  );
};
export default BusinessInfo;
