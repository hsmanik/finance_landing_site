export const Analytics = () => {
  return (
    <div className=" w-full bg-white py-16 px-4">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className=" w-[500px] mx-auto my-4 px-2"
          src="https://www.pathwaysinternational.com/wp-content/uploads/2017/12/da-1.jpg"
          alt="analytics image"
        />
        <div className=" flex flex-col justify-center">
          <p className=" text-[#6A7AFC]">Data Analytics Dashboard</p>
          <h1 className=" md:text-4xl sm:text-3xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Elevate your financial prowess with bespoke analytics designed for
            Sass enterprises and Business-to-Business interactions. Gain
            insights that empower strategic decisions, drive growth, and unlock
            the full potential of your business in a rapidly evolving financial
            landscape.
          </p>
          <button className=" hover:bg-gray-700 bg-black w-[200px] rounded-lg font-medium my-6 mx-auto md:mx-0 py-3 text-[#6A7AFC]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
