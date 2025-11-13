import React, { useState } from "react";
import img from "../../assets/product_1.png";

type Props = {
  data: any;
  updateForm: (fields: any) => void;
  setValidator: (fn: () => boolean) => void;
};

const ReviewSubmit: React.FC<Props> = ({ data }) => {
  const [selectedMethod] = useState("default");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-base font-semibold mb-4">
        Review your return request
      </h2>

      <div className="border rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4">
        <img
          src={img}
          alt="Product"
          className="w-12 h-12 rounded object-cover"
        />
        <div className="flex-1">
          <p className="font-medium text-sm">Women Top</p>
        </div>
        <div className="text-right text-sm">
          <p className="text-gray-500">#49463</p>
          <p className="text-gray-500">28/10/2012</p>
        </div>
      </div>

      <div className="text-sm space-y-2">
        <p>
          <span className="text-gray-600">Current state of the product:</span>{" "}
          <span className="font-semibold">
            {data.condition ? getConditionText(data.condition) : "-"}
          </span>
        </p>
        <p>
          <span className="text-gray-600">
            Main reason for returning the product:
          </span>{" "}
          <span className="font-semibold">
            {data.reasons?.[0] ? getReasonText(data.reasons[0]) : "-"}
          </span>
        </p>
        <p>
          <span className="text-gray-600">Pickup method:</span>{" "}
          <span className="font-semibold">{data.method || "-"}</span>
        </p>
        <p>
          <span className="text-gray-600">Refund method:</span>{" "}
          <span className="font-semibold">
            {selectedMethod === "default"
              ? "Same card ending with 3814"
              : "New card"}
          </span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-end items-center mt-6 gap-2">
        <button
          onClick={() => window.print()}
          className="btn btn-outline border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100"
        >
          Print Return Label
        </button>
      </div>
    </div>
  );
};

// Helpers to map values to labels
function getConditionText(value: string) {
  const map: any = {
    sealed: "I would like to return a sealed product.",
    wrong: "I want to return an item ordered by mistake.",
    damaged: "The product is defective or damaged.",
    unsealed: "I wish to return an unsealed but functional product.",
    receivedWrong: "Received the wrong product.",
  };
  return map[value] || value;
}

function getReasonText(value: string) {
  const map: any = {
    unsatisfactory: "The product quality is unsatisfactory.",
    nonFunctional: "I need to return a non-functional, unsealed product.",
    changedMind: "I changed my mind or the product was not as expected.",
    misleading: "The product information was misleading.",
    notDelivered: "The product was not delivered.",
  };
  return map[value] || value;
}

export default ReviewSubmit;
