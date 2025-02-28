import React from "react";
import { Bell, Settings } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
      <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200">Neopay</h1>
      <div className="flex space-x-3">
        <Bell className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        <Settings className="w-6 h-6 text-gray-700 dark:text-gray-200" />
      </div>
    </div>
  );
};

export default Header;
