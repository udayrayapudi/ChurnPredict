// Toast.js
import React from "react";

const Toast = ({ message, type, darkMode }) => (
  <div className={`toast ${type}`}>
    {message}
    <style jsx>{`
      .toast {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 50;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
        color: white;
        font-weight: 500;
      }
      .toast.success {
        background-color: #10b981;
      }
      .toast.error {
        background-color: #ef4444;
      }
    `}</style>
  </div>
);

export default Toast;
