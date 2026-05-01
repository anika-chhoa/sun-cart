import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="bg-white/70 backdrop-blur-xl border-b border-white/4 shadow-sm font-jakarta">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <a className="font-jakarta text-2xl font-bold tracking-tighter bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            SunCart
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
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
           <button>
            <Link href="/login" className="btn bg-orange-500 text-sm font-label-bold  text-white rounded-full shadow-lg hover:scale-105 transition-transform">
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
