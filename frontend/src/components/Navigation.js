import React from "react";

const Navigation = ({
  currentPage,
  setCurrentPage,
  darkMode,
  setDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => (
  <nav className="navigation">
    <div className="nav-container">
      <div className="nav-header">
        <div className="nav-brand">
          <span className="brand-icon">📊</span>
          <span className="brand-name">ChurnPredict</span>
          <span className="brand-version">v1.0</span>
        </div>

        <div className="nav-desktop">
          <button
            onClick={() => setCurrentPage("home")}
            className={`nav-link ${currentPage === "home" ? "active" : ""}`}
          >
            <span>🏠</span>
            <span>Home</span>
          </button>
          <button
            onClick={() => setCurrentPage("about")}
            className={`nav-link ${currentPage === "about" ? "active" : ""}`}
          >
            <span>ℹ️</span>
            <span>About</span>
          </button>
          <button
            onClick={() => setCurrentPage("model")}
            className={`nav-link ${currentPage === "model" ? "active" : ""}`}
          >
            <span>📊</span>
            <span>Model Info</span>
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="nav-mobile">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-toggle"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button
            onClick={() => {
              setCurrentPage("home");
              setMobileMenuOpen(false);
            }}
            className={`nav-link ${currentPage === "home" ? "active" : ""}`}
          >
            <span>🏠</span>
            <span>Home</span>
          </button>
          <button
            onClick={() => {
              setCurrentPage("about");
              setMobileMenuOpen(false);
            }}
            className={`nav-link ${currentPage === "about" ? "active" : ""}`}
          >
            <span>ℹ️</span>
            <span>About</span>
          </button>
          <button
            onClick={() => {
              setCurrentPage("model");
              setMobileMenuOpen(false);
            }}
            className={`nav-link ${currentPage === "model" ? "active" : ""}`}
          >
            <span>📊</span>
            <span>Model Info</span>
          </button>
        </div>
      )}
    </div>

    <style jsx>{`
      .navigation {
        position: sticky;
        top: 0;
        z-index: 40;
        background: ${darkMode ? "#1f2937" : "white"};
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06);
        border-bottom: 1px solid ${darkMode ? "#374151" : "#e5e7eb"};
      }
      .nav-container {
        max-width: 80rem;
        margin: 0 auto;
        padding: 0 1rem;
      }
      .nav-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
      }
      .nav-brand {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      .brand-icon {
        font-size: 1.875rem;
      }
      .brand-name {
        font-size: 1.25rem;
        font-weight: bold;
        color: ${darkMode ? "white" : "#111827"};
      }
      .brand-version {
        font-size: 0.75rem;
        background: ${darkMode ? "#1e3a8a" : "#dbeafe"};
        color: ${darkMode ? "#93c5fd" : "#1e40af"};
        padding: 0.25rem 0.5rem;
        border-radius: 9999px;
      }
      .nav-desktop {
        display: flex;
        align-items: center;
        gap: 2rem;
      }
      .nav-mobile {
        display: none;
        align-items: center;
        gap: 0.5rem;
      }
      .nav-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 0.75rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        border: none;
        background: transparent;
        cursor: pointer;
        transition: all 0.2s;
        color: ${darkMode ? "#d1d5db" : "#4b5563"};
      }
      .nav-link:hover {
        color: ${darkMode ? "white" : "#111827"};
        background: ${darkMode ? "#374151" : "#f3f4f6"};
      }
      .nav-link.active {
        background: ${darkMode ? "#1e3a8a" : "#dbeafe"};
        color: ${darkMode ? "#93c5fd" : "#1d4ed8"};
      }
      .theme-toggle,
      .mobile-menu-toggle {
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: none;
        background: transparent;
        cursor: pointer;
        font-size: 1.25rem;
        transition: background 0.2s;
      }
      .theme-toggle:hover,
      .mobile-menu-toggle:hover {
        background: ${darkMode ? "#374151" : "#f3f4f6"};
      }
      .mobile-menu {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem 0;
        border-top: 1px solid ${darkMode ? "#374151" : "#e5e7eb"};
      }
      @media (max-width: 768px) {
        .nav-desktop {
          display: none;
        }
        .nav-mobile {
          display: flex;
        }
      }
    `}</style>
  </nav>
);

export default Navigation;
