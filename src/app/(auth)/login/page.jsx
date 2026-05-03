"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";

const LoginPage = () => {
  const handleLoginForm = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
  };
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
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
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
              Welcome Back
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight text-base-content">
              Login to Your Account
            </h1>
            <p className="text-sm text-base-content/45 mt-1">
              Enter your credentials to continue shopping.
            </p>
          </div>

          <form onSubmit={handleLoginForm} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-base-content/50">
                Email
              </label>
              <label className="w-full input bg-amber-50/50 border border-orange-100 rounded-2xl flex items-center gap-3 px-4">
                <MdEmail size={17} className="text-orange-300" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="bg-transparent text-sm text-base-content outline-none py-3"
                />
              </label>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-base-content/50">
                Password
              </label>
              <label className="w-full input bg-amber-50/50 border border-orange-100 rounded-2xl flex items-center gap-3 px-4">
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

            <button className="btn w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 rounded-full shadow-lg shadow-orange-200/50 hover:scale-[1.02] transition-transform duration-200 mt-2 font-bold tracking-wide">
              Login
            </button>
          </form>
          <div className="divider text-xs text-base-content/30 font-semibold">
            OR
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="btn w-full border-orange-200 bg-white text-sm font-semibold text-base-content/70 rounded-full shadow-sm shadow-orange-100 hover:shadow-md hover:border-orange-300 hover:scale-[1.02] transition-transform duration-200 tracking-wide"
          >
            <FaGoogle className="text-blue-500" /> Continue with Google
          </button>

          <p className="text-center text-sm text-base-content/50 mt-2">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-orange-500 font-bold hover:text-orange-600 transition-colors"
            >
              Register
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-base-content/30 mt-6">
          By logging in, you agree to our{" "}
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

export default LoginPage;
