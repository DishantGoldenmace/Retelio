import { FaStar } from "react-icons/fa";

const sellers = [
  {
    id: 'seller_1',
    name: "Jayvion Simon",
    email: "nannie.abernathy70@yahoo.com",
    price: "€70.00",
    rating: 4.5,
    shippingIncluded: true,
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 'seller_2',

    name: "Aber nathy",
    email: "nannie.abernathy70@yahoo.com",
    price: "€72.50",
    rating: 3.8,
    shippingIncluded: false,
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 'seller_3',

    name: "Nannieee ",
    email: "nannie.abernathy70@yahoo.com",
    price: "€75.00",
    rating: 4.5,
    shippingIncluded: true,
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 'seller_4',

    name: "Aberrrrrr nathy",
    email: "nannie.abernathy70@yahoo.com",
    price: "€72.50",
    rating: 3.8,
    shippingIncluded: false,
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 'seller_5',

    name: "Nannie ",
    email: "nannie.abernathy70@yahoo.com",
    price: "€75.00",
    rating: 4.5,
    shippingIncluded: true,
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

interface Seller {
   id: string;
  name: string;
  email: string;
  price: string;
  rating: number;
  shippingIncluded: boolean;
  avatar: string;
}

interface Props {
  onClose: () => void;
  onSelect: (seller: Seller) => void;
}

const SellerModal = ({ onClose, onSelect }: Props) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - fullStars - (half ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400" />
        ))}
        {half && <FaStar className="text-yellow-300" />}
        {[...Array(empty)].map((_, i) => (
          <FaStar key={`empty-${i}`} className="text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-4xl relative overflow-y-auto max-h-[80vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-xl hover:text-black"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Sellers</h2>
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3 border-b">Vendor name</th>
              <th className="p-3 border-b">Rating</th>
              <th className="p-3 border-b">Price</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                {/* Vendor */}
                <td className="p-3 border-t flex items-center gap-3">
                  {/* <img
          src={seller.avatar}
          alt={seller.name}
          className="w-8 h-8 rounded-full object-cover"
        /> */}
                  <div>
                    <p className="font-medium">{seller.name}</p>
                    {/* <p className="text-gray-500 text-xs">{seller.email}</p> */}
                  </div>
                </td>

                {/* Rating */}
                <td className="p-3 border-t">
                  <div className="flex items-center">
                    {renderStars(seller.rating)}
                    <span className="text-gray-600 text-sm ml-1">
                      ({seller.rating.toFixed(1)})
                    </span>
                  </div>
                </td>

                {/* Price */}
                <td className="p-3 border-t font-medium">{seller.price}</td>

                {/* Status */}
                <td className="p-3 border-t">
                  {seller.shippingIncluded ? (
                    <span className="text-green-600 font-medium">
                      ✔ Shipping Included
                    </span>
                  ) : (
                    <span className="text-red-500 font-medium">
                      ✘ Shipping Paid by Customer
                    </span>
                  )}
                </td>

                {/* Action */}
                <td className="p-3 border-t">
                  <button
                    onClick={() => onSelect(seller)}
                    className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 cursor-pointer"
                  >
                    Select
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerModal;
