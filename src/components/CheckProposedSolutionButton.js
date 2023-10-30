// Durch Klicken des "absenden"-Buttons wird der Lösungsversuch überprüft.

import React from "react";

function CheckProposedSolutionButton({
  solution,
  chosenColors,
  numberInputFields,
  currentTrial,
  setCurrentTrial,
  numberTrials,
  setNumberInRightPlace,
  setNumberInWrongPlace,
  proposalSent,
  setProposalSent,
  setEndOfGame,
  isResetGame,
}) {
  const handleProposalCheck = () => {
    // Die Arrays werden auf die Farben reduziert,
    // die nicht sowohl übereinstimmen, als auch sich an der gleichen Stelle
    // in der Lösung und in dem Lösungsvorschlag vom Nutzer befinden.
    const reducedSolution = solution.filter(
      (color, i) => color !== chosenColors[i]
    );
    const proposal = chosenColors.filter((color, i) => color !== solution[i]);
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
    setNumberInRightPlace(numberInRightPlace);
    setNumberInWrongPlace(numberInWrongPlace);
    // Wird benötigt um den send-button auszublenden.
    setProposalSent(true);
    // Entweder wird das Ende des Spiels ausgelöst
    // oder CurrentTrial wird um eins erhöht.
    numberInRightPlace === numberInputFields || currentTrial === numberTrials
      ? setEndOfGame(true) && isResetGame(false)
      : setCurrentTrial(currentTrial + 1);
  };

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
