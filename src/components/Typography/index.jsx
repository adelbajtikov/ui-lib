import React from "react";

const Typography = ({ variant = "body", color = "#333", children }) => {
  const styles = {
    h1: { fontSize: "2.5rem", fontWeight: "bold", margin: "10px 0" },
    h2: { fontSize: "2rem", fontWeight: "bold", margin: "10px 0" },
    h3: { fontSize: "1.75rem", fontWeight: "bold", margin: "10px 0" },
    body: { fontSize: "1rem", margin: "10px 0" },
    caption: { fontSize: "0.85rem", color: "#666" },
  };

  return <div style={{ ...styles[variant], color }}>{children}</div>;
};

export default Typography;
