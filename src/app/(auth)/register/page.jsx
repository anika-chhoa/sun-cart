"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import {
  MdEmail,
  MdImage,
  MdLock,
  MdPerson,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-3xl font-extrabold tracking-tighter bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            SunCart
          </span>

          <p className="text-xs text-base-content/40 mt-1 tracking-widest uppercase font-semibold">
            Summer Essentials
          </p>
        </div>

        <div className="bg-white border border-orange-50 rounded-3xl shadow-xl shadow-orange-100/30 px-8 py-10">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
              Get Started
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight text-base-content">
              Create Your Account
            </h1>
            <p className="text-sm text-base-content/45 mt-1">
              Join SunCart and enjoy exclusive summer deals.
            </p>
          </div>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-base-content/50">
                Full Name
              </label>
              <label className="w-full input bg-amber-50/50 border border-orange-100 rounded-2xl flex items-center gap-3 px-4 focus-within:border-orange-300 transition-colors">
                <MdPerson size={17} className="text-orange-300 shrink-0" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="grow bg-transparent text-sm text-base-content placeholder:text-base-content/30 outline-none py-3"
                />
              </label>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-base-content/50">
                Email
              </label>
              <label className="w-full input bg-amber-50/50 border border-orange-100 rounded-2xl flex items-center gap-3 px-4 focus-within:border-orange-300 transition-colors">
                <MdEmail size={17} className="text-orange-300 shrink-0" />
                <input
                  type="email"
                  name="email"
                  placeholder=" Enter Your Email"
                  className="grow bg-transparent text-sm text-base-content placeholder:text-base-content/30 outline-none py-3"
                />
              </label>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-base-content/50">
                Photo URL
              </label>
              <label className="w-full input bg-amber-50/50 border border-orange-100 rounded-2xl flex items-center gap-3 px-4 focus-within:border-orange-300 transition-colors">
                <MdImage size={17} className="text-orange-300 shrink-0" />
                <input
                  type="url"
                  name="photoUrl"
                  placeholder="Enter Your Photo URL"
                  className="grow bg-transparent text-sm text-base-content placeholder:text-base-content/30 outline-none py-3"
                />
              </label>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-base-content/50">
                Password
              </label>
              <label className="w-full input bg-amber-50/50 border border-orange-100 rounded-2xl flex items-center gap-3 px-4 focus-within:border-orange-300 transition-colors">
                <MdLock size={17} className="text-orange-300 shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  className="grow bg-transparent text-sm text-base-content placeholder:text-base-content/30 outline-none py-3"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-base-content/30 hover:text-orange-400 transition-colors shrink-0"
                >
                  {showPassword ? (
                    <MdVisibilityOff size={17} />
                  ) : (
                    <MdVisibility size={17} />
                  )}
                </button>
              </label>
            </div>

            <button
              type="submit"
              className="btn w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 rounded-full shadow-lg shadow-orange-200/50 hover:scale-[1.02] transition-transform duration-200 mt-1 font-bold tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Create Account
            </button>

            <button
              type="button"
              className="btn w-full bg-white border border-orange-200 text-sm font-semibold text-base-content/70 rounded-full shadow-sm hover:shadow-md hover:border-orange-300 hover:scale-[1.02] transition-all duration-200 gap-3"
            >
              <FaGoogle className="text-blue-500" />
              Continue with Google
            </button>

            <div className="divider text-xs text-base-content/30 font-semibold">
              Already have an account?
            </div>

            <Link
              href="/login"
              className="btn w-full btn-outline border-orange-200 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-full transition-all duration-200 font-bold"
            >
              Login Instead
            </Link>
          </form>
        </div>

        <p className="text-center text-xs text-base-content/30 mt-6">
          By registering, you agree to our{" "}
          <span className="hover:text-orange-400 transition-colors underline underline-offset-2">
            Terms
          </span>{" "}
          &{" "}
          <span className="hover:text-orange-400 transition-colors underline underline-offset-2">
            Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
