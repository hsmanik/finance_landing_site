import Single from "../assets/Single.png";
import Double from "../assets/Double.png";
import Triple from "../assets/Triple.png";
export const Cards = () => {
  return (
    <div className=" w-full py-[10rem] px-4 bg-white">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ease-in-out ">
          <img className="w-20 mx-auto mt-[-2rem]" src={Single} alt="" />
          <h2 className=" text-2xl font-bold text-center py-8">Single User</h2>
          <p className=" text-center font-bold text-4xl">Rs.5000</p>
          <div className=" text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#6A7AFC] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 px-6 text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ease-in-out">
          <img className="w-20 mx-auto mt-[-2rem]" src={Double} alt="" />
          <h2 className=" text-2xl font-bold text-center py-8">Partnership</h2>
          <p className=" text-center font-bold text-4xl">Rs.7500</p>
          <div className=" text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">3 Users Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className="bg-[#6A7AFC] w-[200px] rounded-lg font-medium my-6 mx-auto px-6 py-3 text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ease-in-out">
          <img className="w-20 mx-auto mt-[-2rem]" src={Triple} alt="" />
          <h2 className=" text-2xl font-bold text-center py-8">
            Group Account
          </h2>
          <p className=" text-center font-bold text-4xl">Rs.12500</p>
          <div className=" text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8">10 Users Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB</p>
          </div>
          <button className="bg-[#6A7AFC] w-[200px] rounded-lg font-medium my-6 mx-auto px-6 py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};
