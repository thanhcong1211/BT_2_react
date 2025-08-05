import React from "react";
const Card2 = ({ title, image }) => {
  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "420px",
          objectFit: "cover",

        }}
      />
      
    </div>
  );
}
export default Card2;