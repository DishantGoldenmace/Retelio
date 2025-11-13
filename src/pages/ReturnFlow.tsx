import { useRef, useState } from "react";
import YourDetails from "../sections/returnFlow/YourDetails";
import PickupMethod from "../sections/returnFlow/PickupMethod";
import PaymentReimbursement from "../sections/returnFlow/PaymentReimbursement";
import ReviewSubmit from "../sections/returnFlow/ReviewSubmit";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";
import SuccessModal from "../sections/returnFlow/SuccessModal";

const steps = [
  YourDetails,
  // ReasonForReturn,
  PickupMethod,
  PaymentReimbursement,
  ReviewSubmit,
];

const stepLabels = [
  "Your details",
  // "Reason for Return",
  "Pickup Method",
  "Payment Reimbursement",
  "Review & Submit",
];

export default function ReturnFlow() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  
  const validators = useRef<{ [key: number]: () => boolean }>({});
  const StepComponent = steps[step];

  const setValidator = (fn: () => boolean) => {
    validators.current[step] = fn;
  };

  const next = () => {
    const isValid = validators.current[step]?.();
    if (isValid) {
      setStep((s) => Math.min(s + 1, steps.length - 1));
    }
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const updateForm = (data: object) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="max-w-3xl mx-auto p-4 py-8 2xl:pt-14">
      <h1 className="text-2xl font-bold mb-6">Return my order(s)</h1>

      {/* Stepper */}
      <div className="flex items-center justify-between mb-8">
        {stepLabels.map((label, index) => (
          <div key={index} className="flex-1 flex flex-col items-center relative">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                index <= step
                  ? "bg-black text-white border-black"
                  : "border-gray-300 text-gray-400"
              }`}
            >
              {index + 1}
            </div>
            <p
              className={`text-xs mt-2 text-center ${
                index <= step ? "text-black" : "text-gray-400"
              }`}
            >
              {label}
            </p>
            {index < stepLabels.length - 1 && (
              <div className="absolute top-4 right-[-50%] w-full h-0.5 bg-gray-300 z-[-1]">
                <div
                  className={`h-0.5 transition-all duration-300 ${
                    index < step ? "bg-black w-full" : "bg-gray-300 w-0"
                  }`}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <StepComponent
        data={formData}
        updateForm={updateForm}
        setValidator={setValidator}
      />

      <div className="flex justify-center gap-4 items-center mt-8 px-4">
        {step > 0 ? (
          <button
            onClick={back}
            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-5 py-3 rounded-lg transition cursor-pointer"
          >
            <FaArrowLeft />
            Previous
          </button>
        ) : (
          <div />
        )}

        {step < steps.length - 1 ? (
          <button
            onClick={next}
            className="flex items-center gap-2 bg-black text-white font-medium px-6 py-3 rounded-lg transition cursor-pointer"
          >
            Next
            <FaArrowRight />
          </button>
        ) : (
          <button
            onClick={() => setShowSuccessModal(true)}
            type="submit"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition cursor-pointer"
          >
            <FaCheck />
            Submit
          </button>
        )}
      </div>

      {showSuccessModal && (
        <SuccessModal
          onClose={() => {
            setShowSuccessModal(false);
          }}
        />
      )}
    </div>
  );
}
