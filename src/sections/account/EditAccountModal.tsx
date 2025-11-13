import React, { useState } from "react";

type Props = {
  initialData: {
    name: string;
    location: string;
    email: string;
    secEmail: string;
    phone: string;
  };
  onClose: () => void;
  onSave: (updatedData: Props["initialData"]) => void;
};

const EditAccountModal: React.FC<Props> = ({ initialData, onClose, onSave }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
        <h2 className="text-lg font-semibold mb-4">Edit Account Info</h2>

        <div className="space-y-3">
          {["name", "location", "email", "secEmail", "phone"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
              <input
                value={(formData as any)[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                className="w-full border px-3 py-2 rounded text-sm"
              />
            </div>
          ))}
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

export default EditAccountModal;
