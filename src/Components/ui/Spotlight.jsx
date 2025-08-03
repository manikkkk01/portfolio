import React from "react";

export const Spotlight = ({ className = "", fill = "white" }) => {
  return (
    <svg
      className={`absolute pointer-events-none blur-3xl opacity-50 ${className}`}
      width="700"
      height="700"
      viewBox="0 0 700 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="350" cy="350" r="200" fill={fill} />
    </svg>
  );
};
