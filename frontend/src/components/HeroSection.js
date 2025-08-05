import React from "react";

const HeroSection = () => (
  <div className="hero">
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <h1 className="hero-title">Predict Customer Churn in Seconds</h1>
      <p className="hero-subtitle">
        Use machine learning to identify customers likely to leave your service
      </p>
      <button
        onClick={() => {
          const element = document.getElementById("prediction-form");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="hero-button"
      >
        Start Predicting
      </button>
    </div>

    <style jsx>{`
      .hero {
        background: linear-gradient(
          135deg,
          #2563eb 0%,
          #7c3aed 50%,
          #14b8a6 100%
        );
        color: white;
        position: relative;
        overflow: hidden;
      }
      .hero-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.2);
      }
      .hero-content {
        position: relative;
        max-width: 80rem;
        margin: 0 auto;
        padding: 6rem 1rem;
        text-align: center;
      }
      .hero-title {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
      }
      .hero-subtitle {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        color: #bfdbfe;
      }
      .hero-button {
        background: white;
        color: #2563eb;
        padding: 0.75rem 2rem;
        border-radius: 0.5rem;
        font-weight: 600;
        border: none;
        cursor: pointer;
        transition: all 0.3s;
      }
      .hero-button:hover {
        background: #f3f4f6;
        transform: scale(1.05);
      }
      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }
      }
    `}</style>
  </div>
);

export default HeroSection;
