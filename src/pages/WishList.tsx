import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ShopContext } from '../components/Context/ShopContext';
import { useAuth } from '../components/Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import LoginRequire from './LoginRequire';

export default function Wishlist() {
  const shopContext = useContext(ShopContext);
  if (!shopContext) {
    return <div>Shop context is not available.</div>;
  }

  const { wishlist, removeFromWishlist, addToCart } = shopContext;
  const authContext = useAuth();
  const isLoggedIn = authContext?.isLoggedIn;
  const navigate = useNavigate();

  const handleAddToCart = (product: any) => {
    addToCart(product);
  };

  if (!isLoggedIn) {
    return (
      <LoginRequire
        message="Login to see your liked items."
        onLoginClick={() => navigate('/sign-in')}
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 2xl:pt-14">
      <div className="flex items-center gap-2 mb-6">
        <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer" onClick={() => navigate(-1)} />
        <h2 className="text-xl md:text-2xl font-bold">My Wishlist</h2>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
        {/* Header Row - hidden on small screens */}
        <div className="hidden md:grid grid-cols-4 text-sm font-medium px-4 py-2 border-b border-gray-300 text-gray-500">
          <div className="col-span-2">Product</div>
          <div>Price</div>
          <div className="px-6">Stock Status</div>
        </div>

        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-300 text-sm px-4 py-4 flex flex-col md:grid md:grid-cols-4 gap-4"
            >
              {/* Product Info */}
              <div className="md:col-span-2 flex gap-4 items-center">
                <img
                  src={item.image[0]}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <p className="text-sm font-medium">{item.title}</p>
              </div>

              {/* Price */}
              <div className="flex items-center md:block justify-between md:justify-start">
                <p className="font-semibold">
                  €{item.price.toFixed(2)}
                  {item.oldPrice && (
                    <span className="line-through text-gray-400 text-sm ml-2">
                      €{item.oldPrice.toFixed(2)}
                    </span>
                  )}
                </p>
              </div>

              {/* Stock & Actions */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <span
                  className={`text-xs px-2 py-1 rounded w-fit ${
                    item.inStock
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {item.inStock ? 'In Stock' : 'Out of Stock'}
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={!item.inStock}
                    className={`px-3 py-2 text-sm rounded ${
                      item.inStock
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-gray-400 hover:text-gray-600 text-xl"
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">Your wishlist is empty</div>
        )}

        {/* Share Section */}
        {wishlist.length > 0 && (
          <div className="px-4 py-4 flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
            <span className="text-gray-600">Share:</span>
            <div className="flex gap-3 text-white items-center">
              <Link to="#" className="bg-green-600 p-2 rounded-full">
                <FaFacebookF />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-black">
                <FaTwitter />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-black">
                <FaPinterestP />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-black">
                <FaInstagram />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
