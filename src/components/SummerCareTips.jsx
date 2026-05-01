import { FiDroplet, FiShield, FiSun } from "react-icons/fi";

const SummerCareTips = () => {
  return (
    <section className="bg-[#fcf9f8] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-4">
            Expert Advice
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-base-content">
            Summer Care{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Tips
            </span>
          </h2>
          <p className="text-base-content/50 text-sm mt-2 max-w-md">
            Simple habits to keep you glowing, cool, and protected all season
            long.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="group relative bg-gradient-to-br from-orange-100 to-amber-50 border border-orange-100 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-200 text-orange-600 flex items-center justify-center shadow-sm">
                <FiShield size={22} />
              </div>
              <span className="badge badge-sm bg-orange-50 text-orange-500 border border-orange-200 font-semibold px-3 py-2 w-fit">
                Skincare
              </span>
              <h3 className="text-lg font-extrabold text-base-content leading-snug">
                Apply SPF Every Morning
              </h3>
              <p className="text-sm leading-relaxed text-base-content/55">
                Use SPF 30 or higher daily — even on cloudy days. Reapply every
                2 hours when outdoors for full skin protection.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-sky-100 to-blue-50 border border-sky-100 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-200 text-sky-600 flex items-center justify-center shadow-sm">
                <FiDroplet size={22} />
              </div>
              <span className="badge badge-sm bg-sky-50 text-sky-600 border border-sky-200 font-semibold px-3 py-2 w-fit">
                Hydration
              </span>
              <h3 className="text-lg font-extrabold text-base-content leading-snug">
                Drink 8–10 Glasses Daily
              </h3>
              <p className="text-sm leading-relaxed text-base-content/55">
                Hot weather increases fluid loss rapidly. Start your morning
                with a full glass of water and carry a bottle wherever you go.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-amber-100 to-yellow-50 border border-amber-100 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-200 text-amber-600 flex items-center justify-center shadow-sm">
                <FiSun size={22} />
              </div>
              <span className="badge badge-sm bg-amber-50 text-amber-600 border border-amber-200 font-semibold px-3 py-2 w-fit">
                Sun Safety
              </span>
              <h3 className="text-lg font-extrabold text-base-content leading-snug">
                Avoid Peak Sun Hours
              </h3>
              <p className="text-sm leading-relaxed text-base-content/55">
                Stay in the shade between 10 am – 4 pm when UV rays are
                strongest. Wear a wide-brim hat and UV-blocking sunglasses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerCareTips;
