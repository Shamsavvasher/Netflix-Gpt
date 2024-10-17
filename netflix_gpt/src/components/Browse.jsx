import React from "react";

const Browse = () => {
  return (
    <div>
      <h1>Browse</h1>
      <p>This is the Browse page.</p>
      <div className="w-[100%] h-[100%] flex relative items-center justify-center ">
        <div className=" w-[450px] h-[600px] bg-black   px-6  absolute flex  justify-center">
          <h1 className="font-semibold text-3xl mt-10 mr-[210px] text-white z-auto">
            Sign IN
          </h1>
          <div className=" w-[314px] h-[350px]  flex justify-center  mt-[80px]  absolute">
            <form action="">
              <input
                type="text"
                placeholder="Email Address"
                className="py-3 px-4 mt-4 w-full border-2 rounded solid text-transparent"
              />
              <input
                type="text"
                placeholder="Password"
                className="py-3 px-4  mt-4 w-full border-2 rounded solid"
              />
              <button className="py-2 bg-red-600 mt-4 w-full rounded solid">
                Sign In
              </button>
              <p className="text-center mt-2 text-white font-semibold">OR</p>
              <button className="py-2 bg-gray-400 mt-2 w-full rounded solid">
                Use a Sign-in code
              </button>
              <p className="text-center mt-4 text-white font-semibold">
                Forgot password?
              </p>
            </form>
            <div className=" w-[314px] h-[200px] bg-red-400 flex justify-center px-6 mt-[355px] absolute"></div>
          </div>
        </div>
        <div>
          <img
            className="w-[100%] h-[100%]"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
            alt="background"
          />
          {/* <div className="w-full h-full bg-black relative flex "></div> */}
        </div>
      </div>
    </div>
  );
};

export default Browse;
