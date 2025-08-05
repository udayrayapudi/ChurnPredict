import React from "react";

const FormSection = ({ title, icon, children, darkMode }) => (
  <div className="form-section">
    <div className="section-header">
      <span className="section-icon">{icon}</span>
      <h3 className="section-title">{title}</h3>
    </div>
    <div className="section-content">{children}</div>

    <style jsx>{`
      .form-section {
        background: ${darkMode ? "#1f2937" : "white"};
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
        padding: 1.5rem;
        transition: box-shadow 0.3s;
      }
      .form-section:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      .section-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
      }
      .section-icon {
        font-size: 1.5rem;
      }
      .section-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: ${darkMode ? "white" : "#111827"};
      }
      .section-content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      @media (min-width: 768px) {
        .section-content {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `}</style>
  </div>
);

export default FormSection;
