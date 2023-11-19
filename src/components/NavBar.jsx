import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

export const NavBar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" text-white flex justify-between h-24 max-w-[1240px] mx-auto px-4 items-center">
      <h1 className=" w-full text-3xl font-bold text-[#6A7AFC] ">Finance.</h1>
      <ul className="hidden md:flex">
        <li className=" p-4 hover:bg-gray-600 rounded-md cursor-pointer">
          Home
        </li>
        <li className=" p-4 hover:bg-gray-600 rounded-md cursor-pointer">
          Company
        </li>
        <li className=" p-4 hover:bg-gray-600 rounded-md cursor-pointer">
          Resources
        </li>
        <li className=" p-4 hover:bg-gray-600 rounded-md cursor-pointer">
          About
        </li>
        <li className=" p-4 hover:bg-gray-600 rounded-md cursor-pointer">
          Contacts
        </li>
      </ul>
      <div onClick={handleNav} className=" block md:hidden">
        {!nav ? (
          <RxCross2 className=" font-bold cursor-pointer" size={20} />
        ) : (
          <TiThMenu size={20} className=" cursor-pointer" />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#000300] p-4 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className=" w-full text-3xl font-bold text-[#6A7AFC] m-4 ">
          Finance.
        </h1>
        <ul className=" p-4">
          <li className=" p-4 border-b border-gray-600 cursor-pointer">Home</li>
          <li className=" p-4 border-b border-gray-600 cursor-pointer">
            Company
          </li>
          <li className=" p-4 border-b border-gray-600 cursor-pointer">
            Resources
          </li>
          <li className=" p-4 border-b border-gray-600 cursor-pointer">
            About
          </li>
          <li className=" p-4">Contacts</li>
        </ul>
      </div>
    </div>
  );
};
