import { useState } from "react";
import {
 
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
} from "react-icons/fa";
import product_1 from "../assets/product_2.png";
import product_2 from "../assets/product_3.png";
import product_3 from "../assets/product_5.png";

type ReturnStatus = "Completed" | "Processing" | "Rejected";

interface ReturnItem {
  id: string;
  productName: string;
  image: string;
  returnDate: string;
  orderId: string;
  reason: string;
  refundMethod?: string;
  rejectionReason?: string;
  refundAmount: number;
  status: ReturnStatus;
  progress?: number; // for processing
  estimatedCompletion?: string;
  note?: string; // for rejected or completed
}

const mockReturns: ReturnItem[] = [
  {
    id: "RET-2024-001",
    productName: "Woolen Cap",
    image: product_1,
    returnDate: "Dec 15, 2024",
    orderId: "ORD-2024-196",
    reason: "Defective product",
    refundMethod: "Original payment method",
    refundAmount: 299.99,
    status: "Completed",
    note: "Refund processed on Dec 20, 2024",
  },
  {
    id: "RET-2024-002",
    productName: "Sweaters With Jeans",
    image: product_2,
    returnDate: "Jan 8, 2025",
    orderId: "ORD-2024-198",
    reason: "Changed mind",
    refundMethod: "Store credit",
    refundAmount: 1199.99,
    status: "Processing",
    progress: 60,
    estimatedCompletion: "Jan 15, 2025",
    note: "Package received at warehouse",
  },
  {
    id: "RET-2024-003",
    productName: "Nike Air Max 270",
    image: product_3,
    returnDate: "Jan 5, 2025",
    orderId: "ORD-2024-203",
    reason: "Wrong size",
    rejectionReason: "Item worn/damaged",
    refundAmount: 150.0,
    status: "Rejected",
    note: "The item shows signs of wear and does not meet our return policy requirements.",
  },
];

const ReturnRefund = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Show 2 items per page

  const totalReturns = mockReturns.length;
  const completed = mockReturns.filter(
    (item) => item.status === "Completed"
  ).length;
  const processing = mockReturns.filter(
    (item) => item.status === "Processing"
  ).length;
  const refundAmount = mockReturns.reduce(
    (sum, item) => sum + item.refundAmount,
    0
  );

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentReturns = mockReturns.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(mockReturns.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-2">My Returns</h1>
      <p className="text-gray-600 mb-6">
        Track and manage your product returns
      </p>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <SummaryCard label="Total Returns" value={totalReturns} />
        <SummaryCard label="Processing" value={processing} color="orange" />
        <SummaryCard label="Completed" value={completed} color="green" />
        <SummaryCard
          label="Refund Amount"
          value={`$${refundAmount.toFixed(2)}`}
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        <select className="border border-gray-200 rounded px-3 py-2">
          <option>All Returns</option>
          <option>Completed</option>
          <option>Processing</option>
          <option>Rejected</option>
        </select>
        <select className="border border-gray-200 rounded px-3 py-2">
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
        <input
          type="text"
          placeholder="Search returns..."
          className="border border-gray-200 rounded px-3 py-2 flex-1"
        />
      </div>

      {/* Return Items */}
      {currentReturns.map((item) => (
        <ReturnCard key={item.id} item={item} />
      ))}

      {/* Pagination */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border rounded ${
              currentPage === index + 1
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};


const SummaryCard = ({
  label,
  value,
  color = "gray",
}: {
  label: string;
  value: number | string;
  color?: string;
}) => {
  const colorMap: Record<string, string> = {
    green: "bg-green-100 text-green-700",
    orange: "bg-orange-100 text-orange-700",
    gray: "bg-gray-100 text-gray-700",
  };
  return (
    <div className={`p-4 rounded-md shadow-sm ${colorMap[color]}`}>
      <p className="text-sm">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

const ReturnCard = ({ item }: { item: ReturnItem }) => {
  const statusIcon = {
    Completed: <FaCheckCircle className="text-green-600" />,
    Processing: <FaClock className="text-orange-500" />,
    Rejected: <FaTimesCircle className="text-red-500" />,
  };

  return (
    <div className=" border border-gray-200 rounded-lg p-4 mb-4 shadow-sm bg-white">
      <div className="flex items-start gap-4">
        <img
          src={item.image}
          alt={item.productName}
          className="w-20 h-20 object-cover rounded"
        />
        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="font-semibold">{item.productName}</h3>
            <div className="flex items-center gap-1">
              {statusIcon[item.status]}{" "}
              <span
                className={`text-sm font-medium ${
                  item.status === "Completed"
                    ? "text-green-600"
                    : item.status === "Processing"
                    ? "text-orange-500"
                    : "text-red-500"
                }`}
              >
                {item.status}
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Return ID: {item.id} | Order: {item.orderId}
          </p>
          <p className="text-sm text-gray-500">
            Return Date: {item.returnDate}
          </p>
          <p className="text-sm text-gray-500">Reason: {item.reason}</p>

          {item.status === "Rejected" && item.rejectionReason && (
            <p className="text-sm text-red-600 mt-2">
              <strong>Rejection Reason:</strong> {item.rejectionReason}
            </p>
          )}

          {item.refundMethod && (
            <p className="text-sm text-gray-500">
              Refund Method: {item.refundMethod}
            </p>
          )}

          <p className="text-md font-bold mt-2">
            ${item.refundAmount.toFixed(2)}
          </p>

          {/* Progress bar for processing */}
          {item.status === "Processing" && (
            <div className="mt-2">
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-orange-500 h-2"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Estimated completion: {item.estimatedCompletion}
              </p>
            </div>
          )}

          {/* Notes */}
          {item.note && (
            <p
              className={`mt-3 text-sm ${
                item.status === "Rejected" ? "text-red-500" : "text-gray-500"
              }`}
            >
              {item.note}
            </p>
          )}

          {/* Actions */}
          {/* <div className="flex gap-4 mt-4 text-sm">
            <button className="flex items-center gap-1 text-green-600 hover:underline">
              <FaEye /> View Details
            </button>
            <button className="flex items-center gap-1 text-blue-600 hover:underline">
              <FaDownload /> Download Receipt
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ReturnRefund;
