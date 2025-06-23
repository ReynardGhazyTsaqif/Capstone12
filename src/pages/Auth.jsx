import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="relative w-full min-h-screen overflow-y-auto">
      {/* Background blur image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-xs"
        style={{ backgroundImage: "url('/img/Bg-auth.avif')" }}
      ></div>

      {/* Main Card */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-3/4 h-[550px] rounded-[10px] overflow-hidden bg-cover bg-center flex flex-col md:flex-row"
        style={{ backgroundImage: "url('/img/Bg-auth.avif')" }}
      >
        {/* Left Side Content */}
        <div className="hidden md:flex relative z-10 w-1/2 h-full flex-col justify-between p-10 text-black">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <i className="fab fa-firefox-browser"></i> Rynnews
            </h2>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-semibold leading-none">
              Welcome! <br />
              <span className="text-cyan-950">To Our Website</span>
            </h2>
            <p className="my-5 mx-0">
              We are building a news portal that delivers a wide variety of
              up-to-date, accurate, and reliable news across multiple categories
              just for you
            </p>
            <div className="flex gap-5 text-xl">
              <a
                className="hover:scale-110 transition-transform"
                href="https://instagram.com/reynard_ghazy"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="hover:scale-110 transition-transform"
                href="https://linkedin.com/in/reynard-ghazy-tsaqif-8457a7287"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                className="hover:scale-110 transition-transform"
                href="https://x.com/GhazyReynard"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="hover:scale-110 transition-transform"
                href="https://github.com/ReynardGhazyTsaqif"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Form Container */}
        <div className="relative w-full md:w-1/2 h-full overflow-hidden backdrop-blur-xs">
          {/* LOGIN FORM */}
          <div
            className={`absolute top-0 left-0 w-full h-full px-8 transition-all duration-700 ease-in-out ${
              isLogin
                ? "translate-x-0 opacity-100 z-20"
                : "-translate-x-full opacity-0 z-10"
            }`}
          >
            <div className="flex justify-center items-center w-full h-full text-[#e4e4e4]">
              <form className="w-full max-w-sm space-y-6">
                <h2 className="text-3xl font-medium text-center">Login</h2>

                {/* Email */}
                <div className="relative border-b-2 pb-1 mb-6">
                  <span className="absolute right-0 bottom-2 text-xl text-[#e4e4e4]">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    className="peer w-full bg-transparent outline-none pr-7 pt-4 text-[#e4e4e4]"
                    type="email"
                    required
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#e4e4e4] font-medium pointer-events-none transition-all duration-300 ease-in-out peer-focus:top-0   peer-valid:top-0 ">
                    Email
                  </label>
                </div>

                {/* Password */}
                <div className="relative border-b-2 pb-1 mb-6">
                  <span className="absolute right-0 bottom-2 text-xl text-[#e4e4e4]">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input
                    className="peer w-full bg-transparent outline-none pr-7 pt-4 text-[#e4e4e4]"
                    type="password"
                    required
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#e4e4e4] font-medium pointer-events-none transition-all duration-300 ease-in-out peer-focus:top-0   peer-valid:top-0 ">
                    Password
                  </label>
                </div>

                <div className="flex justify-between text-sm font-medium -mt-4 mb-4">
                  <label>
                    <input type="checkbox" className="mr-2" /> Remember me
                  </label>
                  <a href="#" className="hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full h-11 rounded-[10px] font-medium shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-pointer"
                >
                  Login
                </button>

                <p className="text-center">
                  Don't have an account?
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="ml-1 underline hover:no-underline"
                  >
                    Register
                  </button>
                </p>
              </form>
            </div>
          </div>

          {/* REGISTER FORM */}
          <div
            className={`absolute top-0 left-0 w-full h-full px-8 transition-all duration-700 ease-in-out ${
              isLogin
                ? "translate-x-full opacity-0 z-10"
                : "translate-x-0 opacity-100 z-20"
            }`}
          >
            <div className="flex justify-center items-center w-full h-full text-[#e4e4e4]">
              <form className="w-full max-w-sm space-y-6">
                <h2 className="text-3xl font-medium text-center">Register</h2>

                {/* Username */}
                <div className="relative border-b-2 pb-1 mb-6">
                  <span className="absolute right-0 bottom-2 text-xl text-[#e4e4e4]">
                    <i className="fas fa-user"></i>
                  </span>
                  <input
                    className="peer w-full bg-transparent outline-none pr-7 pt-4 text-[#e4e4e4]"
                    type="text"
                    required
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#e4e4e4] font-medium pointer-events-none transition-all duration-300 ease-in-out peer-focus:top-0   peer-valid:top-0 ">
                    Username
                  </label>
                </div>

                {/* Email */}
                <div className="relative border-b-2 pb-1 mb-6">
                  <span className="absolute right-0 bottom-2 text-xl text-[#e4e4e4]">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    className="peer w-full bg-transparent outline-none pr-7 pt-4 text-[#e4e4e4]"
                    type="email"
                    required
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#e4e4e4] font-medium pointer-events-none transition-all duration-300 ease-in-out peer-focus:top-0   peer-valid:top-0 ">
                    Email
                  </label>
                </div>

                {/* Password */}
                <div className="relative border-b-2 pb-1 mb-6">
                  <span className="absolute right-0 bottom-2 text-xl text-[#e4e4e4]">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input
                    className="peer w-full bg-transparent outline-none pr-7 pt-4 text-[#e4e4e4]"
                    type="password"
                    required
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#e4e4e4] font-medium pointer-events-none transition-all duration-300 ease-in-out peer-focus:top-0   peer-valid:top-0 ">
                    Password
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full h-11 rounded-[10px] font-medium shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-pointer"
                >
                  Register
                </button>

                <p className="text-center text-sm">
                  Already have an account?
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="ml-1 underline hover:no-underline"
                  >
                    Signin
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
