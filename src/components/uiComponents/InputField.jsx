import React from "react";

const InputField = ({
  value,
  onChange,
  placeholder,
  icon,
  type,
  className,
}) => {
  const placeholderParts = placeholder.split("*");
  const placeholderText = placeholderParts[0].trim();
  const placeholderAsterisk = placeholderParts.length > 1 ? "*" : "";
  const iconSpacing = icon ? "pl-7" : "";

  return (
    <div
      className={`relative flex items-center border border-stone-400 w-full rounded-xl overflow-hidden ${className}`}
    >
      {icon && <img src={icon} alt="icon" className="pl-2" />}
      <input
        type={type || "text"}
        value={value}
        onChange={onChange}
        className="outline-none py-[13.5px] px-4 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
      {value === "" && (
        <div
          className={`absolute left-4 top-0 bottom-0 flex items-center pointer-events-none ${iconSpacing}`}
        >
          <span className="text-gray-500">{placeholderText}</span>
          <span className="text-red-500">{placeholderAsterisk}</span>
        </div>
      )}
    </div>
  );
};

export default InputField;
