import img1 from "../assets/product_1.png";
import img2 from "../assets/product_2.png";
import img3 from "../assets/product_3.png";
import img4 from "../assets/product_4.png";
import img5 from "../assets/product_5.png";
import shape from "../assets/primary-shape.png";

import { ArrowRight, ExternalLink, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const orders = [
  {
    id: 2133,
    items: [
      { name: "Madras Shirt", price: 168.2, img: img1 },
      { name: "Chino Pants", price: 168.2, img: img2 },
      { name: "Twill Suit", price: 168.2, img: img3 },
      { name: "Combed Cotton Sweater", price: 168.2, img: img4 },
      { name: "Collared Shirt", price: 168.2, img: img5 },
    ],
    status: "In Progress",
    trackingId: "2176413876",
    deliveryDate: "23-07-2021",
  },
];

const OrderHistory = () => {
  const { id, trackingId, status, deliveryDate, items } = orders[0];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/order-details");
  };

  return (
    <div className="p-4 md:p-6 ">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
        Order History
      </h2>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto ">
        <table className="min-w-full border border-gray-300 rounded-lg ">
          <thead>
            <tr className="bg-green-600 text-white text-left">
              <th className="p-3">Order no</th>
              <th className="p-3">Items</th>
              <th className="p-3">Status</th>
              <th className="p-3">Tracking ID</th>
              <th className="p-3">Delivery Date</th>
              <th className="p-3">Price</th>
              <th className="p-3">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 hover:bg-gray-50 transition "
              >
                <td className="p-3">{id}</td>
                <td className="p-3 flex items-center gap-3 truncate">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <span className="text-sm">{item.name}</span>
                </td>
                <td className="p-3 truncate">
                  <span className="inline-flex items-center text-sm bg-red-50 text-red-500 px-2 py-1 rounded">
                    <Clock className="w-4 h-4 mr-1 text-sm" /> {status}
                  </span>
                </td>
                <td className="p-3 flex items-center gap-1 text-sm">
                  {trackingId}
                  <ExternalLink className="w-4 h-4 text-gray-500" />
                </td>
                <td className="p-3 text-sm truncate">
                  {deliveryDate} <br />
                  <span className="text-xs text-gray-500">(Expected)</span>
                </td>
                <td className="p-3 text-sm truncate">
                  ${item.price.toFixed(2)}
                </td>
                <td 
                onClick={handleClick}
                
                className="p-3 truncate text-green-600 flex items-center gap-1 cursor-pointer text-sm">
                  view details <ArrowRight className="w-4 h-4" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={handleClick}
            className="border border-gray-300 rounded-lg p-4 shadow-sm cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-2">
              <img
                src={item.img}
                alt={item.name}
                className="w-14 h-14 rounded object-cover"
              />
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Order:</span> #{id}
            </div>
            <div className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Tracking:</span> {trackingId}
            </div>
            <div className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Status:</span> {status}
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Delivery:</span> {deliveryDate}{" "}
              <span className="text-xs text-gray-400">(Expected)</span>
            </div>
            <div className="text-green-600 text-sm font-medium flex items-center gap-1">
              View details <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      <div
        onClick={() => navigate("/account")}
        className="flex items-center gap-2 mt-2"
      >
        <img src={shape} alt="shape" className="w-3 h-3 " />
        <button className="text-sm font-semibold hover:underline flex items-center gap-1 cursor-pointer">
          Back
        </button>
      </div>
    </div>
  );
};

export default OrderHistory;
