import image2 from "../images/pasta-spaghetti-with-zucchini-basil-cream-cheese-stone-table.jpg";
import About from "./About";
import ContactUs from "./ContactUs";
import Discounts from "./Discounts";
import DishFeature from "./DishFeature";
import Footer from "./Footer";
import Packages from "./Packages";
import Services from "./Services";
import TestimonialSlider from "./Testimonials";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-28">
      <div
        className="flex flex-col justify-center object-cover h-screen bg-center bg-cover "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image2})`,
        }}
      >
        <div className="flex flex-col items-center justify-center mt-6 gap-y-4 ">
          <h1 className="text-3xl font-bold text-white md:text-5xl xl:text-7xl">
            WELCOME TO RANCHERS
          </h1>
          <h1 className="font-sans text-xl font-bold text-white md:text-3xl xl:text-4xl">
            Deliciousness Delivered to Your Doorstep{" "}
          </h1>
          <h1 className="text-lg text-white md:text-2xl font-radios">
            Order your favorite meals online
          </h1>
          <div className="flex items-center justify-center gap-x-3">
            <button className="px-5 py-3 text-white bg-green-400 rounded-full shadow-lg font-radios ">
              Order Food
            </button>
            <button className="px-5 py-3 text-white bg-green-400 rounded-full shadow-lg font-radios ">
              Contact Us
            </button>
          </div>
          <button></button>
        </div>
      </div>
      <About />
      <Services />
      <Packages />
      <DishFeature />
      <Discounts />
      <TestimonialSlider />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
