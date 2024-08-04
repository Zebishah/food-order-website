import image2 from "../images/various-types-salads-dishes-table-top-view.jpg";
import image3 from "../images/pexels-willpicturethis-2641886.jpg";
import image4 from "../images/pexels-ash-craig-122861-376464.jpg";
const DishFeature = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-16" id="features">
      <h1 className="p-5 mx-auto text-6xl text-white bg-green-400 rounded-full font-joining w-max">
        Featured Dishes
      </h1>
      <div className="flex-col flex lg:flex-row justify-center items-center gap-x-3 gap-y-3 w-[80%]">
        <div
          className="h-[70vh] bg-center bg-cover w-[80%] lg:w-[50%] p-4 flex flex-col gap-y-3 justify-center items-center rounded-xl"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image2})`,
          }}
        >
          <h1 className="text-xl font-bold text-white md:text-5xl xl:text-5xl">
            Buy Our Special Spaghetti
          </h1>
          <p className="text-lg text-white font-radios">
            We are giving you a 10% discount on this Product{" "}
          </p>
          <button className="px-5 py-3 mx-auto text-white bg-green-400 rounded-full w-max font-radios ">
            Order Now
          </button>
        </div>
        <div className="h-[70vh] w-[80%] lg:w-[50%] flex flex-col gap-y-4">
          <div
            className="flex flex-col items-center justify-center w-full h-full p-3 bg-center bg-cover gap-y-3 rounded-xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image3})`,
            }}
          >
            <h1 className="text-xl font-bold text-white md:text-4xl">
              Buy Our Special Spaghetti
            </h1>
            <p className="text-lg text-white font-radios">
              We are giving you a 10% discount on this Product{" "}
            </p>
            <button className="px-5 py-3 mx-auto text-white bg-green-400 rounded-full w-max font-radios ">
              Order Now
            </button>
          </div>
          <div
            className="flex flex-col items-center justify-center w-full h-full p-3 bg-center bg-cover gap-y-3 rounded-xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image4})`,
            }}
          >
            <h1 className="text-xl font-bold text-white md:text-4xl ">
              Buy Our Special Spaghetti
            </h1>
            <p className="text-lg text-white font-radios">
              We are giving you a 10% discount on this Product{" "}
            </p>
            <button className="px-5 py-3 mx-auto text-white bg-green-400 rounded-full w-max font-radios ">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishFeature;
