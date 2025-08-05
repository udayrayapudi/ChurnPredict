import React from "react";

const ModelInfoPage = ({ darkMode }) => (
  <div className="model-page">
    <div className="model-container">
      <div className="model-content">
        <h1 className="model-title">Model Information</h1>

        <div className="stats-grid">
          <div className="stat-card blue">
            <h3 className="stat-label">Model Type</h3>
            <p className="stat-value">Random Forest Classifier</p>
          </div>
          <div className="stat-card green">
            <h3 className="stat-label">Accuracy</h3>
            <p className="stat-value">84.2%</p>
          </div>
          <div className="stat-card purple">
            <h3 className="stat-label">Dataset Size</h3>
            <p className="stat-value">7,043 customers</p>
          </div>
          <div className="stat-card orange">
            <h3 className="stat-label">Features</h3>
            <p className="stat-value">20 customer attributes</p>
          </div>
        </div>

        <div className="model-sections">
          <div className="model-section">
            <h2 className="section-title">How the Model Works</h2>
            <p className="section-text">
              Our churn prediction model uses a Random Forest algorithm trained
              on historical customer data. The model analyzes patterns in
              customer demographics, service usage, and billing information to
              identify customers who are likely to discontinue their service.
            </p>
          </div>

          <div className="model-section">
            <h2 className="section-title">Key Features Analyzed</h2>
            <div className="features-grid">
              <div className="feature-group">
                <h4 className="feature-title">Customer Demographics</h4>
                <div className="feature-list">
                  <p>• Age and gender</p>
                  <p>• Partner and dependents status</p>
                  <p>• Senior citizen classification</p>
                </div>
              </div>
              <div className="feature-group">
                <h4 className="feature-title">Service Usage</h4>
                <div className="feature-list">
                  <p>• Tenure with company</p>
                  <p>• Service subscriptions</p>
                  <p>• Add-on services usage</p>
                </div>
              </div>
              <div className="feature-group">
                <h4 className="feature-title">Billing Information</h4>
                <div className="feature-list">
                  <p>• Contract type and duration</p>
                  <p>• Payment method</p>
                  <p>• Monthly and total charges</p>
                </div>
              </div>
              <div className="feature-group">
                <h4 className="feature-title">Technical Services</h4>
                <div className="feature-list">
                  <p>• Internet service type</p>
                  <p>• Security and backup services</p>
                  <p>• Streaming and entertainment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="model-section">
            <h2 className="section-title">Model Performance</h2>
            <p className="section-text">
              The model has been validated using cross-validation techniques and
              achieves:
            </p>
            <div className="performance-list">
              <p>• Precision: 82.1%</p>
              <p>• Recall: 79.8%</p>
              <p>• F1-Score: 80.9%</p>
              <p>• AUC-ROC: 0.87</p>
            </div>
          </div>

          <div className="model-section">
            <h2 className="section-title">Data Source</h2>
            <p className="section-text">
              The model is trained on a telecommunications customer dataset
              containing anonymized customer information. The dataset includes
              various customer attributes and their churn status over a specific
              period.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* CSS styles injected via styled-jsx */}
    <style jsx>{`
      .model-page {
        min-height: 100vh;
        background: ${darkMode ? "#111827" : "#f9fafb"};
      }
      .model-container {
        max-width: 96rem;
        margin: 0 auto;
        padding: 3rem 1rem;
      }
      .model-content {
        background: ${darkMode ? "#1f2937" : "white"};
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
        padding: 2rem;
      }
      .model-title {
        font-size: 1.875rem;
        font-weight: bold;
        color: ${darkMode ? "white" : "#111827"};
        margin-bottom: 2rem;
      }
      .stats-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        margin-bottom: 2rem;
      }
      .stat-card {
        padding: 1.5rem;
        border-radius: 0.5rem;
        text-align: center;
      }
      .stat-card.blue {
        background: ${darkMode ? "rgba(30, 58, 138, 0.2)" : "#dbeafe"};
      }
      .stat-card.green {
        background: ${darkMode ? "rgba(20, 83, 45, 0.2)" : "#dcfce7"};
      }
      .stat-card.purple {
        background: ${darkMode ? "rgba(88, 28, 135, 0.2)" : "#f3e8ff"};
      }
      .stat-card.orange {
        background: ${darkMode ? "rgba(154, 52, 18, 0.2)" : "#fed7aa"};
      }
      .stat-label {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      .stat-value {
        font-size: 1.25rem;
        font-weight: bold;
        margin: 0;
      }
      .stat-card.blue .stat-label {
        color: ${darkMode ? "#93c5fd" : "#1e40af"};
      }
      .stat-card.green .stat-label {
        color: ${darkMode ? "#86efac" : "#166534"};
      }
      .stat-card.purple .stat-label {
        color: ${darkMode ? "#c084fc" : "#7c2d12"};
      }
      .stat-card.orange .stat-label {
        color: ${darkMode ? "#fdba74" : "#9a3412"};
      }
      .stat-card.blue .stat-value {
        color: ${darkMode ? "#60a5fa" : "#1d4ed8"};
      }
      .stat-card.green .stat-value {
        color: ${darkMode ? "#4ade80" : "#15803d"};
      }
      .stat-card.purple .stat-value {
        color: ${darkMode ? "#a78bfa" : "#6b21a8"};
      }
      .stat-card.orange .stat-value {
        color: ${darkMode ? "#fb923c" : "#ea580c"};
      }
      .model-sections {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .section-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${darkMode ? "#e5e7eb" : "#1f2937"};
        margin-bottom: 1rem;
      }
      .section-text {
        color: ${darkMode ? "#d1d5db" : "#4b5563"};
        line-height: 1.7;
        margin: 0 0 1rem 0;
      }
      .features-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      .feature-title {
        font-size: 1.125rem;
        font-weight: 500;
        color: ${darkMode ? "#d1d5db" : "#374151"};
        margin-bottom: 0.5rem;
      }
      .feature-list {
        color: ${darkMode ? "#9ca3af" : "#6b7280"};
      }
      .feature-list p,
      .performance-list p {
        margin: 0.25rem 0;
      }
      .performance-list {
        color: ${darkMode ? "#d1d5db" : "#4b5563"};
      }
      @media (min-width: 640px) {
        .stats-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (min-width: 1024px) {
        .stats-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .features-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `}</style>
  </div>
);

export default ModelInfoPage;
