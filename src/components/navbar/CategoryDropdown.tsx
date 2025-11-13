import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useGender } from "../Context/GenderContext";
import categories from "../../data/categories";
import { Shirt } from "lucide-react";

type Subcategory = {
  id: string;
  name: string;
  productType?: string;
  subSubcategories?: { id: string; name: string; productType: string }[];
};

const CategoryDropdown = () => {
  const { gender } = useGender();

  const [activeSubcat, setActiveSubcat] = useState<Subcategory | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const normalizedGender =
    gender === "men" ? "men" : gender === "woman" ? "women" : gender;

  const selectedCategory = categories.find(
    (cat) => cat.gender === normalizedGender
  );

  if (!selectedCategory) return null;

  const menuItems = [
    ...selectedCategory.subcategories,
    { id: "new", name: "New In" },
    { id: "sale", name: "SALE" },
  ];

  const handleMouseEnter = (sub: Subcategory) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveSubcat(sub);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveSubcat(null);
    }, 150);
  };

  return (
    <div className="relative w-full hidden md:block bg-white z-50 font-light max-w-6xl px-6">
      {/* Main navigation bar */}
      <div className="container mx-auto border-b border-gray-100">
        <div className="flex  space-x-10 py-4">
          {menuItems.map((sub) => {
            const hasDropdown =
              "subSubcategories" in sub && sub.subSubcategories?.length;

            return (
              <div
                key={sub.id}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(sub)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={
                    sub.id === "new"
                      ? `/shop?gender=${normalizedGender}&tag=new`
                      : sub.id === "sale"
                      ? `/shop?gender=${normalizedGender}&tag=sale`
                      : "productType" in sub && sub.productType
                      ? `/shop?gender=${normalizedGender}&sub=${sub.productType}`
                      : "#"
                  }
                  className={`text-xs uppercase tracking-widest transition-colors ${
                    sub.id === "sale"
                      ? "text-red-600 font-semibold"
                      : "text-black hover:text-gray-500 font-semibold"
                  }`}
                >
                  {sub.name}
                </Link>

                {/* Full-width dropdown */}
                {hasDropdown && activeSubcat?.id === sub.id && (
                  <div className="fixed left-0 right-0 bg-white shadow-lg z-50 border-t border-t-gray-100 border-b-2 border-b-black">
                    <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-4 gap-8">
                      {/* Categories */}
                      <div className="col-span-3 grid grid-cols-3 gap-6">
                        <div>
                          <h4 className=" font-bold  uppercase mb-3">
                            Categories
                          </h4>
                          {sub.subSubcategories?.map((item) => (
                            <Link
                              key={item.id}
                              to={`/shop?gender=${normalizedGender}&productType=${item.productType}`}
                              className="block text-sm font-medium text-gray-800 hover:text-gray-500 mb-1 mt-2 sm:mt-4 "
                            >
                            <div className="flex gap-2">  <Shirt className="w-4" />
                              <span> {item.name}</span></div>
                            </Link>
                          ))}
                        </div>

                        <div>
                          <h4 className=" font-bold text-gray-500 uppercase mb-3">
                            Discover More
                          </h4>
                          {sub.discoverMore?.map((item) => (
                            <Link
                              key={item.id}
                              to={`/shop?gender=${normalizedGender}&productType=${item.productType}`}
                              className="block text-sm font-medium text-gray-800 hover:text-gray-500 mb-1 mt-2 sm:mt-4"
                            >
                             <div className="flex gap-2 "> <Shirt className="w-4" />
                              {item.name}</div>
                            </Link>
                          ))}
                        </div>

                        <div>
                          <h4 className=" font-bold text-gray-500 uppercase mb-3">
                            Top Brands
                          </h4>
                          {sub.topBrands?.map((item) => (
                            <Link
                              key={item.id}
                              to={item.link}
                              className="block text-sm font-medium text-gray-800 hover:text-gray-500 mb-1 mt-2 sm:mt-4"
                            >
                              <div className="flex gap-2 "> <Shirt className="w-4" />
                              {item.name}</div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Image Section */}

                      <div className="col-span-1 relative bg-black h-full rounded-md overflow-hidden cursor-pointer transition-all hover:opacity-90 pb-10">
                        {/* Full Image */}
                        {sub.image && (
                          <img
                            src={sub.image}
                            alt={sub.name}
                            className="w-full h-60 object-cover"
                          />
                        )}

                        {/* Bottom Text with Arrow */}
                        <div className="absolute bottom-2 left-4 flex items-center">
                          <span className="text-sm font-bold text-white tracking-wide mr-2 uppercase">
                            {sub.name}
                          </span>
                          <span className="text-white text-lg">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
