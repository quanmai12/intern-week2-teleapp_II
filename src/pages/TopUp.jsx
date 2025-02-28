import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PaymentMethod from "../components/topup/PaymentMethods";
import AmountSelection from "../components/topup/AmountSelection";
function TopUp() {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState(200);
  const [selectedMethod, setSelectedMethod] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 bg-gray-200 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold">Top Up Neopay</h2>
      </div>

      {/* Phương thức nạp tiền */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-2">Top Up Methods</h3>
        <PaymentMethod selected={selectedMethod} onSelect={() => setSelectedMethod(!selectedMethod)} />
      </div>

      {/* Chọn số tiền */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-2">Top Up Amount</h3>
        <AmountSelection selectedAmount={selectedAmount} onSelect={setSelectedAmount} />
      </div>

      {/* Nút nạp tiền */}
      <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl text-lg font-medium">
        Top Up
      </button>

      {/* Chi tiết tổng */}
      <div className="mt-6 p-4 bg-white rounded-xl shadow-md">
        <h3 className="text-sm font-semibold mb-2">Detail Top Up</h3>
        <div className="flex justify-between text-sm">
          <span>Bank Transfer (BND)</span>
          <span>${selectedAmount}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Tax</span>
          <span>$1.00</span>
        </div>
        <div className="flex justify-between font-semibold text-gray-900 mt-2">
          <span>Total</span>
          <span>${selectedAmount + 1}</span>
        </div>
      </div>
    </div>
  );
}

export default TopUp;
