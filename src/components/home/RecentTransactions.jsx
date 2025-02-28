import React from "react";
import Card from "../common/Card";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Transfer for Jason",
    amount: "+ $230",
    date: "March 21, 2024",
    type: "income",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 2,
    name: "Payment Figma Pro",
    amount: "- $50",
    date: "March 18, 2024",
    type: "expense",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: 3,
    name: "Payment Apple Music",
    amount: "- $10",
    date: "March 15, 2024",
    type: "expense",
    avatar: "https://i.pravatar.cc/40?img=7",
  },
];

const RecentTransactions = () => {
  return (
    <Card className="flex flex-col gap-4">
      {/* Tiêu đề */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Recent Transactions</h3>
        <button className="text-lime-500 text-sm">Show More</button>
      </div>

      {/* Danh sách giao dịch */}
      <div className="flex flex-col gap-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between">
            {/* Avatar + Tên giao dịch */}
            <div className="flex items-center gap-3">
              <img src={tx.avatar} alt={tx.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{tx.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{tx.date}</p>
              </div>
            </div>

            {/* Số tiền */}
            <div className={`flex items-center gap-2 text-sm font-medium 
              ${tx.type === "income" ? "text-green-500" : "text-red-500"}`}>
              {tx.type === "income" ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
              {tx.amount}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentTransactions;
