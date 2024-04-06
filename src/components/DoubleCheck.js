import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import weigh from "../assets/9350.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export const DoubleCheck = () => {
  const [selectedOption] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    console.log(`Selected option: ${selectedOption}`);
    navigate("/MathForm");
  };

  const handleBack = () => {
    // Perform any necessary actions with the selected option
    console.log(`Selected option: ${selectedOption}`);

    // Navigate to the interest selection page
    navigate("/InterestForm");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <button onClick={() => handleBack("")}>
        <FontAwesomeIcon icon={faArrowLeft} className="top-box" />
      </button>
      <div className="bg-green-500 h-1 mb-8 green-bar3"></div>
      <div className="container">
        <div className="left">
          <img src={weigh} alt="Weight" />
        </div>
        <div className="right">
          <h2 className="text-2xl font-bold mb-8">You're in right place</h2>
          <p className="text-gray-600 mb-8">
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science, and computer science.
          </p>
        </div>
      </div>
      <button
        className="bg-gray-300 hover:bg-gray-900 text-gray-900 hover:text-gray-100 font-bold py-2 px-4 rounded mt-8 button"
        onClick={() => handleContinue("continue")}
      >
        Continue
      </button>
    </div>
  );
};
