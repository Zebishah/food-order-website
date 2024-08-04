import image2 from "../images/various-types-salads-dishes-table-top-view.jpg";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";
const SignUpForm = () => {
  return (
    <div
      className="flex items-center justify-center w-full mt-20 h-[100vh] bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image2})`,
      }}
    >
      <div className="flex flex-col gap-y-8 justify-center items-center w-[30%] bg-[#ffffff] p-6 rounded-xl">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <h1 className="w-full p-3 text-2xl text-white bg-green-400 rounded-full font-radios ">
            Welcome to Ranchers
          </h1>
        </div>

        <form className="flex flex-col items-center justify-center w-full gap-y-3">
          <div className="flex items-center justify-between border-1 border-gray-400 px-3 py-1 rounded-full w-[68%] hover:scale-105 hover:border-green-400 transition-all ease-in-out duration-300">
            <input
              placeholder="username"
              type="text"
              name="name"
              id="name"
              className="p-3 placeholder:text-gray-800 placeholder:text-sm outline-none font-radios text-light-black w-[90%]"
            />
            <FaUser size={20} className="text-green-400" />
          </div>
          <div className="flex items-center justify-between border-1 border-gray-400 px-3 py-1 rounded-full w-[68%] hover:scale-105 hover:border-green-400 transition-all ease-in-out duration-300">
            <input
              placeholder="email"
              type="email"
              name="email"
              id="email"
              className="p-3 placeholder:text-gray-800 placeholder:text-sm outline-none font-radios text-light-black w-[90%]"
            />
            <MdEmail size={20} className="text-green-400" />
          </div>
          <div className="flex items-center justify-between border-1 border-gray-400 px-3 py-1 rounded-full w-[68%] hover:scale-105 hover:border-green-400 transition-all ease-in-out duration-300">
            <input
              placeholder="phone number"
              type="text"
              name="phone"
              id="phone"
              className="p-3 placeholder:text-gray-800 placeholder:text-sm outline-none font-radios text-light-black w-[90%]"
            />
            <FaPhone size={20} className="text-green-400" />
          </div>
          <div className="flex items-center justify-between border-1 border-gray-400 px-3 py-1 rounded-full w-[68%] hover:scale-105 hover:border-green-400 transition-all ease-in-out duration-300">
            <input
              placeholder="password"
              type="text"
              name="password"
              id="password"
              className="p-3 placeholder:text-gray-800 placeholder:text-sm outline-none font-radios text-light-black w-[90%]"
            />
            <RiLockPasswordFill size={20} className="text-green-400" />
          </div>
          <div className="flex items-center justify-between border-1 border-gray-400 px-3 py-1 rounded-full w-[68%] hover:scale-105 hover:border-green-400 transition-all ease-in-out duration-300">
            <input
              placeholder="confirm password"
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              className="p-3 placeholder:text-gray-800 placeholder:text-sm outline-none font-radios text-light-black  w-[90%]"
            />
            <RiLockPasswordFill size={20} className="text-green-400" />
          </div>
        </form>
        <div className="flex flex-col items-center justify-center w-[68%]">
          <button className="w-full px-4 py-4 text-sm text-white transition-all duration-300 ease-in-out bg-green-400 rounded-full shadow-lg font-radios hover:scale-110 hover:bg-green-700">
            Register
          </button>
          <div className="flex items-center w-full gap-3 my-6">
            <hr className="w-full border-gray-800" />
            <p className="text-sm text-center text-gray-800">or</p>
            <hr className="w-full border-gray-800" />
          </div>
          <button className="w-full px-4 py-4 text-sm text-white transition-all duration-300 ease-in-out bg-green-400 rounded-full shadow-lg font-radios hover:scale-110 hover:bg-green-700">
            Sign in with Google
          </button>
        </div>
        <div className="flex flex-col gap-y-3 items-start justify-center w-[68%]">
          <div className="flex flex-row items-center justify-center gap-x-2">
            <input
              type="checkbox"
              name="check"
              id="check"
              className="text-lg"
            />
            <p className="text-sm font-radios">
              Are You agree to the terms and conditions
            </p>
          </div>
          <div className="flex flex-row items-center justify-center mx-auto gap-x-2">
            <p className="text-sm text-black font-radios">
              Already have and account ?
            </p>
            <button className="px-4 py-2 text-sm text-white transition-all duration-300 ease-in-out bg-green-400 rounded-full shadow-lg font-radios hover:bg-green-700">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
