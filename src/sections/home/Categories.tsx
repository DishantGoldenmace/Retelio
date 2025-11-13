import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../components/Context/ShopContext";
import { useGender } from "../../components/Context/GenderContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Categories = () => {
  const navigate = useNavigate();
  const { gender } = useGender();
  const shopContext = useContext(ShopContext);
  const allProducts = shopContext?.allProducts ?? [];

  // Filter and group categories
  const genderProducts = allProducts.filter((item) => item.gender === gender);
  const categoryMap: Record<string, { count: number; img: string }> = {};

  genderProducts.forEach((product) => {
    const sub = product.subCategory;
    if (!categoryMap[sub]) {
      categoryMap[sub] = {
        count: 1,
        img: product.image?.[0] || "",
      };
    } else {
      categoryMap[sub].count += 1;
    }
  });

  const categories = Object.entries(categoryMap).map(([sub, data]) => ({
    title: sub
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    sub,
    count: data.count,
    img: data.img,
  }));

  return (
    <section className="py-10 px-4 md:px-10 container mx-auto max-w-7xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Main Categories</h2>
        <button
          onClick={() => navigate("/shop")}
          className="text-sm text-black hover:underline flex items-center gap-1"
        >
          View All →
        </button>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={16}
          slidesPerView={5}
          breakpoints={{
            0: { slidesPerView: 2.2, spaceBetween: 12 },
            480: { slidesPerView: 2.6 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3.5 },
            1024: { slidesPerView: 4.5 },
            1280: { slidesPerView: 5 },
          }}
          className="py-4"
        >
          {categories.map((cat, idx) => (
            <SwiperSlide key={idx} className="!flex justify-center">
              <div
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => navigate(`/shop?gender=${gender}&sub=${cat.sub}`)}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-gray-100 shadow-md">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-xs sm:text-sm font-medium text-center max-w-[90px] break-words">
                  {cat.title}{" "}
                  <span className="text-gray-500">({cat.count})</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows - visible only on md+ */}
        <div className="swiper-button-prev hidden md:flex !text-black !left-[-16px] top-[40%]" />
        <div className="swiper-button-next hidden md:flex !text-black !right-[-16px] top-[40%]" />
      </div>
    </section>
  );
};

export default Categories;
