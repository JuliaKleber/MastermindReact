// Repräsentiert den numberTrial-ten Versuch.
// Der Nutzer kann vier Farben in die Kästchen platzieren.
// Durch Klicken des "absenden" Buttons wird der
// Lösungsversuch überprüft und eine entsprechende Nachricht ausgegeben.

import React, { useState, useEffect } from "react";
import InputFields from "./InputFields";
import CheckProposedSolutionButton from "./CheckProposedSolutionButton";
import Output from "./Output";
import QuestionPlayAgain from "./QuestionPlayAgain";

function Trial({
  numberTrial,
  currentTrial,
  chosenColor,
  solution,
  numberTrials,
  numberInputFields,
  resetGame,
  onResetGame,
  onPlayAgain,
  onIncremented,
}) {
  const [chosenColors, setChosenColors] = useState(
    Array(numberInputFields).fill("white")
  );
  const [proposalSent, setProposalSent] = useState(false);
  const [numberInRightPlace, setNumberInRightPlace] = useState(0);
  const [numberInWrongPlace, setNumberInWrongPlace] = useState(0);
  const [endOfGame, setEndOfGame] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  const [isShown, setIsShown] = useState(false);

  // Wenn sich der aktuelle Versuch ändert,
  // werden alle Versuche bis zum aktuellen Versuch angezeigt.
  useEffect(() => {
    numberTrial <= currentTrial ? setIsShown(true) : setIsShown(false);
  }, [currentTrial, numberTrial]);

  // Setzt das Spiel zurück.
  useEffect(() => {
    if (resetGame) {
      setChosenColors(Array(numberInputFields).fill("white"));
      setProposalSent(false);
      onResetGame(false);
    }
  }, [resetGame, numberInputFields, onResetGame]);

  // Wenn der Nutzer noch mal spielen will,
  // wird die Info an App.js weitergegeben.
  useEffect(() => {
    if (playAgain) {
      setEndOfGame(false);
      setPlayAgain(false);
      onPlayAgain(true);
    }
  }, [playAgain, onPlayAgain]);

  return (
    <div className={isShown ? "trial-visible" : "trial-not-visible"}>
      <h3>{numberTrial}. Versuch</h3>
      <InputFields
        currentTrial={currentTrial}
        numberTrial={numberTrial}
        chosenColor={chosenColor}
        numberInputFields={numberInputFields}
        onChosenColors={(newChosenColors) => setChosenColors(newChosenColors)}
        resetGame={resetGame}
      />
      <CheckProposedSolutionButton
        solution={solution}
        chosenColors={chosenColors}
        numberInputFields={numberInputFields}
        currentTrial={currentTrial}
        numberTrials={numberTrials}
        resetGame={resetGame}
        onNumberInRightPlace={(state) => setNumberInRightPlace(state)}
        onNumberInWrongPlace={(state) => setNumberInWrongPlace(state)}
        onProposalSent={(state) => setProposalSent(state)}
        onEndOfGame={(state) => setEndOfGame(state)}
        onIncremented={(state) => onIncremented(state)}
      />
      {proposalSent && (
        <Output
          numberInRightPlace={numberInRightPlace}
          numberInWrongPlace={numberInWrongPlace}
          numberInputFields={numberInputFields}
          currentTrial={currentTrial}
          numberTrial={numberTrial}
          chosenColors={chosenColors}
          numberTrials={numberTrials}
          solution={solution}
          proposalSent={proposalSent}
        />
      )}
      {endOfGame && (
        <QuestionPlayAgain onPlayAgain={() => setPlayAgain(true)} />
      )}
    </div>
  );
}

export default Trial;
