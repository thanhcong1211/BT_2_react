import React from "react";

const Card = ({ title, content, image, image2 }) => {
  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "relative",
        background: "#fff",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "420px",
          objectFit: "cover",
          display: "block",
        }}
      />
      {image2 && (
        <img
          src={image2}
          alt={title}
          style={{
            position: "absolute",
            top: "120px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "180px",
            height: "60px",
            zIndex: 2,
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          background: "#f7a96b",
          padding: "16px",
          boxSizing: "border-box",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
      >
        <h3
          style={{
            color: "#4a5fc1",
            margin: "0 0 8px 0",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: "#fff",
            margin: 0,
          }}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;