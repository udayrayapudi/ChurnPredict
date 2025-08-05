import React from "react";

const InputField = ({
  name,
  label,
  type = "text",
  options,
  icon,
  formData,
  handleChange,
  errors,
  darkMode,
  ...props
}) => (
  <div className="input-field">
    <label className="input-label">
      {icon && <span className="input-icon">{icon}</span>}
      <span>{label}</span>
    </label>
    {options ? (
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className={`input ${errors[name] ? "error" : ""}`}
        {...props}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : type === "range" ? (
      <div className="range-container">
        <input
          type="range"
          name={name}
          min="0"
          max="100"
          value={formData[name]}
          onChange={handleChange}
          className="range-input"
        />
        <div className="range-value">{formData[name]} months</div>
      </div>
    ) : (
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className={`input ${errors[name] ? "error" : ""}`}
        {...props}
      />
    )}
    {errors[name] && <p className="error-message">{errors[name]}</p>}

    <style jsx>{`
      .input-field {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .input-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: ${darkMode ? "#d1d5db" : "#374151"};
      }
      .input-icon {
        font-size: 1rem;
      }
      .input {
        width: 100%;
        padding: 0.5rem 0.75rem;
        border: 1px solid ${darkMode ? "#4b5563" : "#d1d5db"};
        border-radius: 0.5rem;
        background: ${darkMode ? "#374151" : "white"};
        color: ${darkMode ? "white" : "#111827"};
        transition: all 0.2s;
      }
      .input:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
      }
      .input.error {
        border-color: #ef4444;
      }
      .range-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .range-input {
        width: 100%;
        height: 0.5rem;
        background: ${darkMode ? "#374151" : "#e5e7eb"};
        border-radius: 0.5rem;
        appearance: none;
        cursor: pointer;
      }
      .range-input::-webkit-slider-thumb {
        appearance: none;
        width: 1rem;
        height: 1rem;
        background: #3b82f6;
        border-radius: 50%;
        cursor: pointer;
      }
      .range-value {
        text-align: center;
        font-size: 0.875rem;
        color: ${darkMode ? "#9ca3af" : "#6b7280"};
      }
      .error-message {
        color: #ef4444;
        font-size: 0.875rem;
        margin: 0;
      }
    `}</style>
  </div>
);

export default InputField;
