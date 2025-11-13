import { useState } from "react";
import { Trash2 } from "lucide-react";


import product1 from "../../assets/product_1.png";
import product2 from "../../assets/product_2.png";
import product3 from "../../assets/product_3.png";

const initialCart = [
  {
    id: 1,
    image: product1,
    name: "Urban Explorer Sneakers",
    vendor: "Jayvion Simon (Anvi cloth shop)",
    shipping: "$2.00",
    size: 9,
    color: "Red",
    price: 16.19,
    quantity: 1,
    available: 2,
  },
  {
    id: 2,
    image: product2,
    name: "Classic Leather Loafers",
    vendor: "Jayvion Simon (Anvi cloth shop)",
    shipping: "$2.00",
    size: 5,
    color: "Blue",
    price: 35.71,
    quantity: 2,
    available: 3,
  },
  {
    id: 3,
    image: product3,
    name: "Mountain Trekking Boots",
    vendor: "Jayvion Simon (Anvi cloth shop)",
    shipping: "$2.00",
    size: 7,
    color: "malty",
    price: 34.3,
    quantity: 3,
    available: 6,
  },
];

const CartItems = () => {
  const [cartItems, setCartItems] = useState(initialCart);
 

  const handleQtyChange = (id: number, type: "inc" | "dec") => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? Math.min(item.quantity + 1, item.available)
                  : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="px-4">
      {/* Info Box */}
      <div className="border border-gray-200 rounded-md md:p-4 p-3 space-y-2 text-sm bg-white">
        <h1 className="font-bold text-base">How the shipment works:</h1>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold">
              Sold by real stores. Handled with care.
            </span>{" "}
            Each item in your cart is sold by a local retailer.
          </li>
          <li>
            Sellers have up to <span className="font-semibold">48 hours</span>{" "}
            to confirm and prepare your order.
          </li>
          <li>
            Delivery usually takes{" "}
            <span className="font-semibold">5–7 working days,</span> including
            confirmation and shipping.
          </li>
          <li>
            If an item is no longer available, you’ll be fully refunded —{" "}
            <span className="font-semibold">no action needed.</span>
          </li>
        </ul>
      </div>

      {/* Cart Box */}
      <div className="max-w-5xl mx-auto p-4 bg-white rounded-xl border border-gray-200 mt-4">
        <h2 className="text-xl font-semibold mb-4">
          Cart ({cartItems.length})
        </h2>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-5 text-sm font-medium text-gray-500 pb-2 bg-[#F4F6F8] p-2 rounded">
          <span className="col-span-2">Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total price</span>
        </div>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid md:grid-cols-5 gap-4 items-center py-4 border-b border-gray-200 last:border-0"
          >
            {/* Product Info */}
            <div className="col-span-2 flex gap-4 items-start">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500">{item.vendor}</p>
                <p className="text-xs text-gray-500">
                  Shipping cost: {item.shipping}
                </p>
                <p className="text-xs text-gray-500">
                  Size: <span className="font-medium">{item.size}</span> |
                  Color:{" "}
                  <span className="font-medium text-black">{item.color}</span>
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="text-sm md:text-center">
              ${item.price.toFixed(2)}
            </div>

            {/* Quantity */}
            <div className="flex flex-col items-center md:items-center gap-1">
              <div className="border border-gray-300 rounded px-2 flex items-center">
                <button
                  className="text-sm"
                  onClick={() => handleQtyChange(item.id, "dec")}
                >
                  −
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  className="text-sm"
                  onClick={() => handleQtyChange(item.id, "inc")}
                >
                  +
                </button>
              </div>
              <span className="text-xs text-gray-500">
                Available: {item.available}
              </span>
            </div>

            {/* Total + Remove */}
            <div className="flex items-center justify-between md:justify-end gap-2">
              <span className="font-semibold text-sm">
                ${(item.quantity * item.price).toFixed(2)}
              </span>
              <button
                onClick={() => handleRemove(item.id)}
                className="hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default CartItems;
