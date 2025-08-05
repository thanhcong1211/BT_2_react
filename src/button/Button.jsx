import React from "react";

const Button = ({ title, image, onClick }) => {
  return (
    <button
      style={{
        width: "120px",
        height: "50px",
        backgroundColor: "#4a5fc1",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "40px",
          height: "20px",
          marginBottom: "5px",
        }}
      />
      <span style={{ fontSize: "12px" }}>{title}</span>
    </button>
  );
};

export default Button;