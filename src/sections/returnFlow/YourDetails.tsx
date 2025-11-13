import React, { useEffect, useState } from "react";

type Props = {
  data: any;
  updateForm: (fields: any) => void;
  setValidator: (fn: () => boolean) => void;
};

const YourDetails: React.FC<Props> = ({ data, updateForm, setValidator }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [explanation, setExplanation] = useState(data.explanation || "");
  const [selectedCondition, setSelectedCondition] = useState(data.condition || "");
  const [selectedReason, setSelectedReason] = useState<string>(data.reasons?.[0] || "");


  // Register validator every render (ensures always fresh state)
  useEffect(() => {
    setValidator(() => {
      if (!selectedCondition) {
        alert("Please select the product condition.");
        return false;
      }
      if (selectedReason.length === 0) {
        alert("Please select at least one reason for return.");
        return false;
      }

      updateForm({
        condition: selectedCondition,
        reasons: selectedReason,
        explanation,
        files,
      });

      return true;
    });
  }, [selectedCondition, selectedReason, explanation, files]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    const newFiles = Array.from(selectedFiles).slice(0, 5 - files.length);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">
        Select the reason for your return
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product condition (radio) */}
        <div>
          <h3 className="font-semibold mb-3">
            What is the product's current condition?
          </h3>
          {[
            "I would like to return a sealed product.",
            "I want to return an item ordered by mistake.",
            "The product is defective or damaged.",
            "I wish to return an unsealed but functional product.",
            "Received the wrong product.",
          ].map((option, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="radio"
                id={`condition-${index}`}
                name="productCondition"
                className="mr-2"
                value={option}
                checked={selectedCondition === option}
                onChange={(e) => setSelectedCondition(e.target.value)}
              />
              <label htmlFor={`condition-${index}`} className="text-sm">
                {option}
              </label>
            </div>
          ))}
        </div>

        {/* Return reasons (checkbox) */}
        <div>
          <h3 className="font-semibold mb-3">
            What is the primary reason for returning the product?
          </h3>
          {[
            "The product quality is unsatisfactory.",
            "I need to return a non-functional, unsealed product.",
            "I changed my mind or the product was not as expected.",
            "The product information was misleading.",
            "The product was not delivered.",
          ].map((option, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="radio"
                id={`reason-${index}`}
                name="returnReason"
                className="mr-2"
                value={option}
                checked={selectedReason===option}
                 onChange={() => setSelectedReason(option)}
              />
              <label htmlFor={`reason-${index}`} className="text-sm">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* File Upload Section */}
      <div className="mt-6 space-y-4">
        <p className="text-sm text-gray-600">
          Upload any supporting <strong>images or videos</strong> (Max 5).
        </p>
        <input
          type="file"
          id="fileUpload"
          accept="image/*,video/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        <label
          htmlFor="fileUpload"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white text-sm cursor-pointer transition"
        >
          Upload Files
        </label>

        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm border p-2 rounded"
          >
            <span className="truncate w-3/4">{file.name}</span>
            <button
              className="text-red-500 text-xs"
              onClick={() => handleRemoveFile(index)}
            >
              Remove
            </button>
          </div>
        ))}

        {/* Explanation Textarea */}
        <div>
          <label
            htmlFor="explanation"
            className="text-sm font-medium block mb-1"
          >
            Brief explanation (max 500 characters)
          </label>
          <textarea
            id="explanation"
            maxLength={500}
            rows={4}
            placeholder="Describe the issue..."
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            className="w-full p-2 border rounded resize-none text-sm"
          />
          <p className="text-xs text-gray-500 text-right">
            {explanation.length}/500
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourDetails;
