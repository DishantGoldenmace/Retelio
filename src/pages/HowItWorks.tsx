import img from "../assets/about_background.png";
import about_1 from "../assets/about_1.png";
import about_2 from "../assets/about_2.png";
import about_3 from "../assets/about_3.png";
import sell from "../assets/sell.png";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className=" px-4 mx-auto max-w-7xl 2xl:pt-14">
      <section className="bg-white text-center px-4 md:px-6 py-10">
        {/* Top Heading */}
        <div className="relative">
          <img
            src={img}
            alt="Hero banner"
            className="w-full h-[300px] md:h-auto object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-full max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black">
              Shop better. Waste less. <br /> Support real stores.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              StockMate helps independent retailers sell online — without losing
              their soul. One platform, designed to boost stock rotation and
              fight commercial waste.
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-16 mt-8 md:mt-12">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-10">
            How it works (3 steps)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="border border-gray-300 rounded-lg p-4 md:p-6">
              <img
                src={about_1}
                alt="Shop from real stores"
                className="w-12 md:w-16 mx-auto mb-3 md:mb-4"
              />
              <h4 className="font-semibold text-base md:text-lg mb-2">
                Shop from real stores
              </h4>
              <p className="text-gray-600 text-xs md:text-sm">
                Authentic items, exclusive prices — directly from local shops.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border border-gray-300 rounded-lg p-4 md:p-6">
              <img
                src={about_2}
                alt="Prepared by the seller"
                className="w-12 md:w-16 mx-auto mb-3 md:mb-4"
              />
              <h4 className="font-semibold text-base md:text-lg mb-2">
                Your order, prepared by the seller
              </h4>
              <p className="text-gray-600 text-xs md:text-sm">
                The store has up to 48h to confirm and pack your item.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border border-gray-300 rounded-lg p-4 md:p-6">
              <img
                src={about_3}
                alt="Delivered in 5–7 days"
                className="w-12 md:w-16 mx-auto mb-3 md:mb-4"
              />
              <h4 className="font-semibold text-base md:text-lg mb-2">
                Delivered in 5–7 days
              </h4>
              <p className="text-gray-600 text-xs md:text-sm">
                We handle shipping. Tracked, reliable, and waste-free.
              </p>
            </div>
          </div>
          <p className="text-xs md:text-sm font-semibold mt-4 md:mt-6">
            Returns? No worries — 14 days to change your mind.
          </p>
        </div>

        {/* CTA Block */}
        <div className="mt-6 md:mt-0 max-w-6xl mx-auto relative">
          {/* Image for all screens */}
          <img src={sell} alt="Store owner" className="w-full rounded-lg" />

          {/* Overlay text (only visible from sm and above) */}
          <div className="absolute top-2 left-0 md:w-1/2 pl-6 xl:pt-6 text-left hidden sm:block">
            <h3 className="text-3xl font-bold text-white mb-2">
              Are you a store owner?
            </h3>
            <p className="text-white mb-2 xl:mb-4 w-3/4">
              StockMate helps independent shops sell online — with no upfront
              costs, no stress, and full logistic support. Upload your products,
              we do the rest.
            </p>
            <a
              href="https://lakshadweepadventure.com/sign-in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-white font-semibold"> Sell with us →</p>
            </a>
          </div>

          {/* Separate stacked layout for mobile (below sm) */}
          <div className="sm:hidden bg-gray-800 rounded-lg p-4 mt-4 text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Are you a store owner?
            </h3>
            <p className="text-white mb-4">
              StockMate helps independent shops sell online — with no upfront
              costs, no stress, and full logistic support. Upload your products,
              we do the rest.
            </p>
            <Link to="#" className="text-white font-semibold">
              Sell with us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
