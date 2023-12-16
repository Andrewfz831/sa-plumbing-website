import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Img from "../images/hydroJetting.png";
import Img2 from "../images/drainCleaning.png";
import WhyChooseUs from "../components/whyChooseUs";
import Phone from "../assets/phone-call.svg";
import ContactSection from "../components/EmailForm";

const About = () => {
  return (
    <>
      <Navbar />
      <div className=" py-36 flex flex-col justify-center px-28 text-white bg-neutral-900">
        <h2 className="flex justify-start py-10 text-4xl md:text-5xl ">
          About Us
        </h2>
        <p className=" md:w-2/5">
          We are a team of professional plumbers with an experience of 15+ years
          in residential and commercial plumbing
        </p>
      </div>

      <div className="flex flex-row mt-20">
        <div className="w-1/2 mt-5 ml-20">
          <img src={Img} alt="" />
        </div>
        <div className=" w-1/2 mt-5 ml-1 p-10 bg-blue-500 text-white">
          <h3 className="pb-5 text-4xl font-semibold">How we started</h3>
          <p className=" text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            laborum necessitatibus recusandae qui quia nisi minus totam
            exercitationem corrupti, quas ratione facilis earum doloribus neque
            a animi. Minus, eos alias.
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 mt-5 ml-20">
          <h3 className="text-4xl text-gray-700 my-5">Our Mission</h3>
          <p>
            At SA Plumbing, our mission is simple: to deliver top-notch,
            reliable plumbing services while prioritizing customer satisfaction.
            Our team comprises skilled professionals who are not just experts in
            their field but also passionate about resolving your plumbing
            concerns promptly and efficiently.
          </p>
        </div>
        <div className="w-1/2 mt-5 ml-20 mb-20">
          <h3 className="text-4xl text-gray-700 my-5">Our Core Value</h3>
          <WhyChooseUs text="Consider honesty as the key to a business’ trustworthiness and integrity." />
          <WhyChooseUs text="Always do the right thing to solve the customer’s problem." />
          <WhyChooseUs text="Perform all work with the highest level of excellence in mind." />
        </div>
      </div>
      <div className="flex flex-row  px-20 bg-blue-500 mb-20">
        <div className="text-white mr-5 py-32">
          <h3 className="pb-5 text-4xl font-semibold">
            We're here to help! Give us a call
          </h3>
          <div className="flex flex-row">
            <img src={Phone} alt="" className="w-10" />
            <span className="text-2xl ml-5">(831) 840-3058</span>
          </div>
        </div>
        <div>
          <img src={Img2} alt="" />
        </div>
      </div>
      <ContactSection />
      <Footer />
    </>
  );
};
export default About;
