import { Link } from "react-router-dom";

const Breadcrums1 = () => {
  return (
    <div className="text-sm text-gray-500 flex items-center space-x-2 mb-4 bg-[#F2F4F5] p-4">
      <Link to="/" className="text-black hover:underline">Home</Link>
      <span className="text-gray-400">•</span>
      <Link to="/shop" className="text-black hover:underline">Shop</Link>
      <span className="text-gray-400">•</span>
      <Link to="/shop" className="text-black hover:underline">Shop grid</Link>
      <span className="text-gray-400">•</span>

      <span className="text-green-400">Clothes</span>
    </div>
  );
};

export default Breadcrums1;
