import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/hero_img1.jpg"; // woman
import img2 from "../../assets/hero_img.png"; // seller
import img3 from "../../assets/hero_img2.jpg"; // man
import img4 from "../../assets/hero_img3.jpg"; // seller
import img5 from "../../assets/hero_4.jpg"; // kids
// import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGender } from "../../components/Context/GenderContext";

const allSlides = [
  {
    para: "SUMMER PACK",
    title: "The best of local shops, all online.",
    subtitle: "New collections and end-of-line items delivered to your home.",
    btn_text: "SHOP NOW",
    path: "/shop?gender=woman",
    gender: "woman",
    image: img1,
  },
  {
    para: "BECOME A SELLER",
    title: "Discover real-store deals near you.",
    subtitle: "Browse products from physical stores around you.",
    btn_text: "BECOME A SELLER",
    // path: "/sell-with-us",
    path: "/shop?gender=woman",
    gender: "woman",
    image: img2,
  },
  {
    para: "SUMMER PACK",
    title: "The best of local shops, all online.",
    subtitle: "New collections and end-of-line items delivered to your home.",
    btn_text: "SHOP NOW",
    path: "/shop?gender=men",
    gender: "men",
    image: img3,
  },

  {
    para: "SUMMER PACK",
    title: "The best of local shops, all online.",
    subtitle: "New collections and end-of-line items delivered to your home.",
    btn_text: "SHOP NOW",
    path: "/shop?gender=kids",
    gender: "kids",
    image: img5,
  },
  {
    para: "BECOME A SELLER",
    title: "Discover real-store deals near you.",
    subtitle: "Browse products from physical stores around you.",
    btn_text: "BECOME A SELLER",
    // path: "/sell-with-us",
    path: "/shop?gender=kids",

    gender: "kids",
    image: img4,
  },

  {
    para: "BECOME A SELLER",
    title: "Discover real-store deals near you.",
    subtitle: "Browse products from physical stores around you.",
    btn_text: "BECOME A SELLER",
    // path: "/sell-with-us",
    path: "/shop?gender=men",

    gender: "men",
    image: img3,
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const { gender } = useGender();

  const swiperRef = useRef<any>(null);

  const filteredSlides = allSlides.filter((slide) => slide.gender === gender);

  // 🔁 Reset to first slide on gender change
  useEffect(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(0, 0); // (index, speed in ms)
    }
  }, [gender]);

  return (
    <div className="relative w-full  overflow-hidden ">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-[280px] sm:h-[360px] md:h-[420px] xl:h-[480px] 2xl:h-[550px]"
      >
        {filteredSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => navigate(slide.path)}
              className="relative w-full min-h-screen cursor-pointer"
            >
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />

              <div className="absolute top-1/2 2xl:top-70 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-black text-center px-4 max-w-xl">
                <p className="text-xs sm:text-sm font-semibold uppercase mb-2 tracking-wider">
                  {slide.para}
                </p>
                <h1 className="text-lg sm:text-2xl md:text-3xl xl:text-5xl font-bold leading-snug sm:leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xs sm:text-sm md:text-base mt-2 sm:mt-4 text-gray-700">
                  {slide.subtitle}
                </p>
                <div className="flex justify-center mt-4 sm:mt-6">
                  {/* <button
                    onClick={() => navigate(slide.path)}
                    className="bg-black text-white px-4 py-2 sm:px-6 sm:py-2.5 text-xs 
                    sm:text-sm md:text-base rounded-lg flex items-center gap-2 transition hover:bg-gray-900"
                  >
                    {slide.btn_text}
                    <FaArrowRight className="text-xs sm:text-sm" />
                  </button> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
