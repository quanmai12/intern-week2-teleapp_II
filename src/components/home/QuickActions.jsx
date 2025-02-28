import { Bitcoin, Wifi, ShoppingBag, Ticket } from "lucide-react";

const actions = [
  { id: 1, name: "Crypto", icon: <Bitcoin className="w-6 h-6 text-gray-700" /> },
  { id: 2, name: "Internet", icon: <Wifi className="w-6 h-6 text-gray-700" /> },
  { id: 3, name: "Shopping", icon: <ShoppingBag className="w-6 h-6 text-gray-700" /> },
  { id: 4, name: "Ticket", icon: <Ticket className="w-6 h-6 text-gray-700" /> },
];

function QuickActions() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mx-4 mt-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {actions.map((action) => (
          <div key={action.id} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full shadow">
              {action.icon}
            </div>
            <span className="text-sm text-gray-700">{action.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;
