import React from "react";
const Button = ({ iconSrc, buttonText, className }) => {
  return (
    <button
      className={`flex items-center w-full justify-center px-4 py-3 bg-black text-white font-semibold rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-75 ${className}`}
    >
      {iconSrc && (
        <img src={iconSrc} alt="icon" className="mr-2 -ml-1 w-5 h-5" />
      )}{" "}
      {buttonText}
    </button>
  );
};

export default Button;
