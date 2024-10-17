import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValiDate from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handlebuttonclick = () => {
    // Name validation for sign-up form
    if (!isSignInForm && name.current) {
      const nameValue = name.current.value.trim();
      if (nameValue === "") {
        setErrorMessage("Name is required.");
        return;
      }
      if (nameValue.length < 3) {
        setErrorMessage("Name must be at least 3 characters long.");
        return;
      }
      console.log(nameValue);
    }

    // Validate email and password
    if (email.current && password.current) {
      console.log(email.current.value);
      console.log(password.current.value);

      const message = checkValiDate(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      console.log(message);
    }
  };

  return (
    <>
      <Header />
      <div className="flex object-contain">
        <img
          className="h-screen w-full absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
          alt=""
        />
        <div className="w-[450px] h-[500px] bg-black relative rounded-md top-36 left-[500px] px-16 bg-opacity-80">
          <h1 className="font-semibold text-3xl mr-[210px] py-8 text-white z-auto">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div className="w-[314px] h-[350px] -mt-[10px] flex justify-center">
            <form onSubmit={(e) => e.preventDefault()}>
              {!isSignInForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Full Name"
                  className="py-3 px-4 mt-4 text-white w-full border-2 rounded solid bg-opacity-50 bg-gray-600"
                />
              )}
              <input
                ref={email}
                type="email"
                placeholder="Email Address"
                className="py-3 px-4 mt-4 text-white w-full border-2 rounded solid bg-opacity-50 bg-gray-600"
              />
              <input
                ref={password}
                type="text"
                placeholder="Password"
                className="py-3 px-4 text-white mt-4 w-full border-2 rounded solid bg-opacity-50 bg-gray-600"
              />
              <p className="text-red-600">{errorMessage}</p>
              <button
                onClick={handlebuttonclick}
                className="py-2 text-white font-semibold bg-[#ff0000] hover:bg-[#C11119] mt-8 w-full rounded solid"
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              <p className="text-center mt-2 text-white font-semibold">OR</p>
              <p
                className="text-start mt-4 text-white font-semibold hover:underline cursor-pointer"
                onClick={toggleSignInForm}
              >
                {isSignInForm
                  ? "New to Netflix? Sign Up Now"
                  : "Already registered? Sign In Now"}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
