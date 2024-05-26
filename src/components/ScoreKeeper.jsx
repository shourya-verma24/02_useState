// src/components/ScoreKeeper.jsx

import { useState } from "react";

function ScoreKeeper() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <p>Score: {score}</p>
      <button
        onClick={() => {
          
          setScore = setScore(score+5)
        }}
      >
        Increase by 5
      </button>
      <button
        onClick={() => {
          /* complete the missing code */
          setScore(score-5)
        }}
      >
        Decrease by 5
      </button>
    </div>
  );
}

export default ScoreKeeper;
