import React, { useState } from "react";

const amounts = [5, 10, 50, 100, 150, 200, 250];

const AmountSelection = ({ onSelect }) => {
  const [selectedAmount, setSelectedAmount] = useState(200);

  const handleSelect = (amount) => {
    setSelectedAmount(amount);
    onSelect(amount);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200">Top Up Amount</h3>
      
      <div className="grid grid-cols-4 gap-2">
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => handleSelect(amount)}
            className={`p-3 rounded-lg border text-sm font-medium transition ${
              selectedAmount === amount
                ? "border-lime-500 bg-lime-100 dark:bg-lime-900 text-lime-500"
                : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
            }`}
          >
            ${amount}
          </button>
        ))}
      </div>

      <div className="mt-4 text-gray-700 dark:text-gray-200">
        <input
          type="number"
          value={selectedAmount}
          onChange={(e) => handleSelect(Number(e.target.value))}
          className="w-full p-2 border rounded-lg text-center text-lg font-semibold 
                     border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700"
        />
      </div>
    </div>
  );
};

export default AmountSelection;
