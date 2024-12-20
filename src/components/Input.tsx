import clsx from "clsx";
import React from "react";
import { LoginForm } from "../types";

const Input: React.FC<LoginForm> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  id,
  required = false,
  className,
}) => {
  return (
    <div className="mb-2 md:mb-4">
      <label
        htmlFor={id}
        className="block mb-2 text-[16px] text-textblack font-medium"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={clsx(
          "w-full px-3 py-2 border-inputBorder border-2 bg-inputBg  rounded-sm focus:outline-none focus:ring focus:ring-blue-300",
          className
        )}
        required={required}
      />
    </div>
  );
};

export default Input;
