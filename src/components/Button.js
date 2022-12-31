import React from "react";

const Button = ({ handleClick, text, className }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleClick(e);
      }}
      className={`${className} bg-yellow-100 text-blue font-semibold text-lg w-full px-4 py-2 rounded-2xl shadow-lg`}
    >
      {text}
    </button>
  );
};

export default Button;
