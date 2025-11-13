import { FaSearch } from "react-icons/fa";

export default function SearchSortBar() {
    
  return (
    <div className="flex flex-col xl:flex-row justify-between items-center mb-6 gap-4">
      <div className="relative w-full md:max-w-md">
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full px-4 py-2 pr-10 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 border-[#E4E7E9]"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </span>
      </div>

    <div className="flex flex-wrap items-center gap-4 text-sm">
  {/* Brand Filter */}
  <div className="flex items-center">
    <span className="text-gray-700 mr-2">Brand:</span>
    <select className="border border-gray-300 rounded px-3 py-2">
      <option>Nike</option>
      <option>Adidas</option>
      <option>Puma</option>
    </select>
  </div>

  {/* Size Filter */}
  <div className="flex items-center">
    <span className="text-gray-700 mr-2">Size:</span>
    <select className="border border-gray-300 rounded px-3 py-2">
      <option>S</option>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
    </select>
  </div>

  {/* Color Filter */}
  <div className="flex items-center">
    <span className="text-gray-700 mr-2">Color:</span>
    <select className="border border-gray-300 rounded px-3 py-2">
      <option>Black</option>
      <option>White</option>
      <option>Red</option>
      <option>Blue</option>
    </select>
  </div>
</div>

    </div>
  );
}
