import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import WishList from "./pages/WishList";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/Terms&Conditions";
import Faq from "./pages/Faq";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./sections/Checkout.tsx/OrderSuccess";
import ProfileSettings from "./pages/ProfileSettings";
import AccountLayout from "./pages/AccountLayout";
import Account from "./pages/Account";
import OrderHistory from "./pages/OrderHistory";
import OrderDetails from "./pages/OrderDetails";
import ReturnFlow from "./pages/ReturnFlow";
import ForgotPassword from "./auth/ForgetPassword";
import SellWithUs from "./pages/SellWithUs";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import ReturnShipping from "./pages/ReturnShipping";
import ReturnRefund from "./pages/ReturnRefund";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="  flex flex-col min-h-screen  ">
        <Navbar />

        <main className="flex-1 pt-40 2xl:pt-33 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="forget-password" element={<ForgotPassword />} />

            <Route path="my-wishlist" element={<WishList />} />
            <Route path="shop" element={<Shop />} />
            <Route
              path="shop/product-details/:id"
              element={<ProductDetails />}
            />

            <Route path="checkout" element={<Checkout />} />
            <Route path="order-success" element={<OrderSuccess />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="return-shipping" element={<ReturnShipping />} />
            <Route path="terms&conditions" element={<TermsCondition />} />
            <Route path="faq" element={<Faq />} />
            <Route path="how-works" element={<HowItWorks />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="sell-with-us" element={<SellWithUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="order-details" element={<OrderDetails />} />
            <Route path="return-product" element={<ReturnFlow />} />

            <Route path="/" element={<AccountLayout />}>
              <Route path="account" element={<Account />} />
              <Route path="profile-setting" element={<ProfileSettings />} />
              <Route path="my-wishlist" element={<WishList />} />
              <Route path="order-history" element={<OrderHistory />} />
              <Route path="return-refund" element={<ReturnRefund />} />
              {/* Add more account-related pages here */}
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
