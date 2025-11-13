import { useState } from "react";
import img from "../assets/faq_img.png";

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
    answer: "Yes. StockMate supports both unsold stock and in-season products",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // first item open

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className=" px-4 mx-auto max-w-6xl py-12 2xl:pt-14">
      <div className="flex flex-col md:flex-row md:gap-10 items-start">
        {/* Left: FAQ Text */}
        <div className="w-full md:w-[60%]">
          <h1 className="text-xl md:text-2xl font-bold text-center md:text-left">
            Welcome, Let’s Talk About Our Stockmate
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
                    <div className="px-4 pb-4 text-sm text-gray-600">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-[40%] mt-8 md:mt-0 flex justify-center md:justify-end">
          <img
            src={img}
            alt="FAQ"
            className="w-full max-w-sm md:max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
