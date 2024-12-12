import React from "react";
import PropTypes from "prop-types";
import "./Input.css"; // Add a CSS file for styles

const Input = ({
  type = "text",
  placeholder = "Enter text...",
  value,
  onChange,
  disabled = false,
  label,
  danger = false,
  blue = false,  // Добавляем новый пропс для синего инпута
}) => {
  return (
    <div className={`input-wrapper ${danger ? "danger" : ""} ${blue ? "blue" : ""}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="input-field"
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  danger: PropTypes.bool,
  blue: PropTypes.bool,  // Добавляем новый пропс
};

export default Input;
