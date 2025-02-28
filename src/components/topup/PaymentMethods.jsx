import { Landmark } from "lucide-react";

function PaymentMethod({ selected, onSelect }) {
  return (
    <div
      className={`flex items-center p-3 rounded-xl border cursor-pointer ${selected ? "border-green-500 bg-green-50" : "border-gray-300"}`}
      onClick={onSelect}
    >
      <div className="p-2 bg-purple-100 rounded-full">
      <Landmark className="w-5 h-5 text-purple-600" />
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">Bank Transfer (BND)</p>
        <p className="text-xs text-gray-500">**** 5324</p>
      </div>
    </div>
  );
}

export default PaymentMethod;
