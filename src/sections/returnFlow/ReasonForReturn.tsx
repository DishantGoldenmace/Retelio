import React, { useEffect } from "react";
import { Link } from "react-router-dom";

type Props = {
  data: any;
  updateForm: (fields: any) => void;
  setValidator: (fn: () => boolean) => void;
};

const ReasonForReturn: React.FC<Props> = ({ data, updateForm, setValidator }) => {
  const options = [
    {
      label: "Standard Shipping - $40",
      subLabel: "Send it by tomorrow",
      value: "standard",
    },
    {
      label: "In-store pickup – Free",
      subLabel: "Send it by 10/11/2024",
      value: "pickup",
    },
  ];

  useEffect(() => {
    setValidator(() => {
      if (!data.returnMethod) {
        alert("Please select a return method.");
        return false;
      }
      return true;
    });
  }, [data.returnMethod]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-base font-semibold mb-4">
        Choose the method for returning the product
      </h2>

      <div className="space-y-4">
        {options.map((option, index) => {
          const isSelected = data.returnMethod === option.value;
          return (
            <label
              key={index}
              className={`block border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "border-black bg-white"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  name="returnMethod"
                  className="mt-1"
                  checked={isSelected}
                  onChange={() => updateForm({ returnMethod: option.value })}
                />
                <div>
                  <p className="font-semibold text-sm">{option.label}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    {option.subLabel}
                  </p>
                </div>
              </div>
            </label>
          );
        })}
      </div>

      <div className="rounded-md p-4 text-sm text-gray-700 mt-4">
        <p>
          <strong>Note:</strong> The customer is responsible for covering the
          shipping cost upfront.
          <br />
          If the return is approved and falls within the{" "}
          <Link to="/return-shipping" className="text-blue-600 underline">
            Return Policy
          </Link>
          , the shipping cost will be <strong>fully refunded</strong> after
          completion of the return.
        </p>
      </div>
    </div>
  );
};

export default ReasonForReturn;
