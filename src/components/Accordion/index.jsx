import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginBottom: "10px", border: "1px solid #ddd", borderRadius: "4px" }}>
      <div
        onClick={toggleAccordion}
        style={{
          padding: "10px",
          cursor: "pointer",
          backgroundColor: "#f7f7f7",
          fontWeight: "bold",
        }}
      >
        {title}
      </div>
      {isOpen && (
        <div style={{ padding: "10px", backgroundColor: "#fff" }}>
          {children}
        </div>
      )}
    </div>
  );
};

export { Accordion };
