import { useContext, useState } from "react";
import { FaCheck, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../components/Context/ShopContext";
import SellerModal from "./SellerModal";

interface Seller {
  id?: string | number;
  name: string;
  price: string;
  rating: number;
  email: string;
  avatar: string;
  shippingIncluded: boolean;
}

const colors = [
  { name: "Blue", hex: "#1E90FF" },
  { name: "Pink", hex: "#FFB6C1" },
  { name: "Black", hex: "#000" },
];

const sellers: Seller[] = [
  {
    id: "seller_1",

    name: "Jayvion Simon",
    email: "nannie.abernathy70@yahoo.com",
    price: "€70.00",
    rating: 4.5,
    shippingIncluded: true,
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: "seller_2",

    name: "Aber nathy",
    email: "nannie.abernathy70@yahoo.com",
    price: "€72.50",
    rating: 3.8,
    shippingIncluded: false,
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: "seller_3",

    name: "Nannie",
    email: "nannie.abernathy70@yahoo.com",
    price: "€75.00",
    rating: 4.5,
    shippingIncluded: true,
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

interface Product {
  id: string | number;
  title: string;
  price: string | number;
}

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("10.5");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [showModal, setShowModal] = useState(false);

  // Default seller
  const [selectedSeller, setSelectedSeller] = useState<Seller>(sellers[0]);
  const [displayedSellers, setDisplayedSellers] = useState<Seller[]>(
    sellers.slice(0, 2)
  );

  const shopContext = useContext(ShopContext);
  if (!shopContext) throw new Error("ShopContext is not provided");

  const { wishlist, addToWishlist, removeFromWishlist } = shopContext;
  const isInWishlist = wishlist.some(
    (item: { id: string | number }) => item.id === product.id
  );

  const navigate = useNavigate();

  const handleWishlistClick = () => {
    if (isInWishlist) removeFromWishlist(product.id);
    else addToWishlist(product);
  };

  const handleSellerSelect = (seller: Seller) => {
    setSelectedSeller(seller);
    setShowModal(false);

    // If seller is not already in displayedSellers, add it to the top
    if (!displayedSellers.some((s) => s.id === seller.id)) {
      setDisplayedSellers([seller, ...displayedSellers]);
    }
  };

  return (
    <div className="p-6 space-y-2">
      <p className="font-bold text-sm">(Nike)</p>
      <h2 className="text-xl font-semibold text-[#1C252E]">{product.title}</h2>

      {/* Rating */}
      <div className="flex items-center gap-2 text-sm">
        <div className="flex text-yellow-400">
          {[...Array(Math.floor(selectedSeller.rating))].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <span className="text-gray-400">(11.78k reviews)</span>
      </div>

      {/* Price */}
      <div className="space-x-2 text-xl font-bold">
        <span className="text-black">{selectedSeller.price}</span>
        <span className="line-through text-gray-400 text-lg">
          {product.price}
        </span>
        <span className="text-green-600 text-sm">You save 30%</span>
      </div>
      <p className="text-gray-500 text-sm">
        {selectedSeller.shippingIncluded
          ? "Shipping Included"
          : "Shipping Paid by Customer"}
      </p>

      {/* Size, Quantity, Color */}
      <div className="flex items-center gap-6 mt-4">
        <div>
          <p className="text-sm font-medium">Size</p>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="border border-gray-300 px-4 py-1 rounded-md"
          >
            <option value="10.5">10.5</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>

        <div>
          <p className="text-sm font-medium">Quantity</p>
          <div className="flex items-center border border-gray-300 rounded-md px-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 text-lg"
            >
              −
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 text-lg"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium">Color</p>
          <div className="flex gap-2">
            {colors.map((color) => (
              <div
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-5 h-5 rounded-full cursor-pointer flex items-center justify-center ${
                  selectedColor.name === color.name
                    ? "ring-2 ring-blue-500"
                    : "border border-gray-300"
                }`}
                style={{ backgroundColor: color.hex }}
              >
                {selectedColor.name === color.name && (
                  <FaCheck className="text-white text-xs" />
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">{selectedColor.name}</p>
        </div>
      </div>

      {/* Selected Seller */}
      <div className="mt-4">
        <p className="text-sm font-semibold text-black mb-2">Choose a Seller</p>

        <div className="flex flex-col gap-2">
          {displayedSellers.map((seller) => (
            <label
              key={seller.id}
              className="flex items-center justify-between border-b pb-1 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="seller"
                  value={seller.id}
                  checked={selectedSeller.id === seller.id}
                  onChange={() => handleSellerSelect(seller)}
                  className="accent-blue-500"
                />
                <div>
                  <p className="font-medium text-sm">{seller.name}</p>
                  <div className="flex text-yellow-400 text-xs">
                    {[...Array(Math.floor(seller.rating))].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="font-semibold">{seller.price}</p>
                <p className="text-gray-500">
                  {seller.shippingIncluded ? "Free Shipping" : "+ Shipping"}
                </p>
              </div>
            </label>
          ))}
        </div>

        <p
          onClick={() => setShowModal(true)}
          className="text-sm font-semibold cursor-pointer text-red-500 hover:text-red-600 mt-2"
        >
          View All Sellers
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate("/checkout")}
          className="bg-[#1C252E] text-white px-6 py-2 rounded-md w-full text-sm"
        >
          Buy now
        </button>
        <button
          onClick={handleWishlistClick}
          className={`px-6 py-2 rounded-md w-full flex items-center justify-center gap-2 text-sm ${
            isInWishlist ? "bg-red-500 text-white" : "bg-[#1C252E] text-white"
          }`}
        >
          {isInWishlist ? "❤️ Remove from favorite" : "🤍 Add to favorite"}
        </button>
      </div>

      <p className="text-xs text-center text-gray-600 mt-2">
        Returns available within 14 days
      </p>

      {showModal && (
        <SellerModal
          onClose={() => setShowModal(false)}
          onSelect={handleSellerSelect}
        />
      )}
    </div>
  );
};

export default ProductInfo;
