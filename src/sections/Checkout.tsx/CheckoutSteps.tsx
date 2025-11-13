import { Check, Circle } from "lucide-react";

const CheckoutSteps = ({ step }: { step: number }) => {
  const steps = ["Cart", "Billing & address", "Payment"];

  return (
    <div className="w-full flex flex-wrap justify-center gap-y-6 px-4 mb-6">
      {steps.map((label, index) => (
        <div key={index} className="flex flex-col items-center w-full sm:w-1/3">
          <div className="flex items-center w-full max-w-xs mx-auto">
            {/* Left Line */}
            {index > 0 && (
              <div className="flex-1 h-0.5 bg-green-500" />
            )}

            {/* Icon */}
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white border border-green-500 text-green-500 shrink-0">
              {step > index + 1 ? (
                <Check className="w-4 h-4" />
              ) : step === index + 1 ? (
                <Circle className="w-2 h-2 fill-green-500 text-green-500" />
              ) : (
                <div className="w-2 h-2 rounded-full bg-gray-300" />
              )}
            </div>

            {/* Right Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-green-500" />
            )}
          </div>

          {/* Step Label */}
          <span
            className={`mt-2 text-sm text-center ${
              step === index + 1
                ? "text-gray-900 font-medium"
                : "text-gray-500"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CheckoutSteps;
