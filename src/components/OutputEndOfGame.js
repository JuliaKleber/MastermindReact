import React from "react";
import OutputOutOfTurns from "./OutputOutOfTurns";
import OutputSolutionFound from "./OutputSolutionFound";

const OutputEndOfGame = ({
  solution,
  hasLost,
  hasWon,
  onResetGame,
}) => {

  const resetGame = () => {
    onResetGame();
  }

  return (
    <div className="column-container card big-card">
      {hasLost && <OutputOutOfTurns solution={solution} />}

      {hasWon && <OutputSolutionFound />}

      {(hasLost || hasWon) &&
        <div className="column-container">
          <span>Möchtest du noch mal spielen?</span>
          <button onClick={() => resetGame()}>Ja</button>
        </div>
      }
    </div>
  );
};

export default OutputEndOfGame;
