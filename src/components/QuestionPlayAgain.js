import React from "react";

function QuestionPlayAgain({ onPlayAgain }) {
  return (
    <div className="container">
      <p>Möchtest du noch mal spielen?</p>
      <button onClick={() => onPlayAgain(true)}>Ja</button>
    </div>
  );
}

export default QuestionPlayAgain;
