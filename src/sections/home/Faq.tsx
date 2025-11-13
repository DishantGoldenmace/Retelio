import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Do I need a website to use StockMate?",
      answer: "No, StockMate is your complete online storefront.",
    },
    {
      question: "What does it cost?",
      answer: "Only 15% commission per sale. No fixed fees.",
    },
    {
      question: "•	Can I sell new collections too?",
      answer:
        "Yes. StockMate supports both unsold stock and in-season products.",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
      });
      gsap.from(itemsRef.current, {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 85%",
        },
      });
    }, faqRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={faqRef}
      className="py-2 md:py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2
          ref={headingRef}
          className="text-xl md:text-3xl text-[#1D1F1E] mb-4"
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
            className="border-t border-b border-gray-200 overflow-hidden bg-white"
          >
            <button
              className="w-full flex items-center px-2 py-2 text-left focus:outline-none cursor-pointer gap-4"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  activeIndex === index ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <h3 className="font-medium text-gray-800">{item.question}</h3>
            </button>

            <div
              id={`faq-content-${index}`}
              className={`px-6 pb-6 pt-0 transition-all duration-300 ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
