import { FaStar } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../images/pexels-olly-733872.jpg";
import image2 from "../images/pexels-olly-762080.jpg";
import image3 from "../images/pexels-olly-774909.jpg";
import image4 from "../images/pexels-reead-886285.jpg";
import image5 from "../images/pexels-xmtnguyen-699953.jpg";
import image6 from "../images/pexels-trinitykubassek-445109.jpg";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <GrLinkPrevious
      className={className}
      style={{
        ...style,
        display: "block",
        color: "green",
        fontSize: "2rem",
        left: "-25px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <GrLinkNext
      className={className}
      style={{
        ...style,
        display: "block",
        color: "green",
        fontSize: "2rem",
        right: "-25px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "John Doe",
      status: "Active customer",
      image: image,
      text:
        "I recently purchased the XYZ product, and it exceeded all my expectations. The quality is outstanding, and it works flawlessly. Customer service was very responsive and helpful throughout the process.",
    },
    {
      name: "Jane Doe",
      status: "Active customer",
      image: image2,
      text:
        "I recently purchased the XYZ product, and it exceeded all my expectations. The quality is outstanding, and it works flawlessly. Customer service was very responsive and helpful throughout the process.",
    },
    {
      name: "John Smith",
      status: "Active customer",
      image: image3,
      text:
        "I recently purchased the XYZ product, and it exceeded all my expectations. The quality is outstanding, and it works flawlessly. Customer service was very responsive and helpful throughout the process.",
    },
    {
      name: "Jane Smith",
      status: "Active customer",
      image: image4,
      text:
        "I recently purchased the XYZ product, and it exceeded all my expectations. The quality is outstanding, and it works flawlessly. Customer service was very responsive and helpful throughout the process.",
    },
    {
      name: "John Johnson",
      status: "Active customer",
      image: image5,
      text:
        "I recently purchased the XYZ product, and it exceeded all my expectations. The quality is outstanding, and it works flawlessly. Customer service was very responsive and helpful throughout the process.",
    },
    {
      name: "Jane Johnson",
      status: "Active customer",
      image: image6,
      text:
        "I recently purchased the XYZ product, and it exceeded all my expectations. The quality is outstanding, and it works flawlessly. Customer service was very responsive and helpful throughout the process.",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center w-full gap-y-16"
      id="testimonials"
    >
      <h1 className="p-5 mx-auto text-6xl text-white bg-green-400 rounded-full font-joining w-max">
        Customer Reviews
      </h1>
      <div className="w-[90%] py-6 pb-8 mx-auto bg-white border border-gray-300 rounded-lg shadow-md">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-6 py-6 mx-auto ml-20 bg-white xl:shadow-lg xl:shadow-black max-w-96 review rounded-xl"
            >
              <img
                src={testimonial.image}
                alt=".."
                className="object-cover w-16 h-16 mx-auto rounded-full"
              />
              <div className="flex flex-col items-center justify-center">
                <h2 className="mt-2 text-lg text-fade-black font-radios">
                  {testimonial.name}
                </h2>
                <h4 className="text-lg text-gray-900 font-radios">
                  {testimonial.status}
                </h4>
              </div>
              <div className="flex flex-row items-center justify-center mt-2 gap-x-1">
                <FaStar size={20} className="text-yellow-400" />
                <FaStar size={20} className="text-yellow-400" />
                <FaStar size={20} className="text-yellow-400" />
                <FaStar size={20} className="text-yellow-400" />
                <FaStar size={20} className="text-yellow-400" />
              </div>
              <p className="mt-2 text-sm text-justify text-gray-600 font-radios">
                {testimonial.text}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
