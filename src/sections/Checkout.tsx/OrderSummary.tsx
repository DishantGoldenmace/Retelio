const OrderSummary = ({ step }: { step: number }) => {
  if (step === 1) {
    return (
      <div className=" p-4 rounded shadow">
        <h2 className="font-bold mb-4">Order summary</h2>
        {/* Cart total, discounts */}
        <div className="text-sm space-y-2 w-full max-w-xs">
          <div className="flex justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span className="text-gray-900 font-medium">$5.79</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Discount</span>
            <span className="text-gray-900">-</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Shipping</span>
            <span className="text-gray-900">-</span>
          </div>
          <hr className="border-dashed" />
          <div className="flex justify-between text-base font-semibold">
            <span>Total</span>
            <span className="text-orange-600">$62.02</span>
          </div>
          <p className="text-xs text-gray-400 text-right">
            (VAT included if applicable)
          </p>
        </div>

        <input
          placeholder="Discount code / Gifts "
          className="border border-gray-300 rounded-md p-2 w-full mt-4"
        />
        <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
          Apply
        </button>
      </div>
    );
  } else if (step === 2) {
    return (
      <div className=" p-4 rounded shadow">
        <h2 className="font-bold mb-4">Order summary</h2>
        {/* Cart total, discounts */}
        <div className="text-sm space-y-2 w-full max-w-xs">
          <div className="flex justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span className="text-gray-900 font-medium">$5.79</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Discount</span>
            <span className="text-gray-900">-</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Shipping</span>
            <span className="text-gray-900">-</span>
          </div>
          <hr className="border-dashed" />
          <div className="flex justify-between text-base font-semibold">
            <span>Total</span>
            <span className="text-orange-600">$62.02</span>
          </div>
          <p className="text-xs text-gray-400 text-right">
            (VAT included if applicable)
          </p>
        </div>

        <input
          placeholder="Discount code / Gifts "
          className="border border-gray-300 rounded-md p-2 w-full mt-4"
        />
        <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
          Apply
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <div className=" p-4 rounded shadow mb-4 space-y-2">
          <h2 className="font-bold mb-4">Address</h2>
          {/* Payment info */}
          <p className="text-sm">Manuel Cooper <span className="text-gray-400"> (Home)</span></p>
          <p className="text-sm text-gray-500">1147 Rohan Drive Suite 819 - Burlington, VT / 82021</p>
          <p className="text-sm text-gray-500">904-966-2836</p>

        </div>

        <div className=" p-4 rounded shadow">
          <h2 className="font-bold mb-4">Order summary</h2>
          {/* Cart total, discounts */}
          <div className="text-sm space-y-2 w-full max-w-xs">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-gray-900 font-medium">$5.79</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Discount</span>
              <span className="text-gray-900">-</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span className="text-gray-900">-</span>
            </div>
            <hr className="border-dashed" />
            <div className="flex justify-between text-base font-semibold">
              <span>Total</span>
              <span className="text-orange-600">$62.02</span>
            </div>
            <p className="text-xs text-gray-400 text-right">
              (VAT included if applicable)
            </p>
          </div>
        </div>
      </div>
    );
  }
};
export default OrderSummary;
