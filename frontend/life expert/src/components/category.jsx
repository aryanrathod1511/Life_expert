import React from "react";

const Category = ({ imageSrc, title }) => {
  return (
    <div style={styles.card}>
      <img src={imageSrc} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
    </div>
  );
};

const styles = {
  card: {
    width: "180px",
    height: "200px",
    textAlign: "center",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    backgroundColor: "#fff",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%", 
    objectFit: "cover",
    marginBottom: "10px",
  },
  title: {
    
    fontSize: "1.2rem",
    margin: 0,
  },
};

export default Category;
