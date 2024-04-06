import React, {  useEffect, useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import "react-circular-progressbar/dist/styles.css";

export const AndLoading = () => {
  const navigate = useNavigate();

  const [progress, setProgress] = React.useState(0);


  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 50); // Adjust the interval time as needed

    if (progress === 100) {
      clearInterval(progressInterval);
      setTimeout(() => {
        navigate('/DecidePath'); // Replace with the desired redirect URL
      }, 50); // Add a slight delay for animation completion
    }

    return () => {
      clearInterval(progressInterval);
    };
  }, [progress, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
      <CircularProgress variant="determinate" value={progress} />
      </div>
      <div className="container1">
        <h2 className="text-2xl font-bold mb-8 texting">
          Finding learning path recommendations for you based on
        </h2>
        <h2 className="text-2xl font-bold texting1">your responses</h2>
      </div>
    </div>
  );
};
