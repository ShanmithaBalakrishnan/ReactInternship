import React, { useState } from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faUserTie,
  faUser,
  faPersonCane,
  faPersonChalkboard,
  faUsersLine,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const InterestForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    console.log(`Selected option: ${option}`);
  };

  const handleContinue = () => {
    // Perform any necessary actions with the selected option
    console.log(`Selected option: ${selectedOption}`);

    // Navigate to the interest selection page
    navigate("/DoubleCheck");
  };
  const handleBack = () => {
    // Perform any necessary actions with the selected option
    console.log(`Selected option: ${selectedOption}`);

    // Navigate to the interest selection page
    navigate("/ReactIntenship");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button onClick={() => handleBack("")}>
        <FontAwesomeIcon icon={faArrowLeft} className="top-box" />
      </button>
      <div className="bg-green-500 h-1 w-3/12 mb-8 green-bar2"></div>
      <h2 className="text-2xl font-bold mb-8">
        Which are you most interested in?
      </h2>
      <p className="text-gray-600 mb-8">
        Choose just one. This will help us get you started(but won't limit your
        experience).
      </p>
      <div className="flex flex-col space-y-4">
        <button onClick={() => handleOptionSelection("student")}>
          <div className="flex items-center space-x-4 outline-1 option rounded-md p-2">
            <FontAwesomeIcon icon={faUserGraduate} className="option-icon" />
            <span className={selectedOption === "student"}>
              {" "}
              Learning specific skilld to advance my career
            </span>
          </div>
        </button>
        <button onClick={() => handleOptionSelection("professional")}>
          <div className="flex items-center space-x-4 outline-1 option rounded-md p-2">
            <FontAwesomeIcon icon={faUserTie} className="option-icon" />
            <span className={selectedOption === "professional"}>
              {" "}
              Exploring new topics I'm interested in
            </span>
          </div>
        </button>
        <button onClick={() => handleOptionSelection("parent")}>
          <div className="flex items-center space-x-4 outline-1 option rounded-md p-2">
            <FontAwesomeIcon icon={faUser} className="option-icon" />
            <span onClick={() => handleOptionSelection("parent")}>
              {" "}
              Refreshing my math foundations
            </span>
          </div>
        </button>
        <button onClick={() => handleOptionSelection("old")}>
          <div className="flex items-center space-x-4 outline-1 option rounded-md p-2">
            <FontAwesomeIcon icon={faPersonCane} className="option-icon" />
            <span onClick={() => handleOptionSelection("old")}>
              {" "}
              Exercising my brain to stay sharp
            </span>
          </div>
        </button>
        <button onClick={() => handleOptionSelection("teacher")}>
          <div className="flex items-center space-x-4 outline-1 option rounded-md p-2">
            <FontAwesomeIcon
              icon={faPersonChalkboard}
              className="option-icon"
            />
            <span onClick={() => handleOptionSelection("teacher")}>
              {" "}
              Something else
            </span>
          </div>
        </button>
      </div>

      <button
        className="bg-gray-300 hover:bg-gray-900 text-gray-900 hover:text-gray-100 font-bold py-2 px-4 rounded mt-8"
        onClick={() => handleContinue("continue")}
      >
        Continue
      </button>
    </div>
  );
};
