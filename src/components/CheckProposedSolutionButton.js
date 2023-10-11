// Durch Klicken des "absenden"-Buttons wird der Lösungsversuch überprüft.

import React, { useState, useEffect } from "react";

function CheckProposedSolutionButton({
  solution,
  chosenColors,
  numberInputFields,
  currentTrial,
  numberTrials,
  resetGame,
  onNumberInRightPlace,
  onNumberInWrongPlace,
  onProposalSent,
  onEndOfGame,
  onIncremented,
}) {
  const [proposalSent, setProposalSent] = useState(false);

  function handleProposalCheck(event) {
    // Die Arrays werden auf die Farben reduziert,
    // die nicht sowohl übereinstimmen, als auch sich an der gleichen Stelle
    // in der Lösung und in dem Lösungsvorschlag vom Nutzer befinden.
    let reducedSolution = solution.filter(
      (color, i) => color !== chosenColors[i]
    );
    let proposal = chosenColors.filter((color, i) => color !== solution[i]);
    const numberInRightPlace = solution.length - reducedSolution.length;
    // Prüft in der for-Schleife wie viele Farben zwar in beiden Lösungen vorkommen,
    // aber sich an unterschiedlichen Stellen befinden.
    let numberInWrongPlace = 0;
    for (let i = reducedSolution.length - 1; i >= 0; i--) {
      for (let j = reducedSolution.length - 1; j >= 0; j--) {
        if (reducedSolution[i] === proposal[j]) {
          numberInWrongPlace += 1;
          reducedSolution.splice(i, 1);
          proposal.splice(j, 1);
        }
      }
    }
    onNumberInRightPlace(numberInRightPlace);
    onNumberInWrongPlace(numberInWrongPlace);
    // Wird benötigt um den send-button auszublenden.
    setProposalSent(true);
    onProposalSent(true);
    // Entweder wird das Ende des Spiels ausgelöst
    // oder CurrentTrial wird um eins erhöht.
    numberInRightPlace === numberInputFields || currentTrial === numberTrials
      ? onEndOfGame(true)
      : onIncremented(currentTrial + 1);
  }

  // Setzt das Spiel zurück.
  useEffect(() => {
    if (resetGame === true) {
      setProposalSent(false);
    }
  }, [resetGame]);

  return (
    <div>
      {!proposalSent && (
        <button className="send-button" onClick={handleProposalCheck}>
          absenden
        </button>
      )}
    </div>
  );
}

export default CheckProposedSolutionButton;
