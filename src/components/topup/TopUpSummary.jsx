import React from "react";
import Card from "../common/Card";

const TopUpSummary = ({ method, amount, onConfirm }) => {
  return (
    <Card className="p-4 flex flex-col gap-3 text-gray-700 dark:text-gray-200">
      {/* Tiêu đề */}
      <h3 className="text-lg font-semibold">Summary</h3>

      {/* Thông tin phương thức thanh toán */}
      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200">
        <span className="text-gray-700 dark:text-gray-200">Payment Method</span>
        <span className="font-medium">{method?.name || "Select a method"}</span>
      </div>

      {/* Thông tin số tiền */}
      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200">
        <span className="text-gray-500">Amount</span>
        <span className="font-medium">${amount || 0}</span>
      </div>

      {/* Tổng số tiền (hiển thị lớn hơn) */}
      <div className="flex justify-between text-lg font-semibold text-gray-700 dark:text-gray-200">
        <span>Total</span>
        <span>${amount || 0}</span>
      </div>

      {/* Nút xác nhận nạp tiền */}
      <button
        onClick={onConfirm}
        className="mt-2 bg-lime-500 text-white py-2 rounded-lg text-center font-medium transition hover:bg-lime-600"
        disabled={!method || !amount}
      >
        Confirm & Pay
      </button>
    </Card>
  );
};

export default TopUpSummary;
