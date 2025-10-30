import React from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

// import { gsap } from "gsap";


const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to the Quiz!</h1>
      <hr />
      <p>Click below to begin your challenge 🚀</p>
      <button onClick={() => navigate("/quiz")}>Start Quiz</button>
    </div>
  );
};

export default Start;
