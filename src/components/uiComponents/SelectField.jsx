import React from "react";

const SelectField = ({
  placeholder,
  icon,
  options,
  onChange,
  value,
  className,
}) => {
  return (
    <div className={`relative inline-block w-full text-gray-700 ${className}`}>
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img src={icon} alt="" />
        </div>
      )}
      <select
        className="w-full py-[13.5px] pl-10 border border-stone-400 rounded-xl overflow-hidden appearance-none focus:border-indigo-600 focus:outline-none"
        onChange={onChange}
        value={value}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
          <path d="M5.95 6.95L10 11l4.05-4.05-1.1-1.1L10 8.8 7.05 5.85z" />{" "}
        </svg>
      </div>
    </div>
  );
};

export default SelectField;
