import React from "react";

const PredictionCard = ({ result, darkMode }) => {
  if (!result) return null;

  const isChurn = result.prediction === "Churn";
  const probability = parseFloat(result.probability) * 100 || 0;

  return (
    <div className="prediction-card">
      <div className={`card ${isChurn ? "churn" : "no-churn"}`}>
        <div className="card-header">
          <span className="card-icon">{isChurn ? "⚠️" : "✅"}</span>
          <div>
            <h3 className="card-title">
              {isChurn ? "Will Churn" : "Will Not Churn"}
            </h3>
            <p className="card-subtitle">
              Confidence: {probability.toFixed(1)}%
            </p>
          </div>
        </div>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${probability}%` }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        .prediction-card {
          margin-top: 2rem;
        }
        .card {
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 2px solid;
        }
        .card.churn {
          background: ${darkMode ? "rgba(153, 27, 27, 0.2)" : "#fef2f2"};
          border-color: ${darkMode ? "#dc2626" : "#fecaca"};
        }
        .card.no-churn {
          background: ${darkMode ? "rgba(20, 83, 45, 0.2)" : "#f0fdf4"};
          border-color: ${darkMode ? "#16a34a" : "#bbf7d0"};
        }
        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .card-icon {
          font-size: 1.875rem;
        }
        .card-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin: 0;
        }
        .card.churn .card-title {
          color: ${darkMode ? "#fca5a5" : "#b91c1c"};
        }
        .card.no-churn .card-title {
          color: ${darkMode ? "#86efac" : "#166534"};
        }
        .card-subtitle {
          color: ${darkMode ? "#9ca3af" : "#6b7280"};
          margin: 0;
        }
        .progress-container {
          width: 100%;
          background: ${darkMode ? "#374151" : "#e5e7eb"};
          border-radius: 9999px;
          height: 0.75rem;
        }
        .progress-bar {
          height: 0.75rem;
          border-radius: 9999px;
          transition: width 1s ease;
        }
        .card.churn .progress-bar {
          background: #ef4444;
        }
        .card.no-churn .progress-bar {
          background: #10b981;
        }
      `}</style>
    </div>
  );
};

export default PredictionCard;
