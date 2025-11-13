import { FaArrowLeft } from "react-icons/fa";
import img1 from "../assets/product_1.png";
import img2 from "../assets/product_2.png";
import { CheckCircle, Truck, Box, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/return-product");
  };
  return (
    <div className="py-10 max-w-6xl mx-auto   border-gray-300 mb-4 2xl:pt-14">
      {/* Header Section */}

      <div className="flex items-center justify-between border border-gray-300 p-2">
        <div>Order Details</div>
        <div className="text-green-600">Leave a rating</div>
      </div>
      <div className="p-6 border-b border-gray-300">
        <button
          onClick={() => navigate("/order-history")}
          className="text-sm hover:underline flex items-center gap-2  py-2"
        >
          <FaArrowLeft className="" />
          Back to Orders
        </button>
        <div className="bg-green-100 border border-green-300 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center ">
          <div>
            <h2 className="text-lg font-semibold">#96459761</h2>
            <p className="text-sm text-gray-600">
              4 Products • Order Placed in 17 Jan, 2021 at 7:32 PM
            </p>
          </div>
          <div className="text-2xl font-bold text-right text-green-800 mt-2 md:mt-0">
            $1199.00
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-6">
          <p className="text-sm text-gray-600 mb-4">
            Order expected arrival{" "}
            <span className="font-medium text-black">23 Jan, 2021</span>
          </p>

          <div className="grid grid-cols-5 text-center">
            {[
              {
                label: "Order placed",
                icon: <CheckCircle className="mx-auto" />,
              },
              {
                label: "Order Confirmed by the seller",
                icon: <CheckCircle className="mx-auto" />,
              },
              { label: "Packaging", icon: <Box className="mx-auto" /> },
              { label: "On The Road", icon: <Truck className="mx-auto" /> },
              { label: "Delivered", icon: <Handshake className="mx-auto" /> },
            ].map((step, index) => (
              <div key={index} className="text-green-600">
                <div className="w-4 h-4 mx-auto rounded-full bg-green-500 mb-2"></div>
                {step.icon}
                <p className="text-xs mt-1 text-black font-medium">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="mt-4 p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-2">Order Activity</h3>
        <p className="text-sm text-gray-900 mb-4">
          Thank you for choosing real over fast. The store has 48 hours to
          prepare your order, just for you. Expect delivery in 5–7 working days{" "}
          <br />— worth the wait. Your choice makes a difference for independent
          shops.
        </p>

        <ul className="space-y-3 text-sm text-gray-800">
          <li>
            <span className=" font-medium">Your order has been delivered.</span>{" "}
            Thank you for shopping at Stockmate
            <br />
            <span className="text-gray-500">23 Jan, 2021 at 7:32 PM</span>
          </li>
          <li>
            Our delivery man (John Wick) has picked-up your order for delivery.
            <br />
            <span className="text-gray-500">23 Jan, 2021 at 2:00 PM</span>
          </li>
          <li>
            Your order has reached at last mile hub.
            <br />
            <span className="text-gray-500">22 Jan, 2021 at 8:00 AM</span>
          </li>
          <li>
            Your order on the way to (last mile) hub.
            <br />
            <span className="text-gray-500">21 Jan, 2021 at 5:32 AM</span>
          </li>
          <li>
            Your order is successfully verified.
            <br />
            <span className="text-gray-500">20 Jan, 2021 at 7:32 PM</span>
          </li>
          <li>
            Your order has been confirmed.
            <br />
            <span className="text-gray-500">19 Jan, 2021 at 2:61 PM</span>
          </li>
        </ul>
      </div>

      {/* Product Table Section */}
      <div className="mt-10 border-t border-gray-300 pt-6">
        <h3 className="font-semibold text-lg mb-4 px-4">Product (02)</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-2">PRODUCTS</th>
                <th className="px-4 py-2">PRICE</th>
                <th className="px-4 py-2">QUANTITY</th>
                <th className="px-4 py-2">SUB-TOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  img: img1,
                  title: "Google Pixel 6 Pro - 5G Android Phone",
                  category: "SMARTPHONE",
                  price: "$899",
                  quantity: 1,
                  total: "$899",
                },
                {
                  img: img2,
                  title: "Tech21 Evo Clear for Google Pixel 6 Pro",
                  category: "ACCESSORIES",
                  price: "$39",
                  quantity: 1,
                  total: "$39",
                },
              ].map((item, i) => (
                <tr key={i} className="border-b border-gray-300">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div>
                        <img src={item.img} className="w-12" alt="" />
                      </div>
                      <div>
                        {" "}
                        <p className="text-xs text-[#2DA5F3] font-semibold uppercase mb-1">
                          {item.category}
                        </p>
                        <p className="text-sm font-medium text-gray-800 truncate">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{item.price}</td>
                  <td className="px-4 py-3">x{item.quantity}</td>
                  <td className="px-4 py-3">{item.total}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={handleClick}
                      className="text-white bg-[#FF2D55]  px-3 py-2 rounded text-xs cursor-pointer"
                    >
                      RETURN PRODUCT
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Billing & Shipping Info */}
      <div className="grid md:grid-cols-3 gap-6 mt-10 px-4">
        <div className="text-sm space-y-2  border-r border-gray-300">
          <h4 className="text-sm font-semibold mb-2">Billing Address</h4>
          <p className="text-sm text-gray-900">Kevin Gilbert</p>
          <p className="text-sm text-gray-500">
            East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C,
            Flat No. 5D, Dhaka - 1200, Bangladesh
          </p>
          <p className="text-sm text-gray-900">
            Phone Number:{" "}
            <span className="text-gray-500"> +1-202-555-0118</span>
          </p>
          <p className="text-sm text-gray-900">
            Email:{" "}
            <span className="text-gray-500"> kevin.gilbert@gmail.com</span>
          </p>
        </div>
        <div className="text-sm space-y-2 border-r border-gray-300">
          <h4 className="text-sm font-semibold mb-2">Shipping Address</h4>
          <p className="text-sm text-gray-900">Kevin Gilbert</p>
          <p className="text-sm text-gray-500">
            East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C,
            Flat No. 5D, Dhaka - 1200, Bangladesh
          </p>
          <p className="text-sm text-gray-900">
            Phone Number:{" "}
            <span className="text-gray-500"> +1-202-555-0118</span>
          </p>
          <p className="text-sm text-gray-900">
            Email:{" "}
            <span className="text-gray-500"> kevin.gilbert@gmail.com</span>
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">Order Notes</h4>
          <p className="text-sm text-gray-900">
            Donec ac vehicula turpis. Aenean sagittis est eu arcu ornare, eget
            venenatis purus lobortis. Aliquam erat volutpat. Aliquam magna odio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
