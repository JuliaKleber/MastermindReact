import React from "react";

const QuestionPlayAgain = ({ onResetGameAppComponent }) => {
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
