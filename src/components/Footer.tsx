import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/footer_logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const navItems = [
  { name: "About Us", path: "/about-us" },
  { name: "How it Works", path: "/how-works" },
  { name: "Sell with us", path: "/sell-with-us" },
  { name: "Contact", path: "/contact-us" },
];

const supportsNavItems = [
  { name: "FAQs", path: "/faq" },
  { name: "Returns and Shipping", path: "return-shipping" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms&conditions" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email : string) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  const handleSubscribe = () => {
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Mock success
    setSuccess("Subscribed successfully!");
    setEmail("");
  };

  return (
    <div className="bg-black text-white pt-12 px-4 pb-4">
      <div className="container  mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:px-14">
        {/* Column 1: Logo and Socials */}
        <div className="mr-10">
          <img src={logo} alt="Logo" className="w-50 mb-3" />
          <p className="text-sm mb-4">
            Discover, shop, and sell quality stock goods with ease.
          </p>
          <div className="flex gap-3 text-white text-lg">
            <a href="#" aria-label="Facebook" className="p-2 border rounded-4xl border-white hover:bg-white hover:text-black"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="p-2 border rounded-4xl border-white hover:bg-white hover:text-black"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="p-2 border rounded-4xl border-white hover:bg-white hover:text-black"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Column 2: Stockmate */}
        <div>
          <h2 className="font-bold mb-3">Stockmate</h2>
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="text-sm hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h2 className="font-bold mb-3">Support</h2>
          <ul className="flex flex-col gap-2">
            {supportsNavItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="text-sm hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-2">Subscribe to Newsletter</h2>
          <p className="text-sm mb-4">
            Get updates on new offers and arrivals from stores.
          </p>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-sm text-black mb-2 bg-white focus:outline-none"
          />
          <button
            onClick={handleSubscribe}
            className="w-full bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 rounded-md"
          >
            Subscribe
          </button>
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          {success && <p className="text-green-500 text-xs mt-1">{success}</p>}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto mt-10 pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 md:px-14">
        <p className="text-xs sm:text-sm text-center md:text-left">
          © 2025 StockMate. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs sm:text-sm">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms&conditions" className="hover:underline">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
