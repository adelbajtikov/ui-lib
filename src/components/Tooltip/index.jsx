import React, { useState } from "react";

const Tooltip = ({ children, text, position = "top" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const tooltipStyles = {
    position: "absolute",
    backgroundColor: "#333",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "4px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    zIndex: 10,
    [position]: "100%",
    transform: position === "top" ? "translateY(-100%)" : "none",
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block", cursor: "pointer" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && <div style={tooltipStyles}>{text}</div>}
    </div>
  );
};

export default Tooltip;
