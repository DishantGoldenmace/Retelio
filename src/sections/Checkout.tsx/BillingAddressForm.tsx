import { useState } from "react";

const addressList = [
  {
    id: 1,
    name: "Lucian Obrien",
    phone: "904-966-2836",
    address: "1147 Rohan Drive Suite 819 – Burlington, VT / 82021",
    isDefault: true,
  },
  {
    id: 2,
    name: "Deja Brady",
    phone: "399-757-9909",
    address: "18605 Thompson Circle Apt. 086 – Idaho Falls, WV / 50337",
    isDefault: false,
  },
  
];

export default function BillingAddressForm() {
  const [addresses, setAddresses] = useState(addressList);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);

  // New address form inputs
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newAddress, setNewAddress] = useState("");

  const handleDelete = (id: number) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  const handleAddAddress = () => {
    if (!newName || !newPhone || !newAddress) return;

    const newId = Math.max(...addresses.map((a) => a.id)) + 1;

    // Set all others to non-default
    const updatedAddresses = addresses.map((a) => ({
      ...a,
      isDefault: false,
    }));

    const newEntry = {
      id: newId,
      name: newName,
      phone: newPhone,
      address: newAddress,
      isDefault: true,
    };

    setAddresses([newEntry, ...updatedAddresses]);
    setShowNewAddressForm(false);
    setNewName("");
    setNewPhone("");
    setNewAddress("");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 p-4 rounded-xl shadow bg-white"
          >
            <div className="flex-1">
              <p className="font-semibold text-base">
                {address.name}{" "}
                {address.isDefault && (
                  <span className="text-sm ml-1 text-gray-500">
                    (Home)
                    <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">
                      Default
                    </span>
                  </span>
                )}
              </p>
              <p className="text-sm text-gray-600 mt-1">{address.address}</p>
              <p className="text-sm text-gray-600">{address.phone}</p>
            </div>

            <div className="flex sm:flex-col md:flex-row gap-2 sm:items-end">
              {!address.isDefault && (
                <button
                  className="text-red-500 text-sm cursor-pointer"
                  onClick={() => handleDelete(address.id)}
                >
                  Delete
                </button>
              )}
              <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 cursor-pointer whitespace-nowrap">
                Deliver to this address
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add new address button */}
      <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center mt-8 gap-4">
        <button
          onClick={() => setShowNewAddressForm(true)}
          className="text-sm text-green-600 flex items-center gap-1 font-medium cursor-pointer"
        >
          + New address
        </button>
      </div>

      {/* New address form */}
      {showNewAddressForm && (
        <div className="p-4 border border-gray-200 rounded shadow bg-white mt-4">
          <h3 className="text-lg font-semibold mb-2">New Address</h3>
          <input
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            placeholder="Phone"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            placeholder="Address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={handleAddAddress}
            className="mt-2 text-sm bg-green-500 text-white px-4 py-2 rounded"
          >
            Save Address
          </button>
        </div>
      )}
    </div>
  );
}
