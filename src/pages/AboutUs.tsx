import {
  Code,
  DollarSign,
  HeartHandshake,
  Leaf,
  Truck,
  Users,
} from "lucide-react";
import bannerImg from ".././assets/about-banner.png"; // Replace with actual image path
import retailImg from ".././assets/retail-support.png"; // Replace with actual image path
import retailBg from ".././assets/retailBg.png"; // Replace with actual image path
import mission from ".././assets/mission.png"; // Replace with actual image path

const AboutUs = () => {
  return (
    <div className="bg-white 2xl:pt-10 ">
      {/* Hero Section */}
      <div className="relative  text-white flex flex-col sm:flex-row items-center ">
        <img
          src={bannerImg}
          alt="About Us Banner"
          className="w-full  object-cover"
        />
        <div className="max-w-2xl absolute top-10 md:top-20   xl:top-30 2xl:top-60 left-20">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-2">About Us</h1>
          <p className="hidden sm:block text-lg">
            We believe local stores deserve a place online.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-6 py-16">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-4">
            StockMate was created with a simple but powerful idea: help physical
            stores sell online without complexity, cost, or risk.
          </p>
          <p className="text-gray-700">
            Every year, thousands of small and independent retailers struggle to
            manage unsold stock or reach new customers. Most of them are not
            online — not because they don’t want to be, but because existing
            platforms are too expensive, too complex, or too far from their
            needs.
          </p>
        </div>
        <div>
          <div className="relative rounded-xl overflow-hidden  ">
            <img
              src={retailImg}
              alt="Supporting Local Retail"
              className="object-cover w-[500] h-[500px]"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <img className="w-10 mb-2" src={mission} alt="" />
              <p className="font-bold text-lg">Supporting Local Retail</p>
              <p className="text-sm">
                Empowering neighborhood shops to thrive in the digital age
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-800">
        {/* We Make It Easy Section */}
        <section className="bg-gradient-to-r from-[#EAFFF229] to-[#C2FFD891] py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              We make it easy.
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto px-4">
              StockMate is a marketplace designed for real shops, not brands or
              warehouses. Whether it’s unsold inventory, current collections, or
              what’s on display today, we help local stores sell their products
              online.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
                <DollarSign className="text-[#46B37F] mb-2" />
                <h4 className="font-semibold">No fixed costs</h4>
                <p className="text-sm text-gray-600">
                  Start selling without upfront investments or monthly fees
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
                <Truck className="text-[#46B37F] mb-2" />
                <h4 className="font-semibold">No logistics to manage</h4>
                <p className="text-sm text-gray-600">
                  We handle pickup, delivery, and returns for you
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
                <Code className="text-[#46B37F] mb-2" />
                <h4 className="font-semibold">No technical barriers</h4>
                <p className="text-sm text-gray-600">
                  Simple tools designed for real people, not tech experts
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Beliefs Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div
              className="bg-black text-white rounded-xl p-6 flex flex-col justify-center"
              style={{
                backgroundImage: `url(${retailBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-xl font-semibold mb-3">
                Retail made simple. And fair.
              </h3>
              <p className="text-sm mb-4">
                StockMate supports local economies, reduces waste, and brings
                quality products to more people, at better prices.
              </p>
              <ul className="text-sm space-y-1">
                <li>✓ A more sustainable retail model</li>
                <li>✓ The power of neighborhood shops</li>
                <li>✓ Tools that are accessible and human-friendly</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                We believe in:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <Leaf className="text-[#46B37F] mt-1" />
                  <div>
                    <p className="font-medium">Sustainability First</p>
                    <p className="text-sm text-gray-600">
                      Reducing waste by giving unsold inventory a second chance
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Users className="text-[#46B37F] mt-1" />
                  <div>
                    <p className="font-medium">Community Support</p>
                    <p className="text-sm text-gray-600">
                      Strengthening local economies and neighborhood connections
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <HeartHandshake className="text-[#46B37F] mt-1" />
                  <div>
                    <p className="font-medium">Human-Centered</p>
                    <p className="text-sm text-gray-600">
                      Technology that serves people, not the other way around
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#10B9810D]  to-[#D1FAE54D] py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              This is just the beginning.
            </h2>
            <p className="text-gray-600 mb-6">
              Our platform is now in development. We’re working closely with
              retailers to launch a first version in 2025 — simple, functional,
              and designed for people, not systems.
            </p>
            <div className="bg-white text-gray-800 rounded-xl shadow p-6">
              <p className="font-semibold mb-2">
                We're here to give independent shops the space they deserve.
              </p>
              <p className="text-green-600 text-sm">
                Online, without compromises.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
