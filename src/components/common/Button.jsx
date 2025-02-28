import React from "react";

const Button = ({ text, icon: Icon, onClick, type = "primary", className = "" }) => {
  const baseStyle =
    "flex items-center justify-center gap-2 px-5 py-2 rounded-2xl font-medium transition-all";
  const typeStyle =
    type === "primary"
      ? "bg-lime-500 text-white hover:bg-lime-600"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button className={`${baseStyle} ${typeStyle} ${className}`} onClick={onClick}>
      {Icon && <Icon size={20} />}
      {text}
    </button>
  );
};

export default Button;
