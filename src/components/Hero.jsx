import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <div className=" text-white">
      <div className=" max-w-[800px] mt-[-96px] w-full h-screen text-center flex flex-col justify-center mx-auto">
        <p className=" text-[#6A7AFC] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className=" md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data
        </h1>
        <div className=" flex text-center items-center justify-center">
          <p className=" md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
            <span className="md:text-5xl sm:text-4xl text-xl font-bold ml-2">
              <Typewriter
                words={["Sass", "BTC", "BTB"]}
                loop={1000}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={120}
              />
            </span>
          </p>
        </div>
        <p className=" md:text-2xl sm:text-xl font-bold text-gray-600 pt-2">
          Monitor Your Data Analytics to increase your revenue
        </p>
        <button className=" hover:scale-105 duration-300 bg-[#6A7AFC] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};
