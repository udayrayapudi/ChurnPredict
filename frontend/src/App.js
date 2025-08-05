import { useState } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ModelInfoPage from "./components/ModelInfoPage";
import Toast from "./components/Toast";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(null);

  const [formData, setFormData] = useState({
    gender: "",
    SeniorCitizen: "0",
    Partner: "",
    Dependents: "",
    tenure: 0,
    PhoneService: "",
    MultipleLines: "",
    InternetService: "",
    OnlineSecurity: "",
    OnlineBackup: "",
    DeviceProtection: "",
    TechSupport: "",
    StreamingTV: "",
    StreamingMovies: "",
    Contract: "",
    PaperlessBilling: "",
    PaymentMethod: "",
    MonthlyCharges: "",
    TotalCharges: "",
  });

  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const showToastMessage = (message, type) => {
    setShowToast({ message, type });
    setTimeout(() => setShowToast(null), 3000);
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "gender",
      "Partner",
      "Dependents",
      "PhoneService",
      "InternetService",
      "Contract",
      "PaperlessBilling",
      "PaymentMethod",
      "MonthlyCharges",
      "TotalCharges",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field] === "") {
        newErrors[field] = "This field is required";
      }
    });

    if (formData.tenure < 0 || formData.tenure > 100) {
      newErrors.tenure = "Tenure must be between 0 and 100";
    }

    if (
      formData.MonthlyCharges &&
      (isNaN(formData.MonthlyCharges) || formData.MonthlyCharges < 0)
    ) {
      newErrors.MonthlyCharges = "Please enter a valid amount";
    }

    if (
      formData.TotalCharges &&
      (isNaN(formData.TotalCharges) || formData.TotalCharges < 0)
    ) {
      newErrors.TotalCharges = "Please enter a valid amount";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToastMessage("Please fill in all required fields correctly", "error");
      return;
    }

    setIsLoading(true);
    try {
      const submitData = {
        ...formData,
        SeniorCitizen: parseInt(formData.SeniorCitizen),
        tenure: parseInt(formData.tenure),
        MonthlyCharges: parseFloat(formData.MonthlyCharges),
        TotalCharges: parseFloat(formData.TotalCharges),
      };

      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });
      

      if (!response.ok) {
        throw new Error("Prediction failed");
      }

      const data = await response.json();
      setResult(data);
      showToastMessage("Prediction completed successfully!", "success");
    } catch (error) {
      console.error("Prediction error:", error);
      showToastMessage("Prediction failed: " + error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      gender: "",
      SeniorCitizen: "0",
      Partner: "",
      Dependents: "",
      tenure: 0,
      PhoneService: "",
      MultipleLines: "",
      InternetService: "",
      OnlineSecurity: "",
      OnlineBackup: "",
      DeviceProtection: "",
      TechSupport: "",
      StreamingTV: "",
      StreamingMovies: "",
      Contract: "",
      PaperlessBilling: "",
      PaymentMethod: "",
      MonthlyCharges: "",
      TotalCharges: "",
    });
    setResult(null);
    setErrors({});
    showToastMessage("Form cleared successfully", "success");
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            darkMode={darkMode}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
            isLoading={isLoading}
            result={result}
            errors={errors}
          />
        );
      case "about":
        return <AboutPage darkMode={darkMode} />;
      case "model":
        return <ModelInfoPage darkMode={darkMode} />;
      default:
        return (
          <HomePage
            darkMode={darkMode}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
            isLoading={isLoading}
            result={result}
            errors={errors}
          />
        );
    }
  };

  return (
    <div className="app">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {renderCurrentPage()}
      {showToast && (
        <Toast
          message={showToast.message}
          type={showToast.type}
          darkMode={darkMode}
        />
      )}

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>

      <style jsx>{`
        .app {
          min-height: 100vh;
          background: ${darkMode ? "#111827" : "#f3f4f6"};
          transition: all 0.3s;
        }
      `}</style>
    </div>
  );
};

export default App;
