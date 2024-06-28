import React from "react";

const Education = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
      <h1 className="text-3xl mt-2">Education</h1>
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
        <div className="eduimg" style={styles.eduItem}>
          <img src="https://cdn-icons-png.flaticon.com/128/8074/8074798.png" alt="School Icon"/>
          <span>Completed</span>
        </div>
        <div className="eduimg" style={styles.eduItem}>
          <img src="https://cdn-icons-png.flaticon.com/128/4345/4345672.png" alt="College Icon"/>
          <span>Completed</span>
        </div>
        <div className="eduimg" style={styles.eduItem}>
          <img src="https://cdn-icons-png.flaticon.com/128/8074/8074800.png" alt="University Icon"/>
          <span>Ongoing</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  eduItem: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    outline: "2px solid #f0f0f0",
    textAlign: "center",
  },
};

export default Education;
