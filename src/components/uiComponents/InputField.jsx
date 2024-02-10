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
      className={`flex items-center border border-stone-400 w-full rounded-xl overflow-hidden 
      ${icon ? "pl-2" : "px-4 "} ${className}`}
    >
      {icon && <img src={icon} />}
      <input
        type={type || "text"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="outline-none  py-[13.5px]"
      />
    </div>
  );
};

export default InputField;
