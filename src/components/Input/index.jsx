import React from "react";

const Input = ({ placeholder = "Enter text...", type = "text", value, onChange, style }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px",
        outline: "none",
        ...style,
      }}
    />
  );
};

export default Input;
