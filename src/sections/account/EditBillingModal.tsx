import React, { useState } from "react";

type Props = {
  initialData: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
  onClose: () => void;
  onSave: (data: Props["initialData"]) => void;
};

const EditBillingModal: React.FC<Props> = ({ initialData, onClose, onSave }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
        <h2 className="text-lg font-semibold mb-4">Edit Billing Address</h2>

        <div className="space-y-3">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full border px-3 py-2 rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Address</label>
            <textarea
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="w-full border px-3 py-2 rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full border px-3 py-2 rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border px-3 py-2 rounded text-sm"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="border px-4 py-2 rounded text-gray-600 border-gray-400 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(formData)}
            className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBillingModal;
