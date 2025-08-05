import React from "react";
import HeroSection from "./HeroSection";
import FormSection from "./FormSection";
import InputField from "./InputField";
import PredictionCard from "./PredictionCard";

const HomePage = ({
  darkMode,
  formData,
  handleChange,
  handleSubmit,
  handleReset,
  isLoading,
  result,
  errors,
}) => (
  <div className="home-page">
    <HeroSection />

    <div id="prediction-form" className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <FormSection title="Personal Information" icon="👤" darkMode={darkMode}>
          <InputField
            name="gender"
            label="Gender"
            options={["Male", "Female"]}
            icon="👤"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
          <InputField
            name="SeniorCitizen"
            label="Senior Citizen"
            options={["0", "1"]}
            icon="👴"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
          <InputField
            name="Partner"
            label="Has Partner"
            options={["Yes", "No"]}
            icon="💑"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
          <InputField
            name="Dependents"
            label="Has Dependents"
            options={["Yes", "No"]}
            icon="👨‍👩‍👧‍👦"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
        </FormSection>

        <FormSection title="Service Information" icon="📞" darkMode={darkMode}>
          <InputField
            name="tenure"
            label="Tenure (months)"
            type="range"
            icon="📅"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
          <InputField
            name="PhoneService"
            label="Phone Service"
            options={["Yes", "No"]}
            icon="📱"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
          <InputField
            name="MultipleLines"
            label="Multiple Lines"
            options={["Yes", "No", "No phone service"]}
            icon="📞"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
          <InputField
            name="InternetService"
            label="Internet Service"
            options={["DSL", "Fiber optic", "No"]}
            icon="🌐"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
        </FormSection>

        <FormSection title="Add-on Services" icon="🛡️" darkMode={darkMode}>
          <InputField
            name="OnlineSecurity"
            label="Online Security"
            options={["Yes", "No", "No internet service"]}
            icon="🔒"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
          <InputField
            name="OnlineBackup"
            label="Online Backup"
            options={["Yes", "No", "No internet service"]}
            icon="💾"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
          <InputField
            name="DeviceProtection"
            label="Device Protection"
            options={["Yes", "No", "No internet service"]}
            icon="🛡️"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
          <InputField
            name="TechSupport"
            label="Tech Support"
            options={["Yes", "No", "No internet service"]}
            icon="🔧"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
          <InputField
            name="StreamingTV"
            label="Streaming TV"
            options={["Yes", "No", "No internet service"]}
            icon="📺"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
          <InputField
            name="StreamingMovies"
            label="Streaming Movies"
            options={["Yes", "No", "No internet service"]}
            icon="🎬"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
        </FormSection>

        <FormSection title="Billing Information" icon="💳" darkMode={darkMode}>
          <InputField
            name="Contract"
            label="Contract Type"
            options={["Month-to-month", "One year", "Two year"]}
            icon="📋"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
          <InputField
            name="PaperlessBilling"
            label="Paperless Billing"
            options={["Yes", "No"]}
            icon="📄"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
          <InputField
            name="PaymentMethod"
            label="Payment Method"
            options={[
              "Electronic check",
              "Mailed check",
              "Bank transfer (automatic)",
              "Credit card (automatic)",
            ]}
            icon="💳"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
          <InputField
            name="MonthlyCharges"
            label="Monthly Charges"
            type="number"
            step="0.01"
            placeholder="Enter monthly charges"
            icon="💰"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
          <InputField
            name="TotalCharges"
            label="Total Charges"
            type="number"
            step="0.01"
            placeholder="Enter total charges"
            icon="💰"
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            darkMode={darkMode}
          />
        </FormSection>

        <div className="button-group">
          <button type="submit" disabled={isLoading} className="primary-button">
            <span>{isLoading ? "⏳" : "⚡"}</span>
            <span>{isLoading ? "Predicting..." : "Predict Churn"}</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="secondary-button"
          >
            <span>🔄</span>
            <span>Reset Form</span>
          </button>
        </div>

        <PredictionCard result={result} darkMode={darkMode} />
      </form>
    </div>

    <style jsx>{`
      .home-page {
        min-height: 100vh;
        background: ${darkMode ? "#111827" : "#f9fafb"};
      }
      .form-container {
        max-width: 80rem;
        margin: 0 auto;
        padding: 3rem 1rem;
      }
      .form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
      .button-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
      }
      .primary-button,
      .secondary-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 2rem;
        border-radius: 0.5rem;
        font-weight: 600;
        border: none;
        cursor: pointer;
        transition: all 0.3s;
      }
      .primary-button {
        background: #2563eb;
        color: white;
      }
      .primary-button:hover:not(:disabled) {
        background: #1d4ed8;
        transform: scale(1.05);
      }
      .primary-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .secondary-button {
        background: #6b7280;
        color: white;
      }
      .secondary-button:hover {
        background: #4b5563;
        transform: scale(1.05);
      }
      @media (min-width: 768px) {
        .button-group {
          flex-direction: row;
        }
      }
    `}</style>
  </div>
);

export default HomePage;
