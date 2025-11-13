import {
  FaArrowRight,
  FaCheck,
  FaMoneyCheckAlt,
  FaTimes,
  FaTruckMoving,
  FaUpload,
} from "react-icons/fa";
import img from "../assets/seller_img.png";
import { useState } from "react";
import seller_img from "../assets/section.png";

const SellWithUs = () => {
  const [openIndex, setOpenIndex] = useState(0); // first item open

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  const steps = [
    {
      icon: <FaUpload size={24} className="text-blue-600" />,
      title: "Upload Your Products",
      desc: "Add unsold stock or current collections in a few steps. Our platform makes it easy to showcase your products.",
    },
    {
      icon: <FaTruckMoving size={24} className="text-green-600" />,
      title: "We Handle Logistics",
      desc: "We pick up products from your store and deliver them to customers. No shipping hassles for you.",
    },
    {
      icon: <FaMoneyCheckAlt size={24} className="text-purple-600" />,
      title: "Automatic Payments",
      desc: "Secure and fast payments via Stripe. Get paid automatically when your products sell.",
    },
  ];

  const otherPlatformPoints = [
    "Monthly fees or fixed charges",
    "Sellers must handle shipping",
    "Complicated onboarding",
    "Low product visibility",
    "Poor image quality and incomplete listings",
    "Messy, crowded marketplace",
  ];

  const stockMatePoints = [
    "No setup fees, no monthly costs",
    "We manage pickup and delivery",
    "Easy and fast registration",
    "Curated product catalog",
    "Clean visuals and clear descriptions",
    "Structured, clean, and easy to browse",
  ];
  const faqData = [
    {
      question: "	Do I need a website to use StockMate?",
      answer: "No, StockMate is your complete online storefront.",
    },
    {
      question: "	What does it cost?",
      answer: "Only 15% commission per sale. No fixed fees.",
    },
    {
      question: "Can I sell new collections too?",
      answer:
        "Yes. StockMate supports both unsold stock and in-season products",
    },
  ];
  return (
    <div className=" ">
      <section className=" py-10 bg-gradient-to-r from-[#EAFFF229] to-[#C2FFD891]  px-4 md:px-10 2xl:pt-14">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-4xl xl:text-6xl font-extrabold md:leading-12 xl:leading-[72px] mb-4">
              Start Selling <br /> Online in Just a <br />
              <p>
                Few <span className="text-green-500"> Clicks</span>
              </p>
            </h2>
            <p className="text-gray-600 mb-3">
              No fixed costs, no tech skills required. We handle everything for
              you.
            </p>
            <p className="text-gray-600 mb-6">
              Upload your products. We pick them up. You get paid. <br />
              Simple, fast, and sustainable.
            </p>
            <button className="bg-black text-white px-2 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-900 transition">
              <a
                href="https://lakshadweepadventure.com/sign-in"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register as a Seller →
              </a>
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src={img}
              alt="Become a Seller"
              className="rounded-xl w-full h-auto object-cover "
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-10 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          How StockMate Works for Sellers
        </h2>
        <p className="text-gray-500 mb-12">
          Three simple steps to start selling online
        </p>

        <div className="flex flex-col md:flex-row justify-center md:items-start lg:items-stretch gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center text-center"
            >
              <div className="bg-gray-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="font-semibold text-lg md:text-xl text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 md:px-10 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Why Local Sellers Prefer StockMate
        </h2>
        <p className="text-gray-500 mb-10">
          See how we compare to other platforms
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 shadow-md overflow-hidden rounded-lg">
          {/* Other Platforms */}
          <div className="bg-white py-8 px-6 md:px-10">
            <h3 className="text-xl font-semibold text-gray-400 mb-6">
              Other Platforms
            </h3>
            <ul className="space-y-4 text-left">
              {otherPlatformPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <FaTimes className="text-red-500 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* StockMate */}
          <div className="bg-gradient-to-r from-[#EAFFF229] to-[#C2FFD891] py-8 px-6 md:px-10 border-l border-gray-300">
            <h3 className="text-xl font-semibold text-green-600 mb-6">
              StockMate
            </h3>
            <ul className="space-y-4 text-left">
              {stockMatePoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <FaCheck className="text-green-500 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-10 bg-white text-center">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold text-center ">
            Frequently Asked Questions
          </h1>

          <div className="mt-8 space-y-3">
            {faqData.map((item, index) => {
              const isOpen = index === openIndex;
              return (
                <div
                  key={index}
                  className={`rounded border transition-all duration-300 ${
                    isOpen ? "border-green-500 bg-white" : "bg-gray-100"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className={`w-full flex items-center justify-between p-4 text-left cursor-pointer ${
                      isOpen
                        ? "text-green-700 font-semibold"
                        : "text-gray-800 font-medium"
                    }`}
                  >
                    <span>{item.question}</span>
                    <span className="text-gray-500 text-xl">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && item.answer && (
                    <div className="px-4 pb-4 text-sm text-gray-600 flex">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white text-center">
        <div className="relative">
          <img
            className="w-full h-[400px] object-cover"
            src={seller_img}
            alt="Seller Banner"
          />
          <div className="absolute inset-0  flex flex-col items-center justify-center text-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Selling?
            </h2>
            <p className="text-sm md:text-lg mb-6 max-w-xl">
              Join thousands of local sellers already using StockMate
            </p>
            <button className="bg-white font-bold text-black px-6 py-2 rounded-md hover:bg-gray-200 transition flex items-center gap-2">
            
                    <a
  href="https://lakshadweepadventure.com/sign-in"
  target="_blank"
  rel="noopener noreferrer"
>
   Start Selling Now
</a> <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellWithUs;
