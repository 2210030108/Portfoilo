import React from "react";
import Image from 'next/image';
const Achievements = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
      <h1 className="text-3xl mt-2">Achievements</h1>
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
        <div className="eduimg" style={styles.achievementItem}>
          <Image  src="/acite-cloud.png" alt="Global Certification" width={500} height={300} className="rounded-lg" />
          <span>Acite cloud internship</span>
        </div>
        <div className="eduimg" style={styles.achievementItem}>
          <img src="/and.jpg" alt="Trophy Icon"/>
          <span>Best Paper Award at Conference 2024</span>
        </div>
        <div className="eduimg" style={styles.achievementItem}>
          <img src="/h1.png" alt="Trophy Icon"/>
          <span>Top Performer in Coding Competition 2022</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  achievementItem: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    outline: "2px solid #f0f0f0",
    textAlign: "center",
  },
};

export default Achievements;
