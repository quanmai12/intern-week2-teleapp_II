import React from "react";
import { NavLink } from "react-router-dom";
import { Home, BarChart, Wallet } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full px-6 py-3 flex gap-8">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center transition ${
            isActive ? "text-lime-500" : "text-gray-500"
          }`
        }
      >
        <Home  />
      </NavLink>

      <NavLink
        to="/statistics"
        className={({ isActive }) =>
          `flex  items-center transition ${
            isActive ? "text-lime-500" : "text-gray-500"
          }`
        }
      >
        <BarChart />
      </NavLink>

      <NavLink
        to="/topup"
        className={({ isActive }) =>
          `flex  items-center transition ${
            isActive ? "text-lime-500" : "text-gray-500"
          }`
        }
      >
        <Wallet />
      </NavLink>

      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
