import React from "react";
import "../style/button.css"; // Assuming styles are in Button.css

const Button = ({ children, onClick, variant = "primary" }) => {
  return (
    <button className={`custom-button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
