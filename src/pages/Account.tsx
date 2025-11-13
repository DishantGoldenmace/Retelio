import { useState } from "react";
import { MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EditAccountModal from "../sections/account/EditAccountModal";
import EditBillingModal from "../sections/account/EditBillingModal";

const Account = () => {
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);
  const [billingName, setBillingName] = useState("Kevin Gilbert");
  const [billingPhone, setBillingPhone] = useState("+1-202-555-0118");
  const [billingEmail, setBillingEmail] = useState("kevin.gilbert@gmail.com");
  const [billingAddress, setBillingAddress] = useState(
    "East Tejturi Bazar, Road No. 04, Flat No. 5D, Dhaka - 1200, Bangladesh"
  );
  const [name, setName] = useState("Kevin Gilbert");
  const [location, setLocation] = useState("Dhaka - 1207, Bangladesh");
  const [email, setEmail] = useState("kevin.gilbert@gmail.com");
  const [secEmail, setSecEmail] = useState("kevin12345@gmail.com");
  const [phone, setPhone] = useState("+1-202-555-0118");
  const [cardMenuOpen, setCardMenuOpen] = useState<number | null>(null);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardBrand, setCardBrand] = useState("Visa");
  const [cards, setCards] = useState([
    {
      amount: "$95,400.00 USD",
      number: "**** **** **** 3814",
      brand: "VISA",
      name: "Kevin Gilbert",
      bgColor: "bg-gradient-to-r from-[#1B6392] to-[#124261]",
    },
    {
      amount: "$87,583.00 USD",
      number: "**** **** **** 1761",
      brand: "MasterCard",
      name: "Kevin Gilbert",
      bgColor: "bg-gradient-to-r from-[#248E1D] to-[#2DB224]",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
   const [showAddressModal, setShowAddressModal] = useState(false);

  const handleSave = (updated: any) => {
    setName(updated.name);
    setLocation(updated.location);
    setEmail(updated.email);
    setSecEmail(updated.secEmail);
    setPhone(updated.phone);
    setShowModal(false);
    
  };


  const handleSave1 = (data: any) => {
    setBillingName(data.name);
    setBillingAddress(data.address);
    setBillingPhone(data.phone);
    setBillingEmail(data.email);
    setShowAddressModal(false);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/order-history");
  };
  const handleClick1 = () => {
    navigate("/profile-setting");
  };
  const handleClickOrder = () => {
    navigate("/order-history");
  };

  // const cards = [
  //   {
  //     amount: "$95, 400.00 USD",
  //     number: "**** **** **** 3814",
  //     brand: "VISA",
  //     name: "Kevin Gilbert",
  //     bgColor: "bg-gradient-to-r from-[#1B6392] to-[#124261]",
  //   },
  //   {
  //     amount: "$87, 583.00 USD",
  //     number: "**** **** **** 1761",
  //     brand: "MasterCard",
  //     name: "Kevin Gilbert",
  //     bgColor: "bg-gradient-to-r from-[#248E1D] to-[#2DB224]",
  //   },
  // ];

  return (
    <div className="px-2 py-4 space-y-6 mt-10 ">
      <div>
        <h1 className="text-xl font-bold">Hello, Kevin</h1>
        <p className="text-sm text-gray-600 w-2/3">
          From your account dashboard, you can easily check & view your
          <span onClick={handleClick} className="text-green-600 cursor-pointer">
            {" "}
            Recent Orders
          </span>
          , manage your{" "}
          <span
            onClick={() => {
              // Scroll to the billing address section
              document
                .getElementById("billing-address")
                ?.scrollIntoView({ behavior: "smooth" });

              // Enable editing
              setShowAddressModal(true);
            }}
            className="text-green-600 cursor-pointer"
          >
            Shipping and Billing Addresses
          </span>
          and edit your
          <span
            onClick={handleClick1}
            className="text-green-600 cursor-pointer"
          >
            {" "}
            Password and Account Details
          </span>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="border border-gray-300 rounded p-4">
          <h2 className="font-semibold mb-2">Account Info</h2>
          <div className="flex items-center space-x-4 mb-2">
            <img
              src="https://i.pravatar.cc/100"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-gray-600">{location}</p>
            </div>
          </div>

          <p className="text-sm mb-1">
            Email: <span className="text-gray-500">{email}</span>
          </p>
          <p className="text-sm mb-1">
            Sec Email: <span className="text-gray-500">{secEmail}</span>
          </p>
          <p className="text-sm mb-3">
            Phone: <span className="text-gray-500">{phone}</span>
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="border px-4 py-1 rounded text-green-600 border-green-600 text-sm font-medium"
          >
            EDIT ACCOUNT
          </button>

          {showModal && (
            <EditAccountModal
              initialData={{ name, location, email, secEmail, phone }}
              onClose={() => setShowModal(false)}
              onSave={handleSave}
            />
          )}
        </div>

       <div id="billing-address" className="border border-gray-300 rounded p-4">
        <h2 className="font-semibold mb-2">Billing address</h2>
        <p className="text-sm font-medium">{billingName}</p>
        <p className="text-sm text-gray-500 mb-1">{billingAddress}</p>
        <p className="text-sm mb-1">
          Phone: <span className="text-gray-500">{billingPhone}</span>
        </p>
        <p className="text-sm mb-3">
          Email: <span className="text-gray-500">{billingEmail}</span>
        </p>
        <button
          onClick={() => setShowAddressModal(true)}
          className="border px-4 py-1 rounded text-green-600 border-green-600 text-sm font-medium"
        >
          EDIT ADDRESS
        </button>
      </div>

      {showAddressModal && (
        <EditBillingModal
          initialData={{
            name: billingName,
            address: billingAddress,
            phone: billingPhone,
            email: billingEmail,
          }}
          onClose={() => setShowAddressModal(false)}
          onSave={handleSave1}
        />
      )}

        <div className="flex flex-col gap-4">
          <div
            onClick={handleClickOrder}
            className="bg-[#EAF6FE]  p-4 cursor-pointer rounded"
          >
            <p className="text-2xl font-bold text-black">154</p>
            <p className="text-sm text-gray-600">Total Orders</p>
          </div>
          <div
            onClick={handleClickOrder}
            className="bg-[#FFF3EB]  p-4 cursor-pointer rounded"
          >
            <p className="text-2xl font-bold text-black">05</p>
            <p className="text-sm text-gray-600">Pending Orders</p>
          </div>
          <div
            onClick={handleClickOrder}
            className="bg-[#EAF7E9]  p-4 cursor-pointer rounded"
          >
            <p className="text-2xl font-bold text-black">149</p>
            <p className="text-sm text-gray-600">Completed Orders</p>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 rounded p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Payment Option</h2>
          <button
            onClick={() => setIsAddCardModalOpen(true)}
            className="text-green-600 font-medium flex items-center space-x-1"
          >
            <span>Add Card</span>
            <span>&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative text-white p-4 rounded ${card.bgColor}`}
            >
              <div className="flex justify-between">
                <p className="text-lg font-semibold">{card.amount}</p>
                <div className="relative">
                  <button
                    onClick={() =>
                      setCardMenuOpen(cardMenuOpen === index ? null : index)
                    }
                  >
                    <MoreVertical className="text-white" size={18} />
                  </button>
                  {cardMenuOpen === index && (
                    <div className="absolute top-6 right-0 bg-white text-black shadow-md rounded text-sm z-10 w-40">
                      <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                        Set as Default
                      </button>
                      <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                        Edit Card
                      </button>
                      <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                        Remove Card
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <p className="mt-6">CARD NUMBER</p>
              <p className="font-mono text-lg tracking-widest">{card.number}</p>
              <div className="flex justify-between items-center mt-4">
                <p>{card.brand}</p>
                <p>{card.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isAddCardModalOpen && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4">Add New Card</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newCard = {
                  amount: "₹0.00",
                  number: cardNumber,
                  name: cardName,
                  brand: cardBrand,
                  bgColor:
                    cardBrand === "Visa"
                      ? "bg-gradient-to-r from-[#1B6392] to-[#124261]"
                      : "bg-gradient-to-r from-[#248E1D] to-[#2DB224]",
                };
                setCards([...cards, newCard]);
                setIsAddCardModalOpen(false);
                // Clear inputs
                setCardNumber("");
                setCardName("");
                setCardBrand("Visa");
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
              />
              <input
                type="text"
                placeholder="Name on Card"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
              />
              <select
                value={cardBrand}
                onChange={(e) => setCardBrand(e.target.value)}
                className="w-full border rounded px-3 py-2"
              >
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
              </select>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddCardModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Add Card
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
