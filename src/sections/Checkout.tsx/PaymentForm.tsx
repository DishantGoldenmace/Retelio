import { useState } from "react";
import { ChevronDown } from "lucide-react";
import paypal from "../../assets/paypal.png";
import visa_1 from "../../assets/visa_1.png";
import visa_2 from "../../assets/visa_2.png";
import cashon from "../../assets/cash0n.png";

export default function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [showModal, setShowModal] = useState(false);
  const [savedCards, setSavedCards] = useState<string[]>([
    "**** **** **** 6789",
  ]);

  const [newCard, setNewCard] = useState("");

  const handleAddCard = () => {
    if (newCard.trim() !== "") {
      setSavedCards((prev) => [...prev, `**** **** **** ${newCard.slice(-4)}`]);
      setNewCard("");
      setShowModal(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">Payment</h2>

      <div className="space-y-4 shadow p-4 sm:p-6 rounded-xl bg-white">
        {/* Paypal */}
        <div
          className={`p-4 rounded-xl border ${
            selectedMethod === "paypal"
              ? "border-black border-2"
              : "border-gray-200"
          } cursor-pointer`}
          onClick={() => setSelectedMethod("paypal")}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="font-medium">Pay with Paypal</p>
              <p className="text-sm text-gray-500">
                You will be redirected to PayPal website to complete your
                purchase securely.
              </p>
            </div>
            <img src={paypal} alt="PayPal" className="h-6 w-8 md:w-auto " />
          </div>
        </div>

        {/* Credit / Debit Card */}
        <div
          className={`p-4 rounded-xl border ${
            selectedMethod === "card"
              ? "border-black border-2"
              : "border-gray-200"
          } cursor-pointer`}
          onClick={() => setSelectedMethod("card")}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
            <div>
              <p className="font-medium">Credit / Debit card</p>
              <p className="text-sm text-gray-500">
                We support Mastercard, Visa, Discover and Stripe.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={visa_1} alt="Mastercard" className="h-5 w-auto" />
              <img src={visa_2} alt="Visa" className="h-5 w-auto" />
            </div>
          </div>

          {/* Render saved cards */}
          {savedCards.map((card, index) => (
            <div
              key={index}
              className="relative mt-2"
              onClick={() => setSelectedMethod("card")}
            >
              <input
                readOnly
                value={card}
                className="w-full p-3 rounded-md border border-gray-200 text-sm text-gray-700 pr-10"
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          ))}

          {/* Add new card button */}
          <div className="mt-2">
            <button
              onClick={() => setShowModal(true)}
              className="text-green-600 text-sm font-medium flex items-center gap-1"
            >
              + Add new card
            </button>
          </div>
        </div>

        {/* Cash on delivery */}
        <div
          className={`p-4 rounded-xl border ${
            selectedMethod === "cod"
              ? "border-black border-2"
              : "border-gray-200"
          } cursor-pointer`}
          onClick={() => setSelectedMethod("cod")}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="font-medium">Cash on delivery</p>
              <p className="text-sm text-gray-500">
                Pay with cash when your order is delivered.
              </p>
            </div>
            <img src={cashon} alt="COD" className="h-4 w-8 md:w-auto" />
          </div>
        </div>
      </div>

      {/* Add card modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h3 className="text-lg font-semibold mb-4">Add New Card</h3>
            <input
              value={newCard}
              onChange={(e) => setNewCard(e.target.value)}
              placeholder="Enter Card Number"
              className="w-full border p-2 rounded mb-4"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-600 px-4 py-2"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCard}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
