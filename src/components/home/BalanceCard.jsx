import React from "react";
import { Wallet, Info, ArrowRight, ArrowDown } from "lucide-react";
import Card from "../common/Card";
import Button from "../common/Button";

const BalanceCard = () => {
  return (
    <Card className="flex flex-col gap-4">
      {/* Logo + Info */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Wallet size={24} className="text-lime-500" />
          <p className="text-gray-700 dark:text-gray-200 text-sm">Neo Cash Main Balance</p>
        </div>
        <Info size={20} className="text-gray-400" />
      </div>

      {/* Số dư */}
      <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-200">$1,459.70</h2>

      {/* Mã số tài khoản + điểm thưởng */}
      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200">
        <p>Neopay Number: **** 5324</p>
        <p>Neo Points: <span className="font-bold">320</span> Points</p>
      </div>

      {/* Nút hành động */}
      <div className="flex gap-4 ">
        <Button className="flex-1 min-w-[100px] flex items-center justify-center gap-2 p-2"
          icon={ArrowRight}
        >
          <span className="block sm:inline whitespace-nowrap">Transfer</span>
        </Button>

        <Button className="flex-1 min-w-[100px] flex items-center justify-center gap-2 p-2"
          icon={ArrowDown}
          type="secondary"
        >
          <span className="block sm:inline whitespace-nowrap">Withdraw</span>
        </Button>
      </div>
    </Card>
  );
};

export default BalanceCard;
