import React from "react";

function QuestionPlayAgain({ onResetGameAppComponent }) {
  const handleResetGame = () => {
    onResetGameAppComponent();
  };

  return (
    <div className="container">
      <p>Möchtest du noch mal spielen?</p>
      <button onClick={handleResetGame}>Ja</button>
    </div>
  );
}

export default QuestionPlayAgain;
