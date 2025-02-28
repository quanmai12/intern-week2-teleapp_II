import React, { useState } from "react";
import { CreditCard } from "lucide-react";

const paymentMethods = [
  {
    id: 1,
    name: "Bank Transfer (BND)",
    account: "•••• 5324",
    icon: <CreditCard size={20} className="text-lime-500" />,
  },
  {
    id: 2,
    name: "Credit Card",
    account: "•••• 1234",
    icon: <CreditCard size={20} className="text-blue-500" />,
  },
];

const PaymentMethods = ({ onSelect }) => {
  const [selected, setSelected] = useState(paymentMethods[0].id);

  const handleSelect = (id) => {
    setSelected(id);
    onSelect(paymentMethods.find((method) => method.id === id));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200">Top Up Methods</h3>
      <div className="flex flex-col gap-2">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => handleSelect(method.id)}
            className={`flex items-center justify-between p-3 rounded-lg border transition ${
              selected === method.id
                ? "border-lime-500 bg-lime-100 dark:bg-lime-900"
                : "border-gray-300 dark:border-gray-600"
            }`}
          >
            <div className="flex items-center gap-3">
              {method.icon}
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{method.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{method.account}</p>
              </div>
            </div>
            {selected === method.id && (
              <span className="text-lime-500 font-bold">✔</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
