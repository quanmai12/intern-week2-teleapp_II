import TransactionItem from "./TransactionItem";

const transactions = [
  { id: 1, name: "Freelance Payment", amount: 1200, type: "income", date: "Feb 25, 2025" },
  { id: 2, name: "Grocery Shopping", amount: 150, type: "expense", date: "Feb 24, 2025" },
  { id: 3, name: "Electricity Bill", amount: 90, type: "expense", date: "Feb 23, 2025" },
  { id: 4, name: "Stock Investment", amount: 500, type: "income", date: "Feb 22, 2025" },
];

const TransactionList = () => {
  return (
    <div className="w-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md mt-6 ">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">📜 Recent Transactions</h2>
      <button className="text-lime-500 text-sm">View All</button>

      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionList;
