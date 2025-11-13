import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../../components/Context/ShopContext";
import { useGender } from "../../components/Context/GenderContext";
import { useNavigate } from "react-router-dom";

const LatestArrivals = () => {
  const { gender } = useGender();
  const shop = useContext(ShopContext);
  const allProducts = shop?.allProducts || [];

  // Get latest gender-based products
  const genderProducts = allProducts
    .filter((p) => p.gender === gender)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  // Get top 3 subcategories by count
  const subcategoryCounts: { [key: string]: number } = {};
  genderProducts.forEach((p) => {
    subcategoryCounts[p.subCategory] =
      (subcategoryCounts[p.subCategory] || 0) + 1;
  });

  const topSubcategories = Object.entries(subcategoryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([sub]) => sub);

  const [activeTab, setActiveTab] = useState(topSubcategories[0] || "");

  const filteredByTab = genderProducts
    .filter((p) => p.subCategory === activeTab)
    .slice(0, 8); // top 8 for now

  const navigate = useNavigate();
  const categoryMap: Record<string, { count: number; img: string }> = {};

  genderProducts.forEach((product) => {
    const sub = product.subCategory;
    if (!categoryMap[sub]) {
      categoryMap[sub] = {
        count: 1,
        img: product.image?.[0] || "", // fallback to empty string
      };
    } else {
      categoryMap[sub].count += 1;
    }
  });

  useEffect(() => {
  if (topSubcategories.length > 0) {
    setActiveTab(topSubcategories[0]);
  }
}, [gender]);


  // Step 3: Convert map to array

  return (
    <div className="py-16 px-4 container mx-auto flex flex-col max-w-7xl justify-center ">
      <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center">
        Latest Arrivals
      </h1>
      <p className="mb-4 text-center">
        Discover newly listed products from our partner stores.
      </p>

      {/* Tabs */}
      <div className="flex justify-center  space-x-4 mb-6 px-8 mt-4">
        {topSubcategories.map((sub) => (
          <button
            key={sub}
            onClick={() => setActiveTab(sub)}
            className={`px-6 py-2 border border-black rounded-md transition cursor-pointer ${
              activeTab === sub ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {sub.charAt(0).toUpperCase() + sub.slice(1)}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex  gap-6 justify-center">
        {filteredByTab.map((item) => (
          <div
            onClick={() => navigate(`/shop/product-details/${item.id}`)}
            key={item.id}
            className="flex flex-col gap-2 cursor-pointer group "
          >
            <div className="relative rounded-sm overflow-hidden">
              <img
                src={item.image[0]}
                alt={item.title}
                className="w-80 h-85 object-cover"
              />
              <div className="absolute top-2 right-2 p-2 text-white hover:scale-110 hover:text-red-500 transition-transform duration-200">
                <FaHeart />
              </div>
              {item.isTrending && (
                <div className="absolute top-2 left-2 bg-white text-xs p-1 md:text-sm md:px-6 md:py-2">
                  New
                </div>
              )}
            </div>
            <p className="font-semibold text-sm md:text-base">{item.title}</p>
            <p className="text-xs md:text-sm">${item.price}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => navigate(`/shop?gender=${gender}&sub=${activeTab}`)}
          className="inline-flex px-6 py-2 border border-black rounded-md transition cursor-pointer bg-black text-white items-center justify-center"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default LatestArrivals;
