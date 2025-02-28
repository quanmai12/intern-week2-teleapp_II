import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 5000, expense: 9800 },
  { name: "Apr", income: 4780, expense: 3908 },
  { name: "May", income: 5890, expense: 4800 },
  { name: "Jun", income: 4390, expense: 3800 },
];

const StatisticsChart = () => {
  return (
    <div className="w-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">📊 Monthly Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.5} />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Bar dataKey="income" fill="#22c55e" radius={[8, 8, 0, 0]} />
          <Bar dataKey="expense" fill="#ef4444" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsChart;
