import Carousel from "./Carousel";
import img1 from "../images/drainCleaning.png";
import img2 from "../images/hydroJetting.png";
import img3 from "../images/fixture.png";

export default function ImageCarousel() {
  const slides = [img2, img3, img1];

  return (
    <div className="relative z-0 flex justify-center">
      <div className=" max-w-xl md:max-w-3xl">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
