import React from "react";

const AboutPage = ({ darkMode }) => (
  <div className="about-page">
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Customer Churn Prediction</h1>

        <div className="about-sections">
          <div className="about-section">
            <h2 className="section-title">What is Customer Churn?</h2>
            <p className="section-text">
              Customer churn refers to the phenomenon where customers stop using
              a company's products or services. It's a critical metric for
              businesses as acquiring new customers typically costs 5–25 times
              more than retaining existing ones.
            </p>
          </div>

          <div className="about-section">
            <h2 className="section-title">Why is it Important?</h2>
            <div className="section-text">
              <p>
                • Revenue Protection: Identify at-risk customers before they
                leave
              </p>
              <p>
                • Cost Efficiency: Focus retention efforts on high-value
                customers
              </p>
              <p>
                • Strategic Planning: Understand factors that influence customer
                satisfaction
              </p>
              <p>• Competitive Advantage: Proactive customer management</p>
            </div>
          </div>

          <div className="about-section">
            <h2 className="section-title">How This Tool Helps</h2>
            <p className="section-text">
              Our machine learning model analyzes customer characteristics and
              usage patterns to predict the likelihood of churn. This enables
              businesses to take proactive measures to retain valuable customers
              through targeted interventions, personalized offers, and improved
              service delivery.
            </p>
          </div>

          <div className="about-section">
            <h2 className="section-title">Project Background</h2>
            <p className="section-text">
              This project was built as a demonstration of machine learning
              applications in business intelligence. It showcases how data
              science can be applied to solve real-world business problems and
              create actionable insights.
            </p>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .about-page {
        min-height: 100vh;
        background: ${darkMode ? "#111827" : "#f9fafb"};
      }
      .about-container {
        max-width: 64rem;
        margin: 0 auto;
        padding: 3rem 1rem;
      }
      .about-content {
        background: ${darkMode ? "#1f2937" : "white"};
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
        padding: 2rem;
      }
      .about-title {
        font-size: 1.875rem;
        font-weight: bold;
        color: ${darkMode ? "white" : "#111827"};
        margin-bottom: 2rem;
      }
      .about-sections {
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
        margin: 0;
      }
      .section-text p {
        margin: 0.5rem 0;
      }
    `}</style>
  </div>
);

export default AboutPage;
