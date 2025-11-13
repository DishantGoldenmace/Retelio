import { useState } from "react";
import CheckoutSteps from "../sections/Checkout.tsx/CheckoutSteps";
import OrderSummary from "../sections/Checkout.tsx/OrderSummary";
import CartItems from "../sections/Checkout.tsx/CartItems";
import BillingAddressForm from "../sections/Checkout.tsx/BillingAddressForm";
import PaymentForm from "../sections/Checkout.tsx/PaymentForm";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6  py-8 2xl:pt-14">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <CheckoutSteps step={step} />
    

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {step === 1 && <CartItems />}
          {step === 2 && <BillingAddressForm />}
          {step === 3 && <PaymentForm />}
        </div>

        <div>
          <OrderSummary step={step} />
          <button
            className="mt-6 bg-black text-white py-2 px-6 rounded w-full cursor-pointer"
            onClick={() => {
              if (step < 3) {
                setStep((prev) => prev + 1);
              } else {
                navigate("/order-success"); // Replace with your actual route
              }
            }}
          >
            {step === 1 ? "Check out" : ""}
            {step === 2 ? "Go to payment" : ""}
            {step === 3 ? "Complete order" : ""}
          </button>
        </div>
      </div>

<div className="px-6 py-2">
     {step > 1 && (
        <button
          onClick={handleBack}
          className="text-sm font-semibold hover:underline flex items-center gap-1 cursor-pointer"
        >
           <BiArrowBack className="text-lg" />
            Back
        </button>
      )}

      {step === 1 && (
        <button
          onClick={() => navigate("/shop")}
          className="text-sm font-semibold hover:underline flex items-center gap-1 cursor-pointer"
        >   <BiArrowBack className="text-lg" />
          Continue Shopping
        </button>
      )}
</div>
     
    </div>
  );
};

export default CheckoutPage;
