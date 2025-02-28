import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
