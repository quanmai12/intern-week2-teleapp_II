const amounts = [5, 10, 50, 100, 150, 200, 250];

function AmountSelection({ selectedAmount, onSelect }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {amounts.map((amount) => (
        <button
          key={amount}
          className={`px-4 py-2 rounded-xl text-sm font-medium ${
            selectedAmount === amount ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => onSelect(amount)}
        >
          ${amount}
        </button>
      ))}
    </div>
  );
}

export default AmountSelection;
