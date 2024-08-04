import image from "../images/top-close-up-view-salad-spices-bell-peppers-with-leaves-board-with-bowl-salad.jpg";

const Discounts = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-16" id="discount">
      <h1 className="p-5 mx-auto text-6xl text-white bg-green-400 rounded-full font-joining w-max">
        Featured Discounts
      </h1>
      <header className="w-full my-24 h-[60vh]">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full py-12 bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                  <span className="text-3xl font-bold tracking-widest text-gray-200 uppercase font-radios">
                    Discounted Offer
                  </span>
                  <h2 className="mt-8 mb-6 text-4xl font-bold text-gray-100 lg:text-5xl">
                    Welcome To Our Restaurant Ranchers
                  </h2>
                  <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                    There is amazing discount started at the Ranchers from june
                    2015 and we are looking for giving more Discounts, Be the
                    First one to get our discount at Ranchers
                  </p>
                  <button className="px-5 py-3 mx-auto text-white bg-green-400 rounded-full w-max font-radios ">
                    See Discounts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Discounts;
