import Navbar from "../components/Nav";
import Services from "../components/Services";
import DrainCleaning from "../assets/pipe1.svg";
import Fixture from "../assets/fixture.svg";
import VideoInspection from "../assets/camera.svg";
import Hydro from "../assets/gauge.svg";
import Descaling from "../assets/drain.svg";
import Smoke from "../assets/smoke-bomb-svgrepo-com.svg";
import Leak from "../assets/leak.svg";
import WaterHeater from "../assets/waterHeater.svg";
import Trenchless from "../assets/trenchless.svg";
import NewConstruction from "../assets/newConstruction.svg";
import ContactSection from "../components/EmailForm";
import Footer from "../components/Footer";

const ServicesView = () => {
  return (
    <>
      <Navbar />

      <div className=" py-36 flex flex-col justify-center px-28 text-white bg-neutral-900">
        <h2 className="flex justify-start py-10 text-4xl md:text-5xl ">
          Our Services
        </h2>
        <p className=" md:w-2/5">
          We offer a wide range of plumbing services, repairs, and replacements
          for residential and commercial setups.
        </p>
      </div>
      <h2
        id="services"
        className="flex justify-center p-5 text-4xl md:text-5xl text-neutral-800 font-semibold border-b-2 border-blue-500"
      >
        How can we help?
      </h2>
      <div className="flex justify-center">
        <div>
          <div className=" md:max-w-screen-lg">
            <div className="flex md:flex-row flex-col items-center justify-center">
              <div className="md:w-1/2 text-center">
                <Services
                  title="Drain Cleaning"
                  img={DrainCleaning}
                  description="Preventative maintenance and blockage clearing for toilets, sinks, main lines and storm lines."
                />
              </div>
              <div className="md:w-1/2 text-center">
                <Services
                  title="Leak Detection"
                  img={Leak}
                  description="From water leaks to gas or plumbing issues, our advanced detection methods swiftly identify and resolve all types of leaks, safeguarding your property and ensuring peace of mind."
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center">
              <div className="md:w-1/2 text-center">
                <Services
                  title="Hydro Jetting"
                  img={Hydro}
                  description="A powerful solution to stubborn clogs, using high-pressure water to clear pipes and restore smooth, efficient flow"
                />
              </div>
              <div className="md:w-1/2 text-center">
                <Services
                  title="Descaling"
                  img={Descaling}
                  description="Tackle pipe buildup effortlessly with our specialized treatment, restoring plumbing systems to their optimal condition."
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center">
              <div className="md:w-1/2 text-center">
                <Services
                  title="Smoke Testing"
                  img={Smoke}
                  description=" Pinpoint leaks and identify plumbing issues swiftly using non-invasive smoke detection methods for a comprehensive diagnosis."
                />
              </div>
              <div className="md:w-1/2 text-center">
                <Services
                  title="Video Inspection"
                  img={VideoInspection}
                  description="We use high quality video inspection tools for all types of lines and for easy diagnosis."
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center">
              <div className="md:w-1/2 text-center">
                <Services
                  title="Water Heater Service "
                  img={WaterHeater}
                  description="Whether repairs or replacements, our expert team handles all water heater needs with precision, ensuring reliable performance and uninterrupted hot water supply"
                />
              </div>
              <div className="md:w-1/2 text-center">
                <Services
                  title="Trenchless Replacement"
                  img={Trenchless}
                  description="Modern solutions for seamless pipe replacement without disrupting your property. Efficient, non-invasive, and preserving the integrity of your surroundings."
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center">
              <div className="md:w-1/2 text-center">
                <Services
                  title="Fixture Service"
                  img={Fixture}
                  description="Revitalize your space with our professional service. From repairs to stylish replacements, we ensure top-quality fixtures for your convenience and aesthetics."
                />
              </div>
              <div className="md:w-1/2 text-center">
                <Services
                  title="New Construction"
                  img={NewConstruction}
                  description="Partner with us for impeccable plumbing solutions in your new builds. Our expertise ensures precision, reliability, and quality in every aspect of plumbing installation for your project's success."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </>
  );
};
export default ServicesView;
