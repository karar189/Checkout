import React from "react";

const BorderedBox = ({ children, className }) => {
  return (
    <div className={`p-4 border border-slate-300 rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default BorderedBox;
