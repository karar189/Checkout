import React from "react";

const BorderedBox = ({ children, className }) => {
  return (
    <div className={`p-4 border border-[#D3D4DB] rounded-2xl ${className}`}>
      {children}
    </div>
  );
};

export default BorderedBox;
