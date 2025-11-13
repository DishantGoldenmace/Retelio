import { Outlet, useLocation } from "react-router-dom";
import AccountSidebar from "../components/AccountSidebar"; // your left navigation

const AccountLayout = () => {
  const location = useLocation();

  const isDashboard = location.pathname === "/account";

  return (
    <div className="flex flex-col sm:flex-row px-6 max-w-7xl mx-auto 2xl:pt-14">
      {isDashboard && (
        <div className="w-full sm:w-64">
          <AccountSidebar />
        </div>
      )}
      <div className="sm:flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountLayout;
