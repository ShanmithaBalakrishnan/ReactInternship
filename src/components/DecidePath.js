import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import Data from "../assets/9354.jpg";

export const DecidePath = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    console.log(`Selected option: ${option}`);
  };

  const handleContinue = () => {
    console.log(`Selected option: ${selectedOption}`);
    navigate("/DoubleCheck");
  };
  const handleBack = () => {
    // Perform any necessary actions with the selected option
    console.log(`Selected option: ${selectedOption}`);

    // Navigate to the interest selection page
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-8">
        Learning paths based on your answers
      </h2>
      <p className="text-gray-600 mb-8">
        Choose one to get started. You can switch anytime.
      </p>

      <div className="contain">
        <button onClick={() => handleOptionSelection("student")}>
          <div className="flex items-center space-x-4 outline-1 option rounded-md p-2">
            <span className="path">
              Foundation Math Build yout foundational skills in algebra,
              geometry, and probability.
            </span>
            <img src={Data} style={{ height: "150px", width: "150px" }} />
          </div>
        </button>
        <button onClick={() => handleOptionSelection("student")}>
          <div className="flex items-center space-x-4 outline-1 option rounded-md p-2">
            <span className={selectedOption === "student"}>
              Foundation Math Build yout foundational skills in algebra,
              geometry, and probability.
            </span>
            <img src={Data} style={{ height: "150px", width: "150px" }} />
          </div>
        </button>
      </div>
    </div>
  );
};
