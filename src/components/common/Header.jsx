import { Settings } from "lucide-react";

function Header({ title }) {
  return (
    <div className="flex justify-between items-center px-4 py-3 bg-white shadow-md">
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
        <Settings className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
}

export default Header;
