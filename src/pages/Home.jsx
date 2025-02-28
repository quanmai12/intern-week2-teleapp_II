import Header from "../components/common/Header";
import BalanceCard from "../components/home/BalanceCard";
import QuickActions from "../components/home/QuickActions";
import RecentTransactions from "../components/home/RecentTransactions";
import PageWrapper from "../components/common/PageWrapper";

function Home() {
    return (
        <PageWrapper>
            <div className="min-h-screen bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
                <Header title="Neopay" />
                <div className="p-4">
                    <BalanceCard />
                    <QuickActions />
                    <RecentTransactions />
                </div>
            </div>  
        </PageWrapper>
    );
}

export default Home;
