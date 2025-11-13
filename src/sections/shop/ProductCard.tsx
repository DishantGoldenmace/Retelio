import { FaArrowLeft, FaArrowRight, FaHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../../components/Context/ShopContext";

type Product = {
  subCategory: string;
  gender: string;
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

const ProductCard = () => {
  const context = useContext(ShopContext) as unknown as ShopContextType | null;
  const allProducts = context?.allProducts ?? [];
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const gender = query.get("gender");
  const sub = query.get("sub");
  const filteredProducts = allProducts.filter((product) => {
    return (
      (!gender || product.gender === gender) &&
      (!sub || product.subCategory === sub)
    );
  });

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div>
      <div className=" grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-4 items-center justify-center ">
        {currentProducts.map((item) => (
          <div className="flex flex-col gap-2 cursor-pointer group">
            <div
              className="relative rounded-sm overflow-hidden"
              // onClick={() => item.path && navigate(item.path)}
            >
              <Link to={`product-details/${item.id}`}>
                {/* Image */}
                <img
                  src={item.image[0]}
                  alt=""
                  className="w-full h-85 object-cover"
                />
              </Link>

              {/* Heart Icon */}
              <div className="absolute top-2 right-2  p-2 text-white  hover:scale-110 hover:text-red-500 transition-transform duration-200 ">
                <FaHeart />
              </div>
            </div>

            {/* Title & Price */}
            <p className="font-semibold text-sm md:text-base">{item.title}</p>
            <p className=" text-xs md:text-sm">${item.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="p-2 rounded-full border disabled:opacity-30 text-[#3EB34B]"
        >
          <FaArrowLeft />
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-8 h-8 rounded-full text-sm font-medium border 
          ${
            pageNum === currentPage
              ? "bg-[#3EB34B] text-white"
              : "bg-white text-gray-700"
          }`}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full border disabled:opacity-30 text-[#3EB34B]"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
