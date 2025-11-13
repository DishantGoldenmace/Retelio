// components/UserSidebar.tsx
import {
  LayoutDashboard,
  Clock,
  Heart,
  ShoppingCart,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/account" },
  { name: "Order History", icon: Clock, path: "/order-history" },
  { name: "Wishlist", icon: Heart, path: "/my-wishlist" },
  { name: "Shopping Cart", icon: ShoppingCart, path: "/checkout" },
  { name: "Settings", icon: Settings, path: "/profile-setting" },
  { name: "Return & Refund", icon: Settings, path: "/return-refund" },
  { name: "Log-out", icon: LogOut, path: "/" },
];

const AccountSidebar = () => {
  return (
    <aside className="sm:w-[220px] bg-white border rounded-md p-4 mt-20">
      <h2 className="font-semibold text-lg mb-4">Navigation</h2>
      <nav className="flex flex-col space-y-2">
        {navLinks.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? "bg-gray-100 text-black border-l-4 border-green-500"
                  : "text-gray-500 hover:text-black"
              }`
            }
          >
            <Icon size={16} />
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AccountSidebar;
