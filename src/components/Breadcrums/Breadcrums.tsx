import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumsProps {
  product?: {
    title?: string;
    // Add other product properties here if needed
  };
}

const Breadcrums: React.FC<BreadcrumsProps> = ({ product }) => {
  return (
    <div className="text-sm text-gray-500 flex items-center space-x-2 mt-4">
      <Link to="/" className="text-black hover:underline">Home</Link>
      <span className="text-gray-400">•</span>
      <Link to="/shop" className="text-black hover:underline">Shop</Link>
      <span className="text-gray-400">•</span>
      <span className="text-gray-400">{product?.title}</span>
    </div>
  );
};

export default Breadcrums;
