import React from "react";
import PropTypes from "prop-types";
import "./Typography.css"; // Add a CSS file for consistent styles

const Typography = ({ textSize = "md", className = "", children }) => {
  const textSizeClass = `typography-${textSize}`;

  return <p className={`${textSizeClass} ${className}`}>{children}</p>;
};

Typography.propTypes = {
  textSize: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Typography;