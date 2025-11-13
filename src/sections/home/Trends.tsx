import { FaHeart } from "react-icons/fa";

import { useContext } from "react";
import { ShopContext } from "../../components/Context/ShopContext";
import { useNavigate } from "react-router-dom";

type Product = {
  isTrending: boolean;
  tag: any;
  id: string;
  title: string;
  price: number;
  image: string[];
  category: string;
  // add other fields as needed
};

type ShopContextType = {
  allProducts: Product[];
  // add other context fields as needed
};

const Trends = ({ gender }: { gender: string }) => {
  const navigate = useNavigate();
  const context = useContext(ShopContext) as unknown as ShopContextType | null;
  const allProducts = context?.allProducts ?? [];
  const filteredProducts = allProducts.filter(
    (item) => item.isTrending && item.category === gender
  );
  return (
    <div className="py-3 px-4  flex flex-col  justify-center items-center  mx-auto container ">
      <h1 className=" text-2xl md:text-3xl 2xl:text-4xl font-bold mb-2">
        Current Trends
      </h1>
      <p className="mb-6">
        Discover the most clicked and searched-for products on the marketplace.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center px-10 ">
        {filteredProducts.slice(0, 4).map((item) => (
          <div className="flex flex-col gap-2 cursor-pointer group">
            <div
              onClick={() => navigate(`/shop/product-details/${item.id}`)}
              className="relative rounded-sm overflow-hidden"
            >
              {/* Image */}

              <img
                src={item.image[0]}
                alt=""
                className="w-70 h-85 object-cover"
              />

              {/* Heart Icon */}
              <div className="absolute top-2 right-2  p-2 text-white  hover:scale-110 hover:text-red-500 transition-transform duration-200 ">
                <FaHeart />
              </div>
              {item.tag && (
                <div className="absolute top-2 left-2 bg-white text-xs p-1 md:text-sm md:px-6 md:py-2">
                  {item.tag}
                </div>
              )}

              {/* Bottom Overlay on Hover */}
              <div className="absolute bottom-3 left-2 right-2 bg-green-600 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-lime-900">
                VIEW
              </div>
            </div>

            {/* Title & Price */}
            <p className="font-semibold text-sm md:text-base">{item.title}</p>
            <p className=" text-xs md:text-sm">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trends;
