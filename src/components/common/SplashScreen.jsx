import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 500); // Thêm hiệu ứng mờ dần
    }, 2000);

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo hoặc Icon */}
      <div className="flex items-center gap-2 text-2xl font-semibold">
        <span className="text-lime-500">MyFinance</span>
      </div>

      {/* Hiệu ứng loading */}
      <Loader2 className="mt-4 animate-spin text-lime-500" size={32} />
    </div>
  );
};

export default SplashScreen;
