// components/SuccessModal.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  onClose: () => void;
};

const SuccessModal: React.FC<Props> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose(); // If needed to close modal logic
    navigate("/account"); // Change this path if your dashboard route is different
  };

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm text-center">
        <h2 className="text-xl font-semibold mb-4 text-green-600">Return Submitted!</h2>
        <p className="text-gray-700 mb-4">Your return request has been submitted successfully.</p>
        <button
          onClick={handleClose}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
