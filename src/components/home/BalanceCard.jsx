import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BalanceCard() {
    const navigate = useNavigate();
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 mx-4 mt-4">
            {/* Số dư tài khoản */}
            <div className="text-gray-500 text-sm">Neo Cash Main Balance</div>
            <div className="text-2xl font-bold text-gray-900 mt-1">$1,459.70</div>

            {/* Số điểm thưởng */}
            <div className="flex items-center justify-between mt-2 text-gray-600 text-sm">
                <span>NeoPay Number: **** 5324</span>
                <span>💎 320 Points</span>
            </div>

            {/* Nút chức năng */}
            <div className="flex gap-3 mt-4">
                <button className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-medium py-2 rounded-xl shadow-md hover:bg-green-600 transition">
                    <ArrowUpCircle className="w-5 h-5" />
                    Transfer
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-gray-200 text-gray-800 font-medium py-2 rounded-xl hover:bg-gray-300 transition">
                    <ArrowDownCircle className="w-5 h-5" />
                    Withdraw
                </button>
                <button className="bg-green-500 text-white py-2 px-4 rounded-xl" onClick={() => navigate("/topup")}>
                    Top Up
                </button>;
            </div>
        </div>
    );
}

export default BalanceCard;
