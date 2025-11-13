import React, { useEffect, useState } from "react";

type Props = {
  data: any;
  updateForm: (fields: any) => void;
  setValidator: (fn: () => boolean) => void;
};

const PaymentReimbursement: React.FC<Props> = ({
  updateForm,
  setValidator,
}) => {
  const [selectedMethod, setSelectedMethod] = useState("default");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardType, setCardType] = useState("");

  useEffect(() => {
    setValidator(() => {
      if (selectedMethod === "other") {
        if (!cardNumber.trim()) {
          alert("Please enter card number.");
          return false;
        }
        if (!cardName.trim()) {
          alert("Please enter name on card.");
          return false;
        }
        if (!cardType) {
          alert("Please select card type.");
          return false;
        }
      }

      updateForm({
        paymentMethod: selectedMethod,
        cardDetails:
          selectedMethod === "other"
            ? { cardNumber, cardName, cardType }
            : null,
      });

      return true;
    });
  }, [selectedMethod, cardNumber, cardName, cardType]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <div className="mt-6 space-y-4">
        <h3 className="text-base font-semibold">
          Where should we send your refund?
        </h3>

        <div>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="refundMethod"
              value="default"
              checked={selectedMethod === "default"}
              onChange={() => setSelectedMethod("default")}
            />
            Same card ending in 3814
          </label>
        </div>

        <div>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="refundMethod"
              value="other"
              checked={selectedMethod === "other"}
              onChange={() => setSelectedMethod("other")}
            />
            Use a different card
          </label>
        </div>

        {selectedMethod === "other" && (
          <div className="space-y-2 pl-4 mt-2">
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter new card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Name on card"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
            <select
              className="w-full border rounded px-3 py-2"
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
            >
              <option value="">Select card type</option>
              <option value="visa">Visa</option>
              <option value="mastercard">MasterCard</option>
            </select>
          </div>
        )}
      </div>
       {/* MVP Instruction */}
     <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-800 rounded mb-6">
  <strong>Note:</strong> You’ll be charged the return shipping fee upfront.  
  If your return is approved, this amount will be reimbursed according to our return policy.  
  The selected card will be used both for paying the shipping and for the refund.
</div>

    </div>
  );
};

export default PaymentReimbursement;
