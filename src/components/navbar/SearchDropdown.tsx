import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGender } from "../Context/GenderContext";
import { ShopContext } from "../Context/ShopContext";

const SearchDropdown = ({
  onClose,
  dropdownRef,
   onFocus, 
}: {
  onClose: () => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  onFocus?: () => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  type Product = {
    id: number;
    title: string;
    category: string;
    subCategory: string;
    image: string[];
    price: number;
    oldPrice: number;
    inStock: boolean;
    brand: string;
    season: string;
    description: string;
    gender: string;
    createdAt: string;
    isTrending?: boolean;
  };

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState<string>("all");

  const navigate = useNavigate();
  const { gender } = useGender();
  const shopContext = useContext(ShopContext);
  const allProducts = shopContext?.allProducts ?? [];

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const results = allProducts
      .filter((item) => item.gender === gender)
      .filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.brand?.toLowerCase().includes(query) ||
          item.subCategory?.toLowerCase().includes(query)
      );
    setFilteredProducts(results.slice(0, 12));
  }, [searchQuery, allProducts, gender]);

  return (
    <div
      ref={dropdownRef}
      className=" inset-0 bg-white px-6 py-2 z-100 overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="max-w-5xl mx-auto">
        {/* Search Input with All Dropdown */}
        <div className="flex items-center w-full  rounded-md px-4 py-2 bg-white ">
          {/* Left: All Dropdown */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-sm bg-transparent outline-none focus:ring-0 focus:outline-none mr-4 cursor-pointer "
          >
            <option value="all">All</option>
            <option value="clothing">Clothing</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
            <option value="beauty">Beauty</option>
          </select>

          {/* Center: Search Input */}
          <input
            ref={inputRef}
             onFocus={onFocus}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products, brands, or categories"
            className="flex-1 bg-transparent outline-none focus:ring-0 focus:outline-none text-sm"
          />

          {/* Right: Close Button */}
        </div>

        {/* Product Results */}
        {searchQuery.trim() && (
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 ">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  navigate(`/product/${product.id}`);
                  onClose();
                }}
                className="cursor-pointer"
              >
                <img
                  src={product.image[0]}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="text-sm mt-2">{product.title}</p>
                <p className="text-sm font-semibold text-gray-800">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDropdown;
