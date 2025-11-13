import { useState, useRef, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaChevronDown, FaTimes, FaBars, FaSearch } from "react-icons/fa";
import like from "../../assets/liked.png";
import bag from "../../assets/bag.png";
import CartDrawer from "../CartDrawer/CartDrawer";
import CategoryDropdown from "./CategoryDropdown";
import { ShopContext } from "../Context/ShopContext";
import { useAuth } from "../Context/AuthContext";
import LanguageSelector from "../LanguageSelector";
import GenderTabs from "./GenderTabs";
import { useGender } from "../Context/GenderContext";
import SearchDropdown from "./SearchDropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const { setGender } = useGender();
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const shopContext = useContext(ShopContext) as any;
  const wishlist = shopContext?.wishlist ?? [];
  const cart = shopContext?.cart ?? [];
  const auth = useAuth();
  const isLoggedIn = auth?.isLoggedIn ?? false;
  const logout = auth?.logout ?? (() => {});

  const navItems = [
    { name: "How it works", path: "/how-works" },
    { name: "Sell with us", path: "/sell-with-us" },
  ];

  const userLinks = [
    { name: "Home", path: "/" },
    { name: "Account", path: "/account" },
    { name: "Wishlist", path: "/my-wishlist" },
    { name: "Order History", path: "/order-history" },
    { name: "Profile & Settings", path: "/profile-setting" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeAllDropdowns = () => {
    // setIsCategoryOpen(false);
    setIsMenuOpen(false);
    setIsUserDropdownOpen(false);
    setIsSearchOpen(false);
  };
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;

    // if (dropdownRef.current && !dropdownRef.current.contains(target)) {
    //   setIsCategoryOpen(false);
    // }
    if (userDropdownRef.current && !userDropdownRef.current.contains(target)) {
      setIsUserDropdownOpen(false);
    }
    if (searchRef.current && !searchRef.current.contains(target)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    closeAllDropdowns();
  }, [location]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
        {/* Top Announcement Bar */}
        <div className="bg-black px-6">
          <div className="container mx-auto text-white text-sm flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative" ref={dropdownRef}>
              <div className="container mx-auto px-4 sm:px-6">
                <nav className="hidden lg:block">
                  <ul className="flex space-x-1">
                    {navItems.map((item) => (
                      <li key={item.name} className="relative">
                        <Link
                          to={item.path ?? "#"}
                          className="flex items-center px-3 py-2 text-sm font-medium hover:text-gray-200 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              {/* {isCategoryOpen && <CategoryDropdown />} */}
            </div>
            <div className="flex gap-2 sm:gap-4 text-xs sm:text-sm">
              <LanguageSelector />
              <span>|</span>
              <div className="relative ">
                <select
                  className="appearance-none bg-transparent border-none pl-1 pr-6 text-sm cursor-pointer focus:outline-none"
                  defaultValue="USD"
                >
                  <option className="text-black" value="USD">
                    USD
                  </option>
                  <option className="text-black" value="EUR">
                    EUR
                  </option>
                  <option className="text-black" value="INR">
                    INR
                  </option>
                  <option className="text-black" value="GBP">
                    GBP
                  </option>
                </select>
                <FaChevronDown className="absolute right-1 top-1 text-xs pointer-events-none " />
              </div>
              <span>|</span>
              <div ref={userDropdownRef}>
                {isLoggedIn ? (
                  <div className="relative">
                    <button
                      className="font-medium cursor-pointer"
                      onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    >
                      Nanden aroma ▼
                    </button>
                    {isUserDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded shadow-lg p-4 z-60">
                        <div className="mb-3 border-b pb-3">
                          <p className="text-sm font-semibold text-gray-900">
                            Hudson Alvarze
                          </p>
                          <p className="text-xs text-gray-500">
                            demo@minimalsc.cc
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {userLinks.map((link) => (
                            <li key={link.name}>
                              <Link
                                to={link.path}
                                className="block px-2 py-1 rounded hover:bg-gray-100"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={logout}
                          className="mt-3 w-full text-left text-sm text-red-600 hover:text-red-700 border-t border-gray-300"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => navigate("/sign-in")}
                    className="font-medium hover:underline cursor-pointer"
                  >
                    Sign In/ Sign Up
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="mid-header border-b border-b-gray-200 px-6">
          <div className="container mx-auto flex items-end justify-between">
            <GenderTabs onChange={setGender} />
            <Link to="/" className="flex-shrink-0 py-4">
              <img className="w-20 sm:w-full" src={logo} alt="Company Logo" />
            </Link>

            {/* Icons */}
            <div className="hidden sm:flex items-center space-x-4 py-4">
              <div className="relative">
                <button
                  onClick={() => navigate("/my-wishlist")}
                  className="p-2 hover:text-green-600 transition-colors cursor-pointer"
                  aria-label="Wishlist"
                >
                  <img src={like} alt="Wishlist" className="w-5 h-5" />
                </button>
                {wishlist.length > 0 && (
                  <span className="absolute -top-0 -right-1 bg-red-500 text-white text-[10px] font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </div>
              <span className="text-gray-300">|</span>
              <div className="relative">
                <button
                  onClick={() => {
                    if (!isLoggedIn) {
                      navigate("/sign-in");
                    } else {
                      setShowCart(true);
                    }
                  }}
                  className="p-2 hover:text-green-600 transition-colors cursor-pointer"
                  aria-label="Cart"
                >
                  <img src={bag} alt="Cart" className="w-5 h-5" />
                </button>
                <span className="absolute -top-0 -right-0 bg-green-700 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cart.length}
                </span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 focus:outline-none ml-6 mb-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Category & Search Toggle Row */}
        <div className="relative w-full mt-10 ">
          {/* Category Row with Blur Effect */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out z-20 `}
          >
            <div
              className={`w-full flex items-center justify-between bg-white px-6 py-3 transition-all duration-500 ease-in-out `}
            >
              <CategoryDropdown />
              {!isSearchOpen && (
              <div
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center border border-black px-4 py-2 w-80"
              >
                <FaSearch className="text-gray-600 mr-3" />
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 outline-none border-none placeholder-gray-500 text-base bg-transparent"
                />
              </div> )}
            </div>
          </div>

          {/* Search Row (Centered) */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out z-30 ${
              isSearchOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="w-1/2 flex absolute top-[-35px] items-start bg-white border border-black ">
              <div className="flex-1">
                <SearchDropdown
                  onClose={() => setIsSearchOpen(false)}
                  dropdownRef={searchRef}
                />
              </div>
              <button
                className="p-3 ml-4 mt-1"
                onClick={() => setIsSearchOpen(false)}
              >
                <FaTimes className="text-xl text-gray-600 cursor-pointer" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white py-2 px-4 shadow-md">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path || "#"}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-3 rounded hover:bg-gray-100 text-gray-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Search Dropdown */}
      {/* {isSearchOpen && (
        <SearchDropdown onClose={() => setIsSearchOpen(false)} />
      )} */}

      {/* Cart Drawer */}
      <CartDrawer show={showCart} onClose={() => setShowCart(false)} />
    </>
  );
};

export default Navbar;
