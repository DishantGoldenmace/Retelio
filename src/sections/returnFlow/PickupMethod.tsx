import React, { useEffect, useState } from "react";
import { FaTruck, FaStore, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const today = new Date();
const nextThreeDays = Array.from({ length: 3 }, (_, i) => {
  const date = new Date();
  date.setDate(today.getDate() + i);
  return date.toISOString().split("T")[0];
});

type Props = {
  data: any;
  updateForm: (fields: any) => void;
  setValidator: (fn: () => boolean) => void;
};

const PickupMethod: React.FC<Props> = ({ data, updateForm, setValidator }) => {
  const [method, setMethod] = useState(data.method || "");
  const [pickupDate, setPickupDate] = useState(data.pickupDate || "");
  const [pickupAddress, setPickupAddress] = useState(data.pickupAddress || "123 Street, City");
  const [zip, setZip] = useState(data.zip || "");

  useEffect(() => {
    setValidator(() => {
      if (!method) {
        alert("Please select a return method.");
        return false;
      }

      if (method === "home") {
        if (!pickupDate) {
          alert("Please select a pickup date.");
          return false;
        }
        if (!pickupAddress.trim()) {
          alert("Please enter a valid pickup address.");
          return false;
        }
      }

      if (method === "courier" && !zip.trim()) {
        alert("Please enter a ZIP code.");
        return false;
      }

      updateForm({
        method,
        pickupDate,
        pickupAddress,
        zip,
      });

      return true;
    });
  }, [method, pickupDate, pickupAddress, zip]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">
        Choose the method for returning the product
      </h2>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <div
          onClick={() => setMethod("home")}
          className={`border rounded-lg p-4 cursor-pointer flex items-center gap-4 ${
            method === "home" ? "border-blue-500 bg-blue-50" : ""
          }`}
        >
          <FaTruck className="text-xl" />
          <div>
            <p className="font-medium">Home Pickup – €4.90</p>
            <p className="text-sm text-gray-500">Schedule a pickup at home</p>
          </div>
        </div>

        <div
          onClick={() => setMethod("courier")}
          className={`border rounded-lg p-4 cursor-pointer flex items-center gap-4 ${
            method === "courier" ? "border-blue-500 bg-blue-50" : ""
          }`}
        >
          <FaMapMarkerAlt className="text-xl" />
          <div>
            <p className="font-medium">Courier Drop-off – Free</p>
            <p className="text-sm text-gray-500">
              Drop off at InPost / DHL Locker
            </p>
          </div>
        </div>

        <div
          onClick={() => setMethod("store")}
          className={`border rounded-lg p-4 cursor-pointer flex items-center gap-4 ${
            method === "store" ? "border-blue-500 bg-blue-50" : ""
          }`}
        >
          <FaStore className="text-xl" />
          <div>
            <p className="font-medium">Manual Return to Store – Free</p>
            <p className="text-sm text-gray-500">Return directly to the shop</p>
          </div>
        </div>
      </div>

      {method === "home" && (
        <div className="space-y-4 mb-6">
          <div>
            <label className="font-medium">Select Pickup Date</label>
            <select
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select a day</option>
              {nextThreeDays.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-medium">Pickup Address</label>
            <input
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter address"
            />
          </div>
        </div>
      )}

      {method === "courier" && (
        <div className="mb-6">
          <label className="font-medium">Enter ZIP Code</label>
          <input
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="e.g., 560001"
          />
        </div>
      )}

      {method === "store" && (
        <div className="mb-6 text-sm text-gray-600">
          Shop Address:{" "}
          <span className="font-medium">Plot 22, MG Road, Delhi</span>
        </div>
      )}

      <div className="bg-gray-50 p-4 rounded text-sm text-gray-700 mb-4">
        <strong>Note:</strong> The customer is responsible for covering the
        shipping cost upfront. If the return is approved and falls within the{" "}
        <Link to="/return-shipping" className="text-blue-600 underline">
          Return Policy
        </Link>
        , the shipping cost will be <strong>fully refunded</strong> after
        completion of the return.
      </div>
    </div>
  );
};

export default PickupMethod;
