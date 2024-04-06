import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { DescribeForm } from "./components/DescribeForm";
import { InterestForm } from "./components/InterestForm";
import { DoubleCheck } from "./components/DoubleCheck";
import { MathForm } from "./components/MathForm";
import { Loading } from "./components/Loading";
import { AndLoading } from "./components/AndLoading";
import { DecidePath } from "./components/DecidePath";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/ReactInternship" element={<DescribeForm />} />
          <Route path="/InterestForm" element={<InterestForm />} />
          <Route path="/DoubleCheck" element={<DoubleCheck />} />
          <Route path="/MathForm" element={<MathForm />} />
          <Route path="/Loading" element={<Loading />} />
          <Route path="/AndLoading" element={<AndLoading />} />
          <Route path="/DecidePath" element={<DecidePath/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
