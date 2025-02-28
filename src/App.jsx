import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import TopUp from "./pages/Topup";
import Navbar from "./components/common/Navbar";
import { useState, useEffect } from "react";
import SplashScreen from "./components/common/SplashScreen";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/topup" element={<TopUp />} />
      </Routes>
    </AnimatePresence>
  );
}
function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }
  return (
    <Router>
      <div className="pb-20 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md"> {/* Chừa khoảng trống để Navbar không che nội dung */}
        <AnimatedRoutes />
        
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
