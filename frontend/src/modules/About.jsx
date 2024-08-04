import image from "../images/various-types-salads-dishes-table-top-view.jpg";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-auto gap-y-12" id="about">
      <h1 className="p-5 mx-auto mt-4 mb-10 text-6xl text-white bg-green-400 rounded-full font-joining w-max">
        About Us
      </h1>
      <div className="flex flex-row items-center w-[70%] justify-center gap-x-8">
        <section className="relative py-24 mr-0 xl:mr-0 lg:mr-5">
          <div className="w-full px-4 mx-auto max-w-7xl md:px-5 lg:px-5">
            <div className="grid items-center justify-start w-full grid-cols-1 gap-10 xl:gap-12 lg:grid-cols-2">
              <div className="inline-flex flex-col items-center justify-center w-full gap-10 lg:items-start">
                <div className="flex flex-col items-start justify-center w-full gap-8">
                  <div className="flex flex-col items-center justify-start gap-4 lg:items-start">
                    <h6 className="p-3 text-3xl font-bold leading-relaxed text-white bg-green-400 rounded-full ">
                      About Us
                    </h6>
                    <div className="flex flex-col items-center justify-start w-full gap-3 lg:items-start">
                      <h2 className="text-4xl font-bold leading-normal text-center text-green-400 font-radios lg:text-start">
                        Welcome to the Ranchers
                      </h2>
                      <p className="text-base font-normal leading-relaxed text-center text-gray-500 lg:text-start">
                        Our achievement story is a testament to teamwork and
                        perseverance. Together, we've overcome challenges,
                        celebrated victories, and created a narrative of
                        progress and success.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center w-full gap-6">
                    <div className="grid items-center justify-start w-full grid-cols-1 gap-8 md:grid-cols-2">
                      <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-green-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-2xl font-bold leading-9 text-green-400 font-radios">
                          33+ Years
                        </h4>
                        <p className="text-base font-normal leading-relaxed text-gray-500">
                          Influencing Digital Landscapes Together
                        </p>
                      </div>
                      <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-green-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-2xl font-bold leading-9 text-green-400 font-radios">
                          125+ Projects
                        </h4>
                        <p className="text-base font-normal leading-relaxed text-gray-500">
                          Excellence Achieved Through Success
                        </p>
                      </div>
                    </div>
                    <div className="grid items-center justify-start w-full h-full grid-cols-1 gap-8 md:grid-cols-2">
                      <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-green-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-2xl font-bold leading-9 text-green-400 font-radios">
                          26+ Awards
                        </h4>
                        <p className="text-base font-normal leading-relaxed text-gray-500">
                          Our Dedication to Innovation Wins Understanding
                        </p>
                      </div>
                      <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-green-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-2xl font-bold leading-9 text-green-400 font-radios">
                          99% Happy Clients
                        </h4>
                        <p className="text-base font-normal leading-relaxed text-gray-500">
                          Mirrors our Focus on Client Satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                  <span className="px-1.5 text-green-400 text-lg font-radios font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                    Read More
                  </span>
                  <svg
                    className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                      stroke="#4F46E5"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-start justify-center w-full lg:justify-start">
                <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                  <img
                    className="object-cover w-full h-full sm:mt-5 sm:ml-5 rounded-3xl"
                    src={image}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
