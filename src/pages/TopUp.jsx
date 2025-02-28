import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PaymentMethod from "../components/topup/PaymentMethods";
import AmountSelection from "../components/topup/AmountSelection";
import TopUpSummary from "../components/topup/TopupSummary";
import PageWrapper from "../components/common/PageWrapper";
function TopUp() {
    const navigate = useNavigate();
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [selectedAmount, setSelectedAmount] = useState(0);

    const handleConfirm = () => {
        alert(`Top Up Successful!\nMethod: ${selectedMethod.name}\nAmount: $${selectedAmount}`);
    };

    return (
        <PageWrapper>
            <div className="min-h-screen bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
                {/* Header */}
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="p-2 bg-gray-200 dark:bg-gray-500 rounded-full">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Top Up Neopay</h2>
                </div>

                {/* Phương thức nạp tiền */}
                <div className="p-4 flex flex-col ">
                    <PaymentMethod selected={selectedMethod} onSelect={() => setSelectedMethod(!selectedMethod)} />
                </div>

                {/* Chọn số tiền */}
                <div className="p-4 flex flex-col ">
                    <AmountSelection onSelect={(amount) => console.log("Selected Amount:", amount)} />
                </div>
                <div className="p-4 flex flex-col ">
                    <TopUpSummary method={selectedMethod} amount={selectedAmount} onConfirm={handleConfirm} />
                </div>
                

                
            </div>
        </PageWrapper>
    );
}

export default TopUp;
