import React from "react";
import clsx from "clsx";
import { LoginButton } from "../types";

const Button: React.FC<LoginButton> = ({ type, label, className }) => {
  return (
    <button
      type={type}
      className={clsx(
        "w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
