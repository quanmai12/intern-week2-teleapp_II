import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", income: 500, expense: 100 },
  { day: "Tue", income: 700, expense: 200 },
  { day: "Wed", income: 600, expense: 300 },
  { day: "Thu", income: 800, expense: 127 },
  { day: "Fri", income: 900, expense: 450 },
  { day: "Sat", income: 750, expense: 320 },
  { day: "Sun", income: 650, expense: 280 },
];

function StatisticsChart() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mx-4 mt-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Total Expense</h2>
      <div className="text-2xl font-bold text-red-500">-$127,96</div>

      {/* Biểu đồ */}
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data}>
          <XAxis dataKey="day" stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="income" fill="#16a34a" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expense" fill="#dc2626" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StatisticsChart;
