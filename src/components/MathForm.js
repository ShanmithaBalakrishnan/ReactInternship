import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const MathForm = () => {
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
    navigate("/Loading");
  };

  const handleBack = () => {
    // Perform any necessary actions with the selected option
    console.log(`Selected option: ${selectedOption}`);

    // Navigate to the interest selection page
    navigate("/DoubleCheck");
  };
  

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button onClick={() => handleBack("")}>
        <FontAwesomeIcon icon={faArrowLeft} className="top-box" />
      </button>
      <div className="bg-green-500 h-1 mb-8 green-bar4"></div>
      <h2 className="text-2xl font-bold mb-8">
        What is your math comfort level?
      </h2>
      <p className="text-gray-600 mb-8">
        Choose the heighest level you feel confident in - you can always adjust
        later.
      </p>
      <div className="con">
        <button onClick={() => handleOptionSelection("student")}>
          <div className="items-center space-x-4 outline-1 box rounded-md p-2">
            <p className="math">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mo>5</mo>
                <mo>x</mo>
                <mfrac>
                  <mrow>
                    <mo>1</mo>
                  </mrow>
                  <mrow>
                    <mo>2</mo>
                  </mrow>
                </mfrac>
                <mo>=</mo>
                <mo>?</mo>
              </math>
            </p>
            <p className="subhead">Arithmetic</p>
            <p className="level">Introductory</p>
          </div>
        </button>
        <button onClick={() => handleOptionSelection("student")}>
          <div className="items-center space-x-4 outline-1 box rounded-md p-2">
            <p className="math">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mo>3</mo>
                <mi>x</mi>
                <mo>+</mo>
                <mo>5</mo>
                <mo>=</mo>
                <mo>4</mo>
              </math>
            </p>
            <p className="subhead">Basic Algebra</p>
            <p className="level">Foundational</p>
          </div>
        </button>
        <button onClick={() => handleOptionSelection("student")}>
          <div className="items-center space-x-4 outline-1 box rounded-md p-2">
            <p className="math">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mi>x</mi>
                <mo>=</mo>
                <mstyle displaystyle="true" scriptlevel="0">
                  <mfrac>
                    <mrow>
                      <mo>&#x2212;</mo>
                      <mi>b</mi>
                      <mo>&#xB1;</mo>
                      <msqrt>
                        <msup>
                          <mi>b</mi>
                          <mn>2</mn>
                        </msup>
                        <mo>&#x2212;</mo>
                        <mn>4</mn>
                        <mi>a</mi>
                        <mi>c</mi>
                      </msqrt>
                    </mrow>
                    <mrow>
                      <mn>2</mn>
                      <mi>a</mi>
                    </mrow>
                  </mfrac>
                </mstyle>
              </math>
            </p>
            <p className="subhead">Intermediate Algebra</p>
            <p className="level">Intermediate</p>
          </div>
        </button>
        <button onClick={() => handleOptionSelection("student")}>
          <div className="items-center space-x-4 outline-1 box rounded-md p-2">
            <p className="math">
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mx>0</mx>
                <mi>∫</mi>
                <mx>L</mx>
                <mi>x</mi>
                <mi>^</mi>
                <mi>2</mi>
                <mi>d</mi>
                <mi>x</mi>
                <mo>=</mo>
                <mo>?</mo>
              </math>
            </p>
            <p className="subhead">Arithmetic</p>
            <p className="level">Introductory</p>
          </div>
        </button>
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
