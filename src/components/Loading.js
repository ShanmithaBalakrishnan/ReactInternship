import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import Art from "../assets/9352.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";

export const Loading = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    console.log(`Selected option: ${selectedOption}`);
    navigate("/AndLoading");
  };

  const handleBack = () => {
    // Perform any necessary actions with the selected option
    console.log(`Selected option: ${selectedOption}`);

    // Navigate to the interest selection page
    navigate("/MathForm");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button onClick={() => handleBack("")}>
        <FontAwesomeIcon icon={faArrowLeft} className="top-box" />
      </button>
      <div className="bg-green-500 h-1 mb-8 green-bar5"></div>
      <div className="container">
        <div className="left1">
          <img src={Art} alt="Art"/>
        </div>
        <div className="right1">
          <h2 className="text-2xl font-bold mb-8">You're on your way!</h2>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#eac22e", width: "30px", height: "30px" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#eac22e", width: "30px", height: "30px" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#eac22e", width: "30px", height: "30px" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#eac22e", width: "30px", height: "30px" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#eac22e", width: "30px", height: "30px" }}
          />
          <p className="text-gray-600 mb-8 loading">
            "Through its engaging and well-structured courses, Brillant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations."
          </p>
          <p className="text-gray-600 mb-8 loading">
            -Jacob S.
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
