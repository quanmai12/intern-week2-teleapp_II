import React from "react";
import { Bitcoin, Globe, ShoppingBag, Ticket, MoreHorizontal } from "lucide-react";

const actions = [
  { icon: Bitcoin, label: "Crypto" },
  { icon: Globe, label: "Internet" },
  { icon: ShoppingBag, label: "Shopping" },
  { icon: Ticket, label: "Ticket" },
  { icon: MoreHorizontal, label: "Other" },
];

const QuickActions = () => {
  return (
    <div className="flex justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl">
      {actions.map((action, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <action.icon className="text-lime-500 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md" size={32} />
          <p className="text-xs text-gray-600 dark:text-gray-300">{action.label}</p>
        </div>
      ))}
    </div>
  );
};

export default QuickActions;
