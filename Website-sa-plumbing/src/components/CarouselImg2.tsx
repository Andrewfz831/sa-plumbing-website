import Carousel from "./Carousel";
import img1 from "../images/saReview5.png";
import img2 from "../images/saReview6.png";
import img3 from "../images/saReview4.png";

export default function ImageCarousel2() {
  const slides = [img3, img2, img1];

  return (
    <div className="relative z-0 flex justify-center">
      <div className=" max-w-3xl md:max-w-xl lg:max-w-6xl">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
