import { useContext } from "react";
import { X } from "lucide-react";
import { ShopContext } from "../Context/ShopContext";
import { useAuth } from "../Context/AuthContext";
import LoginRequire from "../../pages/LoginRequire";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  if (!show) return null;

  const shopContext = useContext(ShopContext);
  const cart = shopContext?.cart ?? [];
  const removeFromCart = shopContext?.removeFromCart ?? (() => {});
  const updateQuantity = shopContext?.updateQuantity ?? (() => {});
  const auth = useAuth();
  const isLoggedIn = auth?.isLoggedIn;
  const navigate = useNavigate();
  const handleNavigate = () => {
      onClose();         
    navigate("/checkout");
  };
  const calculateTotal = () => {
    return cart
      .reduce((total: any, item: any) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  if (!isLoggedIn) {
    return (
      <LoginRequire
        message="Login to see your liked items."
        onLoginClick={() => navigate("/sign-in")}
      />
    );
  }
  return (
    <>
      {/* Overlay that closes drawer on click */}
      <div onClick={onClose} className="fixed inset-0 bg-black/40 z-50" />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-[320px] bg-white shadow-lg p-4 z-50 rounded-md flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              Shopping Cart ({cart.length})
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-black cursor-pointer"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4 overflow-y-auto max-h-[60vh]">
            {cart.length === 0 ? (
              <p className="text-sm text-center text-gray-500">
                Your cart is empty.
              </p>
            ) : (
              cart.map((item: any) => (
                <div key={item.id} className="flex items-start gap-3">
                  <img
                    src={item.image[0]} // Using first image from array
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div className="flex-1 space-y-1">
                    <p className="text-xs font-medium text-[#191C1F]">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.quantity} ×{" "}
                      <span className="text-green-600">
                        €{item.price.toFixed(2)}
                      </span>
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="px-1 text-sm disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="text-xs">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-1 text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mt-6 pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-[#475156]">Sub-Total:</span>
            <span className="font-medium text-[#191C1F]">
              €{calculateTotal()}
            </span>
          </div>
          <button
            onClick={handleNavigate}
            className="w-full mt-4 bg-black text-white py-2 rounded cursor-pointer text-sm"
          >
            Checkout now →
          </button>
          <button
            onClick={handleNavigate}
          className="w-full mt-2 border py-2 rounded text-sm cursor-pointer">
            View Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
