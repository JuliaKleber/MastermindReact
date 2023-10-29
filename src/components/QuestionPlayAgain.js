import React from "react";

function QuestionPlayAgain({ setIsPlayAgain }) {
  return (
    <div className="container">
      <p>Möchtest du noch mal spielen?</p>
      <button onClick={() => setIsPlayAgain(true)}>Ja</button>
    </div>
  );
}

export default QuestionPlayAgain;
