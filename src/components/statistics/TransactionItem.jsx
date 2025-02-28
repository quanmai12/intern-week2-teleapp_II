import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";

const TransactionItem = ({ transaction }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-2">
      <div className="flex items-center gap-3">
        {transaction.type === "income" ? (
          <ArrowUpCircle className="text-lime-500" size={24} />
        ) : (
          <ArrowDownCircle className="text-red-500" size={24} />
        )}
        <div>
          <p className="text-gray-800 dark:text-gray-200 font-medium">{transaction.name}</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{transaction.date}</p>
        </div>
      </div>
      <p
        className={`font-semibold ${
          transaction.type === "income" ? "text-lime-500" : "text-red-500"
        }`}
      >
        {transaction.type === "income" ? "+" : "-"}${transaction.amount}
      </p>
    </div>
  );
};

export default TransactionItem;
