import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[#fcf9f8]">
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center py-12">
        <div className="md:col-span-5 order-2 md:order-1 flex flex-col gap-6">
          <span className="badge badge-lg bg-sky-200 text-sky-900 border-0 font-semibold tracking-widest text-xs uppercase px-4 py-3 w-fit">
            Hot Deals 🔥
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-base-content">
            Summer Sale
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent">
              50% OFF
            </span>
          </h1>

          <p className="text-lg leading-relaxed text-base-content/80 max-w-md">
            Experience the ultimate Mediterranean escape with our curated
            collection of luxury summer essentials. Radiant, effortless, and
            premium.
          </p>

          <Link
            href="/shop"
            className="btn btn-lg rounded-[20px] border-0 text-white bg-gradient-to-r from-orange-500 to-amber-400 shadow-lg shadow-orange-300/40 hover:scale-[1.03] hover:shadow-orange-400/50 transition-all duration-200 px-8 w-fit"
          >
            Shop Now
          </Link>
        </div>

        <div className="md:col-span-7 order-1 md:order-2 grid">
          <div className="grid">
            <div className="col-start-1 row-start-1 rounded-[40px] translate-x-4 translate-y-4 w-full h-full" />

            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLoa1jEwJdyxKn3jCuN9XV0tOVP9Ho-V9ZX48aHRimMc2ZVdCETOixkfFMpeJm4eWNBfccVvE5ADpw3wN1RrLADpcTEG6OEhuUXfMgEngEeAHocDBoyW3rzu_5RvdgJ8XEnQRuumibKD-Yhd0gHnZ1PxDEg9-nQheETbd5oGRvRscw4Ae4HUtNvCX7YajqNjtNPnp7NiitMTwqSTddhhbPc8lHUXoUhLt6ueBPGgi5iOakhnWgoy5IgQtAJHcCIGdrOUcy8iwSiA8"
              alt="A sophisticated summer lifestyle photograph of a woman wearing an elegant wide-brimmed straw hat and linen dress, lounging by a pristine turquoise infinity pool."
              width={800}
              height={1000}
              className="col-start-1 row-start-1 w-full h-auto max-h-[600px] object-cover rounded-[40px] shadow-2xl shadow-orange-200/30"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
