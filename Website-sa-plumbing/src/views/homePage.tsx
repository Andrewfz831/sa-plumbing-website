import Nav from "../components/Nav";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Footer from "../components/Footer";
import Fixture from "../assets/fixture.svg";
import ContactSection from "../components/EmailForm";
import Repair from "../assets/repair.svg";
import Shower from "../assets/shower.svg";
import IconSection from "../components/IconSection";
import ImageCarousel2 from "../components/CarouselImg2";
import BackgroundImg from "../images/bgPipes.jpeg";
import ScBg from "../images/AdobeStock_227980864_Preview.jpeg";
import NumbersSpeak from "../components/NumbersSpeakSection";
import PlumberWorking from "../images/plumberWorking.jpeg";
import WhyChooseUse from "../components/whyChooseUs";

const Homepage = () => {
  const phoneNumber = "+8318403058";
  return (
    <div id="home" className=" font-newFont overflow-hidden ">
      <Nav />
      <div
        className=" py-52 flex flex-col justify-center"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="flex justify-center md:justify-end"> */}
        <div className="flex justify-center">
          <div className="flex flex-col justify-center text-center items-center  ">
            {/* <div className="w-3/4 flex flex-col justify-center text-center items-center  "> */}
            <div>
              <h2 className="text-white text-4xl md:text-6xl p-5">
                SA Plumbing
              </h2>
              <h1 className="text-white flex flex-col justify-center h-fill text-2xl md:text-3xl pb-2">
                24/7 Emergency Service
              </h1>
            </div>
            <div className="flex flex-row">
              <a href={`tel:${phoneNumber}`}>
                <button
                  type="button"
                  className="text-white bg-blue-600 border-2 border-blue-600 font-medium rounded-lg text-lg px-4 py-2 text-center mr-3 hover:bg-orange-500 hover:border-orange-500"
                >
                  Call
                </button>
              </a>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <button
                  type="button"
                  className="text-white  border-2 border-white font-medium rounded-lg text-lg px-4 py-2 text-center mr-3 md:mr-0 hover:bg-orange-500 hover:border-orange-500"
                >
                  Send us an email
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 flex justify-center items-center flex-col lg:flex-row">
        <div className=" flex flex-col justify-end items-end">
          <div className=" relative flex justify-end border ">
            <img src={PlumberWorking} alt="" className=" h-96" />

            <div className="flex flex-col items-center justify-center w-52 h-40 bg-orange-500 absolute bottom-64">
              <span className="text-white text-5xl font-semibold">15+</span>
              <span className="text-white text-lg pt-5">
                Years of Experience
              </span>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center md:items-start px-10 py-5">
          <div className=" text-xl font-medium pb-5">Why Choose Us?</div>
          <div className=" text-5xl font-semibold">
            Focused on getting the job done!
          </div>
          <p className="text-center md:text-left py-5">
            Efficient solutions for all your plumbing needs. We tackle every
            task with expertise and dedication.
          </p>
          <div>
            <WhyChooseUse text="Unmatched performance, satisfaction service guarantees" />
            <WhyChooseUse text="Fully lisenced LIC# 1035812" />
            <WhyChooseUse text="Home protection through our shoe covers and mats" />
            <WhyChooseUse text="24 / 7 availability for all emergency services" />
            <WhyChooseUse text="Clear communication and updates on service arrival" />
            <WhyChooseUse text="Free estimates" />
            <WhyChooseUse text="Habla Espańol" />
          </div>
        </div>
      </div>

      <div id="reviews" className="h-14 "></div>

      <div
        className="bg-fixed "
        style={{
          backgroundImage: `url(${ScBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="  md:mx-auto lg:max-w-screen-lg h-fit flex flex-col lg:flex-row justify-center items-center p-10">
          <div className="flex flex-col items-center">
            <div className="text-white text-4xl md:text-5xl p-10 text-center font-semibold">
              Our Testimonials
            </div>
            <p className="text-md md:text-lg text-white text-center">
              We Believe in providing superior customer service & plumbing
              maintenance/repairs for optimal functionality
            </p>
            <RouterLink to="https://www.yelp.com/biz/sa-plumbing-freedom?hrid=uJRLWdxNDNvzrdTIS50geg&rh_ident=Sergio&rh_type=people">
              <button
                type="button"
                className="text-white bg-blue-600 border-2 border-blue-600  font-medium rounded-lg text-lg px-4 py-2 text-center m-10 hover:bg-orange-500 hover:border-orange-500"
              >
                More Reviews
              </button>
            </RouterLink>
          </div>
          <ImageCarousel2 />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="flex justify-center mt-10 text-4xl md:text-5xl text-gray-700 font-semibold">
          Numbers Speak
        </h3>
        <p className="m-10 text-center text-lg max-w-2xl text-gray-500">
          Showcasing the trust and satisfaction of our clientele. Our commitment
          to excellence resonates through the numerous satisfied customers who
          have benefited from our top-tier plumbing services.
        </p>
      </div>

      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg mb-10 mt-5 flex flex-col md:flex-row items-center justify-around">
        <NumbersSpeak
          number="24/7"
          text="Emergency service, we'll be there as soon as possible "
        />

        <NumbersSpeak number="15+" text="Positive Ratings on our Yelp page" />
        <NumbersSpeak
          number="1k+"
          text="Customers are satisfied with our services"
        />
      </div>
      <h2
        id="services"
        className="flex justify-center p-5 text-4xl md:text-5xl text-neutral-800 font-semibold border-b-2 border-blue-500"
      >
        Our Services
      </h2>
      <div className="flex flex-col justify-center items-center">
        <div className=" flex justify-around items-center  md:py-20 ">
          <div className="flex-col md:flex-row flex items-center">
            <div>
              <IconSection
                text="Repair"
                icon={Repair}
                description="
              Our expertise covers a wide range of plumbing repair services, ensuring comprehensive solutions for all your needs."
              />
            </div>
            <div>
              <IconSection
                text="Replace"
                icon={Fixture}
                description="We replace all damaged & outdated plumbing fixtures for modern efficiency."
              />
            </div>
            <div>
              <IconSection
                text="Remodel"
                icon={Shower}
                description="
             Renew your kitchen/bathroom with a stunning remodel! Transform your space into a captivating & functional masterpiece."
              />
            </div>
          </div>
        </div>
        <RouterLink to="/Services">
          <button
            type="button"
            className="text-white bg-blue-600 border-2 border-blue-600  font-medium rounded-lg text-lg px-4 py-2 text-center m-10 hover:bg-orange-500 hover:border-orange-500"
          >
            More Services
          </button>
        </RouterLink>
      </div>

      <ContactSection />
      <Footer />
    </div>
  );
};
export default Homepage;
