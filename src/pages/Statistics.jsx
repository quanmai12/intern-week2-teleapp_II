import Header from "../components/common/Header";
import StatisticsChart from "../components/statistics/StatisticsChart";
import PageWrapper from "../components/common/PageWrapper";
import TransactionList from "../components/statistics/TransactionList";

function Statistics() {
    return (
        <PageWrapper>
            <div className="min-h-screen bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md pb-6">
                <Header title="Your Statistic" />
                <StatisticsChart />
                <TransactionList />
            </div>
        </PageWrapper>
    );
}

export default Statistics;
