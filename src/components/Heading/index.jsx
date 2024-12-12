import React from "react";
import PropTypes from "prop-types";

const Heading = ({ level = 1, className = "", children }) => {
  const HeadingTag = `h${level}`; // Dynamically select heading level

  return <HeadingTag className={className}>{children}</HeadingTag>;
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Heading;