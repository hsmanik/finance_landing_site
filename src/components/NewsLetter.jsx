export const NewsLetter = () => {
  return (
    <div className=" w-full py-16 text-white px-4">
      <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className=" lg:col-span-2 my-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our news Letter and stay up to date.</p>
        </div>
        <div className=" my-4">
          <div className=" flex flex-col sm:flex-row items-center justify-between w-full gap-2">
            <input
              className=" p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter email.."
            />
            <button className=" hover:scale-105 duration-300 bg-[#6A7AFC] w-[200px] rounded-lg font-medium my-6 mx-auto md:mx-0 py-3 text-black">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protecttion of your data. Read our{" "}
            <span className=" text-[#6A7AFC]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
