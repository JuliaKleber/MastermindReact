// Repräsentiert den numberTrial-ten Versuch.
// Der Nutzer kann vier Farben in die Kästchen platzieren.
// Durch Klicken des "absenden" Buttons wird der
// Lösungsversuch überprüft und eine entsprechende Nachricht ausgegeben.

import React, { useState, useEffect } from "react";
import InputFields from "./InputFields";
import OutputHowGoodWasYourProposal from "./OutputHowGoodWasYourProposal";
import OutputSolutionFound from "./OutputSolutionFound";
import OutputOutOfTurns from "./OutputOutOfTurns";

const GuessTrial = ({
  numberTrials,
  numberTrial,
  currentTrial,
  setCurrentTrial,
  currentColor,
  solution,
  numberInputFields,
  endOfGame,
  setEndOfGame,
  onResetGame,
  isResetGame,
  setIsResetGame,
}) => {
  const [solutionGuess, setSolutionGuess] = useState(
    Array(numberInputFields).fill("white")
  );

  // Wenn sich der aktuelle Versuch ändert,
  // werden alle Versuche bis zum aktuellen Versuch angezeigt.
  const isShown = numberTrial <= currentTrial;
  const isInThePast = numberTrial < currentTrial;
  const activeTrial = numberTrial === currentTrial;
  const isLastTrial = currentTrial === numberTrials;

  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [wrongPlaceGuesses, setWrongPlaceGuesses] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState(false);

  useEffect(() => {
    if (isResetGame) {
      setSolutionGuess(Array(numberInputFields).fill("white"));
      setEndOfGame(false);
      if (numberTrial === numberTrials) {
        setIsResetGame(false);
      }
    }
  }, [isResetGame]);

  const handleProposalCheck = () => {
    // Wenn zwei Farben sowohl in der Lösung als auch in dem Lösungsvorschlag
    // an der gleichen Stelle vorkommen, werden Sie aus den beiden Arrays entfernt.
    const reducedSolution = solution.filter(
      (color, i) => color !== solutionGuess[i]
    );
    const reducedGuess = solutionGuess.filter(
      (color, i) => color !== solution[i]
    );
    const newCorrectGuesses = solution.length - reducedSolution.length;
    setCorrectGuesses(newCorrectGuesses);
    // Prüft in der for-Schleife wie viele Farben zwar in beiden Lösungen vorkommen,
    // aber sich an unterschiedlichen Stellen befinden.
    let newWrongPlaceGuesses = 0;
    for (let i = reducedSolution.length - 1; i >= 0; i--) {
      for (let j = reducedSolution.length - 1; j >= 0; j--) {
        if (reducedSolution[i] === reducedGuess[j]) {
          newWrongPlaceGuesses += 1;
          reducedSolution.splice(i, 1);
          reducedGuess.splice(j, 1);
        }
      }
    }
    setWrongPlaceGuesses(newWrongPlaceGuesses);
    // Entweder wird das Ende des Spiels ausgelöst
    // oder CurrentTrial wird um eins erhöht.
    setHasWon(newCorrectGuesses === numberInputFields);
    setHasLost(!hasWon && isLastTrial);
    newCorrectGuesses === numberInputFields || isLastTrial
    ? setEndOfGame(true)
    : setCurrentTrial(currentTrial + 1);
  };

  return (
    <div className={isShown ? "trial-visible" : "trial-not-visible"}>
      <h3>{numberTrial}. Versuch</h3>
      <InputFields
        currentTrial={currentTrial}
        numberTrial={numberTrial}
        currentColor={currentColor}
        chosenColors={solutionGuess}
        setChosenColors={setSolutionGuess}
      />
      {activeTrial && !endOfGame && (
        <button className="send-button" onClick={handleProposalCheck}>
          absenden
        </button>
      )}
      {(isInThePast || hasLost) && (
        <OutputHowGoodWasYourProposal
          numberInRightPlace={correctGuesses}
          numberInWrongPlace={wrongPlaceGuesses}
        />
      )}
      {activeTrial && hasWon && <OutputSolutionFound />}
      {activeTrial && hasLost && <OutputOutOfTurns solution={solution} />}
      {activeTrial && endOfGame && (
        <div className="container">
          <p>Möchtest du noch mal spielen?</p>
          <button onClick={onResetGame}>Ja</button>
        </div>
      )}
    </div>
  );
};

export default GuessTrial;
