import Header from "../components/common/Header";
// import BottomNav from "../components/common/BottomNav";
import BalanceCard from "../components/home/BalanceCard";
// import ActionButtons from "../components/home/ActionButtons";
// import CategoryList from "../components/home/CategoryList";
// import TransactionList from "../components/home/TransactionList";
import QuickActions from "../components/home/QuickActions";
import RecentTransactions from "../components/home/RecentTransactions";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Neopay" />
      <div className="p-4">
        <BalanceCard />
        <QuickActions />
        <RecentTransactions />
        {/*<ActionButtons />
        <CategoryList />
        <TransactionList /> */}
      </div>
      {/* <BottomNav /> */}
    </div>
  );
}

export default Home;
