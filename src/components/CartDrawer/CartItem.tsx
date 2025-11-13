const CartItem = ({ item }: { item: any }) => {
  return (
    <div className="flex items-start gap-4">
      <img src={item.image} alt={item.title} className="w-16 h-16 rounded object-cover" />
      <div className="flex-1">
        <p className="font-medium text-sm">{item.title}</p>
        <p className="text-sm text-gray-500">{item.quantity} × <span className="text-green-600">${item.price}</span></p>
      </div>
      <button className="text-gray-400 hover:text-red-500">×</button>
    </div>
  );
};
export default CartItem;
