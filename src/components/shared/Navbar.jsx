"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import avatarImage from "../../assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="bg-white/70 backdrop-blur-xl border-b border-white/4 shadow-sm sticky top-0 z-100">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink href={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink href={"/products"}>Products</NavLink>
              </li>
              <li>
                <NavLink href={"/profile"}>My Profile</NavLink>
              </li>
            </ul>
          </div>
          <a className="font-jakarta text-2xl font-bold tracking-tighter bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            SunCart
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="flex gap-4">
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink href={"/products"}>Products</NavLink>
            </li>
            <li>
              <NavLink href={"/profile"}>My Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex justify-center items-center gap-2">
              <Image
                src={user?.image ? user.image : avatarImage}
                referrerPolicy="no-referrer"
                alt="avatarImg"
                width={40}
                height={40}
                className="rounded-full"
              />
              <button
                onClick={async () => await authClient.signOut()}
                className="btn btn-outline border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full"
              >
                Logout
              </button>
            </div>
          ) : (
            <button>
              <Link
                href="/login"
                className="btn bg-gradient-to-r from-orange-500 to-amber-500 text-sm font-label-bold  text-white rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Login
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
