import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { Link } from "react-router-dom";

const transactions = [
    { id: 1, name: "Transfer for Jason", amount: "+$230", date: "March 8, 2024", type: "income", avatar: "https://i.pravatar.cc/40?img=3" },
    { id: 2, name: "Payment Figma Pro", amount: "-$50", date: "March 7, 2024", type: "expense", avatar: "https://i.pravatar.cc/40?img=5" },
    { id: 3, name: "Payment Apple Music", amount: "-$10", date: "March 5, 2024", type: "expense", avatar: "https://i.pravatar.cc/40?img=8" },
];

function RecentTransactions() {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 mx-4 mt-4">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
                <button className="text-green-600 text-sm font-medium">
                    <Link to="/statistics">Show More</Link>
                </button>
            </div>

            {/* Danh sách giao dịch */}
            <div className="space-y-3">
                {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between">
                        {/* Avatar + Thông tin */}
                        <div className="flex items-center gap-3">
                            <img src={transaction.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="text-sm font-medium text-gray-900">{transaction.name}</p>
                                <p className="text-xs text-gray-500">{transaction.date}</p>
                            </div>
                        </div>

                        {/* Số tiền */}
                        <div className={`flex items-center gap-1 font-medium ${transaction.type === "income" ? "text-green-600" : "text-red-500"}`}>
                            {transaction.type === "income" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownLeft className="w-4 h-4" />}
                            {transaction.amount}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentTransactions;
