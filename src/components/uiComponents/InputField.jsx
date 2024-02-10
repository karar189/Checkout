import React from "react";

const InputField = ({
  value,
  onChange,
  placeholder,
  icon,
  type,
  className,
}) => {
  return (
    <div
      className={`flex items-center border border-slate-300 w-full rounded-xl overflow-hidden 
      ${icon ? "pl-2" : "px-4 "} ${className}`}
    >
      {icon && <div className="input-icon p-2">{icon}</div>}
      <input
        type={type || "text"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="outline-none  py-3"
      />
    </div>
  );
};

export default InputField;
