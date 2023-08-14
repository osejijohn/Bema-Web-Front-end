import React from "react";

const MinHeading = ({ title, color }) => {
  return (
    <div className="min-header">
      <h3 style={{ color: color ? color : null}}>{title}</h3>
    </div>
  );
};

export default MinHeading;
