const CartFooter = ({ items }: { items: any[] }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="border-t pt-4">
      <div className="flex justify-between text-sm mb-4">
        <span>Sub-Total:</span>
        <span className="font-medium">${subtotal.toFixed(2)} USD</span>
      </div>

      <button className="w-full bg-black text-white py-2 rounded mb-2 flex justify-center items-center gap-2">
        Checkout now →
      </button>
      <button className="w-full border py-2 rounded text-black">
        View Cart
      </button>
    </div>
  );
};

export default CartFooter;
