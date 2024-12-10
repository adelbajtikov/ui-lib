import React from "react";

const Heading = ({ level = 1, color = "#333", align = "left", children }) => {
  const Tag = `h${level}`; // Выбирает тег заголовка h1, h2, ..., h6

  return (
    <Tag
      style={{
        color: color,
        textAlign: align,
        margin: "10px 0",
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
        textTransform: "capitalize",
      }}
    >
      {children}
    </Tag>
  );
};

export default Heading;
