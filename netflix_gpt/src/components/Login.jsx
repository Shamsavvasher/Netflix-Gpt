import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div className="">
        <img
          className=" h-screen w-full absolute "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
          alt=""
        />
        {/* <div className="w-[100%] min-h-screen relative -top-[733px]  bg-black opacity-60"></div> */}
        <div className=" w-[450px] h-[500px] bg-black relative rounded-md top-36 left-[500px]  px-16 bg-opacity-80">
          <h1 className="font-semibold text-3xl mt-10 mr-[210px] py-8 text-white z-auto">
            {isSignInForm ? "Sign In" : "SignUp"}
          </h1>
          <div className=" w-[314px] h-[350px]  flex justify-center">
            <form action="">
              {!isSignInForm && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="py-3 px-4 mt-4 text-white w-full border-2 rounded solid bg-opacity-50 bg-gray-600"
                />
              )}
              <input
                type="text"
                placeholder="Email Address"
                className="py-3 px-4 mt-4 text-white w-full border-2 rounded solid bg-opacity-50 bg-gray-600"
              />
              <input
                type="text"
                placeholder="Password"
                className="py-3 px-4 text-white mt-4 w-full border-2 rounded solid bg-opacity-50 bg-gray-600"
              />
              <button className="py-2  bg-red-700 mt-8 w-full rounded solid">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              <p className="text-center mt-2 text-white font-semibold">OR</p>
              {/* <button className="py-2  mt-2 w-full rounded solid bg-opacity-50 bg-gray-600">
                Use a Sign-in code
              </button> */}
              <p
                className="text-start mt-4 text-white font-semibold cursor-pointer"
                onClick={toggleSignInForm}
              >
                {isSignInForm
                  ? "New to Netflix? Sign Up Now"
                  : "Already registered? Sign In Now"}
              </p>
            </form>
            {/* <div className=" w-[314px] h-[200px] bg-red-400 flex justify-center px-6 mt-[355px] absolute"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
