import { ShopContext } from "../../components/Context/ShopContext";
import { useGender } from "../../components/Context/GenderContext";
import { useContext } from "react";


export default function SidebarFilters() {

  const { gender} = useGender();
    
  
    const shopContext = useContext(ShopContext) as any;
      const allProducts = shopContext?.allProducts ?? [];
      const uniqueSubcategories = Array.from(
        new Set(
          allProducts
            .filter((item: { gender: string }) => item.gender === gender)
            .map((item: { subCategory: any }) => item.subCategory)
        )
      );
      const navItems2 = uniqueSubcategories.map((sub) => ({
      name: (sub as string)
        .split("-")
        .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      path: `/shop?gender=${gender}&sub=${sub}`,
    }));
  return (
    <aside className="w-full  md:w-60 lg:w-72  pr-4">
      <h4 className="font-semibold mb-2">Category</h4>
      <ul className="space-y-1 text-sm">
        {navItems2.map((cat) => (
          <li key={cat.name}>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                className="accent-green-500"
              />
              <span>{cat.name}</span>
            </label>
          </li>
        ))}
      </ul>

      <h4 className="font-semibold mt-6 mb-2">Price Range</h4>
      <ul className="space-y-1 text-sm">
        {[
          "All Price",
          "Under $20",
          "$25 to $100",
          "$100 to $300",
          "$300 to $500",
          "$500 to $1,000",
          "$1,000 to $10,000",
        ].map((range) => (
          <li key={range}>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-green-500" />
              <span>{range}</span>
            </label>
          </li>
        ))}
      </ul>
{/* 
      <h4 className="font-semibold mt-6 mb-2">Size</h4>
      <div className="flex flex-wrap gap-2 text-sm">
        {["XS", "S", "M", "L", "XL"].map((size) => (
          <button
            key={size}
            className="border border-gray-300 rounded px-2 py-1 hover:bg-green-100"
          >
            {size}
          </button>
        ))}
      </div> */}

      {/* <h4 className="font-semibold mt-6 mb-2">Colors</h4>
      <div className="flex flex-wrap gap-3">
        {[
          { name: "Black", value: "#000000" },
          { name: "White", value: "#ffffff" },
          { name: "Red", value: "#ef4444" },
          { name: "Green", value: "#22c55e" },
          { name: "Blue", value: "#3b82f6" },
          { name: "Yellow", value: "#eab308" },
        ].map((color) => (
          <button
            key={color.name}
            title={color.name}
            className="w-6 h-6 rounded-full border border-gray-300"
            style={{ backgroundColor: color.value }}
          />
        ))}
      </div> */}
    </aside>
  );
}
