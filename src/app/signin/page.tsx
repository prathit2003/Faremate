"use client";

import Input from "@/components/ui/input";
import { handleSignin } from "@/functions/creditionals";
import Button from "@/components/ui/button";

const Signin = () => {
  return (
    <div className="max-h-screen flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14">
      <div className="card w-full max-h-[90vh] max-w-6xl flex flex-col md:flex-row items-center justify-between rounded-2xl p-4 md:p-6 lg:p-8 xl:p-10">
        {/* Left Side - Form */}
        <div className="w-[90%] md:w-[40%] flex flex-col items-center h-[80%]">
          <div className="flex flex-col items-center mb-1 md:mb-3 lg:mb-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-subheading ">
              Welcome Back !
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-subheading">
              please enter your details
            </p>
          </div>

          <form
            onSubmit={handleSignin}
            className="flex flex-col w-[80%] px-2 md:px-4 lg:px-6"
          >
            <div className="flex flex-col w-full space-y-1 md:space-y-2 lg:space-y-3 mb-0.5 md:mb-1">
              <Input
                type="email"
                labal="Email"
                placeholder="Enter your email"
                id="email"
              />
              <Input
                type="password"
                labal="Password"
                placeholder="Enter your password"
                id="password"
              />
            </div>

            {/* Remember me + Forgot Password */}
            <div className="flex items-center justify-between mb-3">
              <label className="flex items-center space-x-2 cursor-pointer text-[10px] sm:text-xs md:text-sm lg:text-base">
                <input type="checkbox" className="cursor-pointer" />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="hover:underline">
                Forgot Password
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-secondary text-white py-3 rounded-lg font-medium hover:bg-white hover:text-secondary transition-all duration-300 mb-1 md:mb-2"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center space-x-1 md:space-x-2 mb-1 md:mb-2">
              <span className="h-px flex-1 bg-gray-300"></span>
              <span className="text-sm text-gray-500">or</span>
              <span className="h-px flex-1 bg-gray-300"></span>
            </div>

            {/* Social Login Buttons */}
            <div className="flex flex-col w-full space-y-1 md:space-y-2 lg:space-y-3 mb-1 md:mb-2">
              <Button
                color="secondary"
                text="Login with Google"
                icon="google"
              />
              <Button
                color="secondary"
                text="Login with Github"
                icon="github"
              />
            </div>
            {/* Sign Up Link */}
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-subheading text-center">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-primary font-medium hover:underline"
              >
                Signup
              </a>
            </p>
          </form>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden md:flex md:w-[60%] h-[90%] justify-center">
          <img
            src="icons/signin.svg"
            alt="signin auth illustration"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
