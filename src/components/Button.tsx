import React from "react";
import clsx from "clsx";
import { LoginButton } from "../types";

const Button: React.FC<LoginButton> = ({ type, label, className }) => {
  return (
    <button
      type={type}
      className={clsx(
        "w-full px-4 py-2 bg-primaryBtn text-black",
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
