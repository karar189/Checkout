import React from "react";

const BorderedBox = ({ children }) => {
  return (
    <div className=" p-4 border border-slate-300 rounded-lg">{children}</div>
  );
};

export default BorderedBox;
