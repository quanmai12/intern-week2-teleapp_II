import Header from "../components/common/Header";
import StatisticsChart from "../components/statistics/StatisticsChart";
import RecentTransactions from "../components/home/RecentTransactions";

function Statistics() {
  return (
    <div className="min-h-screen bg-gray-100 pb-6">
      <Header title="Your Statistic" />
      <StatisticsChart />
      <RecentTransactions />
    </div>
  );
}

export default Statistics;
