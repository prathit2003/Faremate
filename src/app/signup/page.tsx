"use client";
import { handleSignup } from "@/functions/creditionals";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Image from "next/image";

export default function Signup() {
  return (
    <div className="h-screen w-full flex  items-center justify-center p-6 md:py-8 lg:py-12">
      {/* Left - Form */}
      <div className="card w-[80vw] md:aspect-video px-6 md:px-8  flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-[35%] flex flex-col">
          <h2 className="text-heading text-xl sm:text-2xl md:text-3xl">
            Create an Account
          </h2>
          <p className="text-subheading text-xs sm:text-sm md:text-base">
            Sign up to get started with Fare
          </p>

          {/* Form fields */}
          <div className="flex flex-col space-y-1 md:space-y-2 mt-1 md:mt-2">
            <Input
              type="text"
              labal="FullName"
              placeholder="Enter your full name"
              id="username"
            />
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
            <Input
              type="password"
              labal="Confirm Password"
              placeholder="Re-enter your password"
              id="confirmPassword"
            />
          </div>

          {/* Signup button */}

          <button
            onClick={handleSignup}
            className="bg-secondary text-white py-3 rounded-lg font-medium hover:bg-white hover:text-secondary transition-all duration-300 mt-2 md:mt-3 w-full flex items-center justify-center cursor-pointer"
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center space-x-1 md:space-x-2 mt-1 md:mt-2">
            <span className="h-px flex-1 bg-gray-300"></span>
            <span className="text-sm text-gray-500">or</span>
            <span className="h-px flex-1 bg-gray-300"></span>
          </div>

          {/* Social logins */}
          <div className="flex flex-col mt-1 md:mt-2 items-center gap-2 sm:gap-3">
            <Button
              color="secondary"
              text="Continue with Google"
              icon="google"
            />
            <Button
              color="secondary"
              text="Continue with GitHub"
              icon="github"
            />
          </div>

          <p className="text-xs sm:text-sm md:text-base text-center text-subheading mt-1  md:mt-2">
            Already have an account?{" "}
            <a href="/signin" className="text-primary hover:underline">
              Sign in
            </a>
          </p>
        </div>

        <div className="hidden md:flex w-full md:w-1/2 justify-center">
          <Image
            src="icons/signup.svg"
            alt="Signup illustration"
            width={500}
            height={500}
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
