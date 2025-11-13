import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const feedbacks = [
  {
    id: 1,
    quote:
      "Great prices and delivery as promised. It feels good to know I’m buying from real shops.",
    name: "Chiara M.",
    role: "Customer – Trust + Price",
  },
  {
    id: 2,
    quote:
      "I found a pair of shoes I’d been searching for for months. Delivery isn’t instant, but you can tell there’s a real store behind each order. Totally worth it.",
    name: "Paolo R.",
    role: "Customer – Product discovery + Human delivery",
  },
  {
    id: 3,
    quote:
      "Thanks to StockMate we sold stock that had been sitting unsold for two seasons.",
    name: "Boutique Linea Donna, Turin",
    role: "Seller",
  },
  {
    id: 4,
    quote:
      "Excellent platform for finding unsold gems and quality items with real-store backing.",
    name: "Lucia F.",
    role: "Customer – Discovery",
  },
  {
    id: 5,
    quote:
      "StockMate helped clear our warehouse and bring new customers from all over Italy.",
    name: "Store Milano Moda",
    role: "Seller",
  },
];

const CommunityFeedback = () => {
  return (
    <div className="bg-[#F3F5F7] py-20 my-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Community Feedback</h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          className="h-full"
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {feedbacks.map((feedback) => (
            <SwiperSlide key={feedback.id} className="h-full">
              <div className="h-full flex flex-col justify-between bg-white rounded-md p-6 shadow-sm">
                <FaQuoteLeft className="text-green-200 text-6xl mb-4" />
                <p className="text-sm mb-6 italic flex-1">"{feedback.quote}"</p>
                <div>
                  <p className="font-semibold text-sm">{feedback.name}</p>
                  <p className="text-xs text-gray-500 mb-2">{feedback.role}</p>
                  <div className="flex gap-1 text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CommunityFeedback;
